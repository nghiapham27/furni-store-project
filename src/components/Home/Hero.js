import { Link } from 'react-router-dom';

import Stats from './Stats';
import { BsArrowRightShort } from 'react-icons/bs';

const Hero = () => {
  return (
    <div className=" w-full md:h-[80vh] h-[500px] bg-hero bg-center bg-cover rounded-xl -mt-4">
      <div className="w-full h-full text-center flex flex-col items-center justify-center bg-transparent/40 rounded-xl">
        <h1 className="font-primary-header text-white ">
          Creative Home Simpify <br /> Your Furniture
        </h1>
        <h2 className="font-sub-header text-gray-300  mt-8">
          A well-planned home always needs well-designed furniture.
        </h2>
        <Link to={'/products'} className="btn-primary mt-2 text-xl md:text-2xl">
          Shop Now <BsArrowRightShort size={25} className="inline-block" />
        </Link>
      </div>
      <Stats />
    </div>
  );
};
export default Hero;
