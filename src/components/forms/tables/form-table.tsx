import styles from "../../styles/form-table.module.scss";

interface Column {
  key: string;
  label: string;
}

interface FormTableProps {
  columns: Column[];
  data: Record<string, string | number | null | undefined>[];
}

export default function FormTable({ columns, data }: FormTableProps) {
  return (
    <div className={styles.wrapper}>
      <table className={styles.table}>
        <thead>
          <tr>
            <th className={styles.checkboxCol}>
              <input type="checkbox" className={styles.checkbox}/>
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
                <input type="checkbox" />
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
