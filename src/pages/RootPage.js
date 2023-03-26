import { Provider } from 'react-redux';
import { Outlet } from 'react-router-dom';

import { MainWrapper, NavBar, Footer } from '../components';

import store from '../store';

const RootPage = () => {
  return (
    <MainWrapper>
      <Provider store={store}>
        <NavBar />
        <section className="flex-grow py-4 px-8">
          <Outlet />
        </section>
        <Footer />
      </Provider>
    </MainWrapper>
  );
};
export default RootPage;

// API Handler: load products page & load single product page
// try using <Suspense /> & <Await /> to load data in products page
// Refactor code in pages -> create more components
// animation in homepage

// manage Cart data (show chosen color as well), save to local storage
// popup when item added to cart (after item added successful to database)
// Thumbnails (it's the same img link from API)
