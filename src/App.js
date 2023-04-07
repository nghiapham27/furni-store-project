import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import { ConfigProvider } from 'antd';

import {
  Root,
  Error,
  Home,
  About,
  Products,
  SingleProduct,
  Cart,
  Checkout,
  PrivateRoute,
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
          path: 'checkout',
          element: (
            <PrivateRoute>
              <Checkout />
            </PrivateRoute>
          ),
        },
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
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: '#f59e0b',
          },
        }}
      >
        <RouterProvider router={router} />
      </ConfigProvider>
    </Provider>
  );
}

export default App;
