import { useAuth0 } from '@auth0/auth0-react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Outlet } from 'react-router-dom';

import { MainWrapper, NavBar, Footer, BackToTop } from '../components';

import { userAction } from '../features/user/user';

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
      <section className="container w-full h-full flex-auto mx-auto px-1 py-8">
        <Outlet />
      </section>
      <BackToTop />
      <Footer />
    </MainWrapper>
  );
};
export default RootPage;
