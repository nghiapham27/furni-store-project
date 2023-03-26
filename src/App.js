import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import {
  Root,
  Error,
  Home,
  About,
  Products,
  SingleProduct,
  Cart,
} from './pages';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Root />,
      errorElement: <Error />,
      children: [
        { index: true, element: <Home /> },
        { path: 'about', element: <About /> },
        { path: 'cart', element: <Cart /> },
        {
          path: 'products',
          element: <Products />,
        },
        {
          path: '/products/:productId',
          element: <SingleProduct />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
