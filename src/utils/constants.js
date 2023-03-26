export const links = [
  { id: 1, text: 'Home', url: '/' },
  { id: 2, text: 'Products', url: 'products' },
  { id: 3, text: 'About', url: 'about' },
];

export const sortBy = [
  { text: '---', type: null },
  { text: 'Price (Lowest)', type: 'ascending' },
  { text: 'Price (Highest)', type: 'descending' },
];

export const productsAPI = 'https://course-api.com/react-store-products';
export const singleProductAPI =
  'https://course-api.com/react-store-single-product?id=';
