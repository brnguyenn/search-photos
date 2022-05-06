export const calculatePageCount = (
  totalCount: number,
  itemsPerPage: number
) => {
  if (!totalCount || !itemsPerPage) return 0;
  return Math.ceil(totalCount / itemsPerPage);
};
