export const helperRequestProducts = (locationPathname, requestProducts, currentPage, pageSize, sortBy) => {
  const splittedPath = locationPathname.split('/');
  requestProducts(splittedPath[2],splittedPath[3], currentPage, pageSize, sortBy);
}