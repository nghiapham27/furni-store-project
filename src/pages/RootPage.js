import { useAuth0 } from '@auth0/auth0-react';
import { useEffect } from 'react';
import { Provider, useDispatch } from 'react-redux';
import { Outlet } from 'react-router-dom';

import { MainWrapper, NavBar, Footer, BackToTop } from '../components';

import store from '../store';
import { userAction } from '../store/user';

const RootPage = () => {
  const { isLoading, isAuthenticated, error, user, logout } = useAuth0();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      userAction.initiateUser({
        isAuthenticated: isAuthenticated,
        user: user,
      })
    );
  }, [isAuthenticated]);
  return (
    <MainWrapper>
      {/* <Provider store={store}> */}
      <NavBar />
      <section className="flex-grow py-4 px-8">
        <Outlet />
      </section>
      <BackToTop />
      <Footer />
      {/* </Provider> */}
    </MainWrapper>
  );
};
export default RootPage;

// button outline, setup non-effect for featured products swiper
// fetch cart from the local storage
// NavUser for sidebar
