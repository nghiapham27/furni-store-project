import { AnimatePresence } from 'framer-motion';
import { Hero, Features, FeaturedProducts, Newsletter } from '../components';
import AnimationPage from './AnimationPage';

const HomePage = () => {
  return (
    <AnimationPage>
      <section>
        <Hero />
        <Features />
        <FeaturedProducts />
        <Newsletter />
      </section>
    </AnimationPage>
  );
};
export default HomePage;
