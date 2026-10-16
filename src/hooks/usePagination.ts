export type PageItem = number | "...";

export default function usePagination(
  totalPages: number,
  page: number,
): PageItem[] {
  const total = Math.max(0, Math.floor(totalPages));

  if (total === 0) {
    return [];
  }

  if (total <= 5) {
    return Array.from({ length: total }, (_, i) => i + 1);
  }

  if (page <= 2) {
    return [1, 2, 3, "...", total];
  }

  if (page >= total - 1) {
    return [1, "...", total - 2, total - 1, total];
  }

  if (page === 3) {
    return [1, 2, 3, 4, "...", total];
  }

  if (page === total - 2) {
    return [1, "...", total - 3, total - 2, total - 1, total];
  }

  return [1, "...", page - 1, page, page + 1, "...", total];
}
