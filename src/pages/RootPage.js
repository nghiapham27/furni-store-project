import { Outlet } from 'react-router-dom';

import { MainWrapper, NavBar, Footer } from '../components';

const RootPage = () => {
  return (
    <MainWrapper>
      <NavBar />
      <section className="flex-grow py-4 px-8">
        <Outlet />
      </section>
      <Footer />
    </MainWrapper>
  );
};
export default RootPage;
