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

// save to local storage
// finalize cart layout
// Thumbnails (it's the same img link from API)

// stick navigation
// animation in homepage
// popup when item added to cart (after item added successful to database)
