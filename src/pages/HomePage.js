import { useAuth0 } from '@auth0/auth0-react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Hero, Features, FeaturedProducts, Newsletter } from '../components';
import { userAction } from '../store/user';

const HomePage = () => {
  return (
    <section>
      <Hero />
      <Features />
      <FeaturedProducts />
      <Newsletter />
    </section>
  );
};
export default HomePage;
