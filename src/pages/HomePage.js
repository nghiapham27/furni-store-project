import { Hero, FeaturedProducts } from '../components';

const HomePage = () => {
  return (
    <section>
      <h1 className="text-xl">Home Page</h1>
      <Hero />
      <FeaturedProducts />
    </section>
  );
};
export default HomePage;
