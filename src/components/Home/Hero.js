import { Link } from 'react-router-dom';

import Stats from './Stats';

const Hero = () => {
  return (
    <div className="w-full h-[70vh] max-h-[850px] bg-hero bg-center bg-no-repeat bg-cover mb-32 md:mb-20">
      <div className="w-full h-full text-center bg-black/20 flex flex-col items-center justify-center">
        <h1 className="text-orange-50 font-bold text-3xl md:text-4xl">
          Creative Home Simpify Your Furniture
        </h1>
        <h2 className="text-gray-200 text-xl md:text-2xl">
          A well-planned home always needs well-designed furniture.
        </h2>
        <Link to={'/products'} className="btn-primary mt-10">
          Shop Now
        </Link>
      </div>
      <Stats />
    </div>
  );
};
export default Hero;
