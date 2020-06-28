export const helperRequestProducts = (locationPathname, requestProducts) => {
  if (locationPathname === '/collection/men-home/t-shirts') {
    requestProducts('men-home', 't-shirts');
  } else if (locationPathname === '/collection/men-home/shirts') {
    requestProducts('men-home', 'shirts');
  } else if (locationPathname === '/collection/men-home/jeans') {
    requestProducts('men-home', 'jeans');
  } else if (locationPathname === '/collection/men-home/shorts') {
    requestProducts('men-home', 'shorts');
  } else if (locationPathname === '/collection/men-home/jackets') {
    requestProducts('men-home', 'jackets');
  } else if (locationPathname === '/collection/women-home/t-shirts') {
    requestProducts('women-home', 't-shirts');
  } else if (locationPathname === '/collection/women-home/shorts') {
    requestProducts('women-home', 'shorts');
  } else if (locationPathname === '/collection/women-home/hoodies') {
    requestProducts('women-home', 'hoodies');
  } else if (locationPathname === '/collection/women-home/skirts') {
    requestProducts('women-home', 'skirts');
  } else if (locationPathname === '/collection/women-home/dresses') {
    requestProducts('women-home', 'dresses');
  }
}