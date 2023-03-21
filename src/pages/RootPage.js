import { Provider } from 'react-redux';
import { Outlet } from 'react-router-dom';

import { MainWrapper, NavBar, Footer } from '../components';
import { productsData } from '../utils/Draft-Data';
import store from '../store';

const RootPage = () => {
  return (
    <MainWrapper>
      <NavBar />
      <Provider store={store}>
        <section className="flex-grow py-4 px-8">
          <Outlet />
        </section>
      </Provider>
      <Footer />
    </MainWrapper>
  );
};
export default RootPage;

// Finailize products sort (grid, list layout)

// Finailize products detail (star, reviews, thumbnails)

// manage Cart data
