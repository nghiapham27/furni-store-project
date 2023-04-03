import { FaFacebookF, FaTwitter, FaYoutube, FaInstagram } from 'react-icons/fa';

export const links = [
  { id: 1, text: 'Home', url: '/' },
  { id: 2, text: 'Products', url: 'products' },
  { id: 3, text: 'About', url: 'about' },
  { id: 4, text: 'Checkout', url: 'checkout' },
];

export const statsData = [
  { id: 1, value: '7', text: 'Years Experience' },
  { id: 2, value: '2', text: 'Opened in the Country' },
  { id: 3, value: '10k+', text: 'Furniture sold' },
  { id: 4, value: '260+', text: 'Variants Furniture' },
];

export const sortBy = [
  { text: '---', type: null },
  { text: 'Price (Lowest)', type: 'ascending' },
  { text: 'Price (Highest)', type: 'descending' },
];

export const socialsList = [
  { id: 1, name: 'facebook', icon: <FaFacebookF size={20} /> },
  { id: 2, name: 'twitter', icon: <FaTwitter size={20} /> },
  { id: 3, name: 'youtube', icon: <FaYoutube size={20} /> },
  { id: 4, name: 'instagram', icon: <FaInstagram size={20} /> },
];

export const productsAPI = 'https://course-api.com/react-store-products';
export const singleProductAPI =
  'https://course-api.com/react-store-single-product?id=';

export const timeout = 10; // in seconds
