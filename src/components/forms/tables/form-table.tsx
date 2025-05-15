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

export default function FormTable({ columns, data, onAction }: FormTableProps) {
  const [selectedRow, setSelectedRow] = useState<number[]>([]);
  const [action, setAction] = useState("");

  const handleSeledteAll = (checked: boolean) => {
    if (checked) {
      setSelectedRow(data.map((_, idx) => idx));
    } else {
      setSelectedRow([]);
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

  return (
    <div className={styles.wrapper}>
      <div className={styles.actionbar}>
        <label htmlFor="action-select">Ação</label>
        <input
          type="text"
          name="action-select"
          id="action-select"
          value={action}
          onChange={(e) => setAction(e.target.value)}
          className={styles.actionInput}
        />
        <button className={styles.actionButton} onClick={handleAction}>
          Ir
        </button>
      </div>

      <table className={styles.table}>
        <thead>
          <tr>
            <th className={styles.checkboxCol}>
              <input
                type="checkbox"
                checked={selectedRow.length === data.length}
                onChange={(e) => handleSeledteAll(e.target.checked)}
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
          {data.map((row, i) => (
            <tr key={i} className={styles.row}>
              <td className={styles.checkbox}>
                <input
                  type="checkbox"
                  checked={selectedRow.includes(1)}
                  onChange={() => handleSelectedRow(i)}
                />
              </td>
              {columns.map((col) => (
                <td key={col.key} className={styles.cell}>
                  {row[col.key]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
