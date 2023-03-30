import { useEffect, useState } from 'react';
import { Provider } from 'react-redux';
import { Outlet } from 'react-router-dom';

import { MainWrapper, NavBar, Footer, BackToTop } from '../components';

import store from '../store';

const RootPage = () => {
  return (
    <MainWrapper>
      <Provider store={store}>
        <NavBar />
        <section className="flex-grow py-4 px-8">
          <Outlet />
        </section>
        <BackToTop />
        <Footer />
      </Provider>
    </MainWrapper>
  );
};
export default RootPage;
