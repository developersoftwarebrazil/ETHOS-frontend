import { Search } from "lucide-react";
import styles from "../../styles/form-searchbar.module.scss";
import { useState } from "react";

interface SearchBarProps {
  placeholder?: string;
  onSearch: (value: string) => void;
}

export default function SearchBar({
  placeholder = "Buscar...",
  onSearch,
}: SearchBarProps) {
  const [input, setInput] = useState("");
  const handleSearch = () => {
    onSearch(input.trim());
  };
  return (
    <div className={styles.searchbar}>
      <Search className={styles.icon} />
      <input
        type="text"
        className={styles.input}
        placeholder={placeholder}
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <div className={styles.button} onClick={handleSearch}>
        <p>buscar</p>
      </div>
    </div>
  );
}
