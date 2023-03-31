import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';

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
  return (
    <Provider store={store}>
      <RouterProvider router={router} />;
    </Provider>
  );
}

export default App;
