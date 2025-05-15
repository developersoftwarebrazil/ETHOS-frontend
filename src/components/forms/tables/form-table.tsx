import { useState } from "react";
import styles from "../../styles/form-table.module.scss";

interface Column {
  key: string;
  label: string;
}

interface FormTableProps {
  columns: Column[];
  data: Record<string, string | number | null | undefined>[];
  onAction?: (action: string, selected: number[]) => void;
}

const ITEMS_PER_PAGE = 5;

export default function FormTable({ columns, data, onAction }: FormTableProps) {
  const [selectedRow, setSelectedRow] = useState<number[]>([]);
  const [action, setAction] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(data.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentData = data.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  const handleSelectAll = (checked: boolean) => {
    const pageIndices = currentData.map((_, idx) => startIndex + idx);
    if (checked) {
      setSelectedRow((prev) => Array.from(new Set([...prev, ...pageIndices])));
    } else {
      setSelectedRow((prev) => prev.filter((i) => !pageIndices.includes(i)));
    }
  };

  const handleSelectedRow = (index: number) => {
    setSelectedRow((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  const handleAction = () => {
    if (onAction && action) {
      onAction(action, selectedRow);
    }
  };

  const isPageFullySelected = currentData.every((_, idx) =>
    selectedRow.includes(startIndex + idx)
  );

  return (
    <div className={styles.wrapper}>
      {/* AÇÃO */}
      <div className={styles.actionbar}>
        <label htmlFor="action-select">Ação</label>
        <input
          type="text"
          id="action-select"
          value={action}
          onChange={(e) => setAction(e.target.value)}
          className={styles.actionInput}
        />
        <button className={styles.actionButton} onClick={handleAction}>
          Ir
        </button>
      </div>

      {/* TABELA */}
      <table className={styles.table}>
        <thead>
          <tr>
            <th className={styles.checkboxCol}>
              <input
                type="checkbox"
                checked={isPageFullySelected}
                onChange={(e) => handleSelectAll(e.target.checked)}
              />
            </th>
            {columns.map((col) => (
              <th key={col.key} className={styles.headerCell}>
                {col.label.toUpperCase()}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {currentData.map((row, i) => {
            const actualIndex = startIndex + i;
            return (
              <tr key={actualIndex} className={styles.row}>
                <td className={styles.checkbox}>
                  <input
                    type="checkbox"
                    checked={selectedRow.includes(actualIndex)}
                    onChange={() => handleSelectedRow(actualIndex)}
                  />
                </td>
                {columns.map((col) => (
                  <td key={col.key} className={styles.cell}>
                    {row[col.key]}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>

      {/* FOOTER COM PAGINAÇÃO */}
      <div className={styles.footer}>
        <div className={styles.selectedInfo}>
          {selectedRow.length > 0
            ? `${selectedRow.length} item(s) selecionado(s)`
            : "Nenhum item selecionado"}
        </div>
        <div className={styles.pagination}>
          {Array.from({ length: totalPages }, (_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentPage(idx + 1)}
              className={`${styles.pageButton} ${
                currentPage === idx + 1 ? styles.activePage : ""
              }`}
            >
              {idx + 1}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
