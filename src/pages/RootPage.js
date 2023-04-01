import { useAuth0 } from '@auth0/auth0-react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Outlet } from 'react-router-dom';

import { MainWrapper, NavBar, Footer, BackToTop } from '../components';

import { userAction } from '../store/user';

const RootPage = () => {
  const { isAuthenticated, user } = useAuth0();
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
      <NavBar />
      <section className="flex-grow py-8 px-8 w-full max-w-[1600px] mx-auto">
        <Outlet />
      </section>
      <BackToTop />
      <Footer />
    </MainWrapper>
  );
};
export default RootPage;
// test.furni.store.spa@gmail.com
// TESTfurnistore123

// button outline, setup non-effect for featured products swiper
// error element
