import styles from "./form-table.module.scss";

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
    <table className={styles.table}>
      <thead>
        <tr>
          {columns.map((col) => (
            <th key={col.key}>{col.label}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, i) => (
          <tr key={i}>
            {columns.map((col) => (
              <td key={col.key}>{row[col.key]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
