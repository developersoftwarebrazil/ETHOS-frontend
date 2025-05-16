import styles from "../../styles/form-table.module.scss";

type TableFooterProps = {
  selectedCount: number;
  totalPages: number;
  currentPage: number;
  onPageChange: (page: number) => void;
};

export default  function TableFooter({
  selectedCount,
  totalPages,
  currentPage,
  onPageChange,
}: TableFooterProps) {
  const renderPages = () =>
    Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
      <button
        key={page}
        onClick={() => onPageChange}
        className={`${styles.pageButton}${
          currentPage === page ? styles.active : ""
        }`}
      >
        {page}
      </button>
    ));

  return (
    <div className={styles.footer}>
      <span>
        {selectedCount > 0
          ? `${selectedCount} item(ns) selecionado(s)`
          : "Nenhum item selecionado"}
      </span>
       <div className={styles.pagination}>{renderPages()}</div>
    </div>
  );
}
