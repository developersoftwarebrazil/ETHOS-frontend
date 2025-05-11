import { Search } from "lucide-react";
import styles from "./form-searchbar.module.scss";

interface SearchBarProps {
  placeholder?: string;
  onSearch: (value: string) => void;
}

export default function SearchBar({
  placeholder = "Buscar...",
  onSearch,
}: SearchBarProps) {
  return (
    <div className={styles.searchbar}>
      <Search className={styles.icon} />
      <input
        type="text"
        className={styles.input}
        placeholder={placeholder}
        onChange={(e) => onSearch(e.target.value)}
      />
      <div className={styles.button}>
        <p>buscar</p>
      </div>
    </div>
  );
}
