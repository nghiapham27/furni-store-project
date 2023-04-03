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
      <section className="container w-full h-full flex-auto mx-auto py-8">
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
