"use client";

import usePagination from "@/hooks/usePagination";
import styles from "./Pagination.module.css";

type Props = {
  totalPages: number;
  page: number;
  changePage: (page: number) => void;
};

export default function Pagination({ totalPages, page, changePage }: Props) {
  const pages = usePagination(totalPages, page);

  if (pages.length <= 1) {
    return null;
  }

  const handlePageChange = (nextPage: number) => {
    if (nextPage < 1 || nextPage > totalPages || nextPage === page) {
      return;
    }

    changePage(nextPage);
  };

  return (
    <nav aria-label="Pagination">
      <ul className={styles.list}>
        {page > 1 && (
          <li>
            <button
              type="button"
              className={styles.page}
              onClick={() => handlePageChange(page - 1)}
              aria-label="Previous page"
            >
              ←
            </button>
          </li>
        )}

        {pages.map((item, index) => (
          <li key={`${item}-${index}`}>
            {item === "..." ? (
              <span className={styles.page} aria-hidden="true">
                …
              </span>
            ) : (
              <button
                type="button"
                className={`${styles.page} ${
                  page === item ? styles.current : ""
                }`}
                onClick={() => handlePageChange(item)}
                aria-current={page === item ? "page" : undefined}
                aria-label={`Page ${item}`}
                disabled={page === item}
              >
                {item}
              </button>
            )}
          </li>
        ))}

        {page < totalPages && (
          <li>
            <button
              type="button"
              className={styles.page}
              onClick={() => handlePageChange(page + 1)}
              aria-label="Next page"
            >
              →
            </button>
          </li>
        )}
      </ul>
    </nav>
  );
}
