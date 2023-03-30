import { Link } from 'react-router-dom';

import Stats from './Stats';

const Hero = () => {
  return (
    <div className=" w-full md:h-[80vh] h-[500px] bg-hero bg-center bg-cover mb-40 md:mb-28 rounded-xl">
      <div className="w-full h-full text-center flex flex-col items-center justify-center bg-transparent/40 rounded-xl">
        <h1 className="text-white font-bold text-3xl md:text-4xl lg:text-5xl">
          Creative Home Simpify <br /> Your Furniture
        </h1>
        <h2 className="text-gray-50 text-xl md:text-2xl mt-8">
          A well-planned home always needs well-designed furniture.
        </h2>
        <Link to={'/products'} className="btn-primary mt-2 text-xl md:text-2xl">
          Shop Now
        </Link>
      </div>
      <Stats />
    </div>
  );
};
export default Hero;
