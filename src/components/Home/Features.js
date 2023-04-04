import { FaCheckCircle } from 'react-icons/fa';
import featureImg1 from '../../assets/feature-1.jpg';
import featureImg2 from '../../assets/feature-2.jpg';

const Features = () => {
  return (
    <div className="home-features flex flex-col mt-40 md:mt-28">
      <div className="h-auto md:h-[400px] grid md:grid-cols-2 md:gap-4 md:items-center shadow-lg bg-gray-100 rounded-2xl overflow-hidden px-4 py-4">
        {/* img */}
        <div className="w-full">
          <img
            src={featureImg1}
            alt="feature 1"
            className=" w-full max-w-[600px] h-[250px] md:h-[350px] mx-auto rounded-2xl object-cover hover:scale-105 transition-all duration-300"
          />
        </div>
        {/* text */}
        <div className="w-full mx-auto my-4 md:my-0">
          <h1 className="font-section-header text-center">
            We Create Your Home More Aestetic
          </h1>
          <p className="py-2 text-slate-400 md:text-lg font-semibold">
            Furniture power is a software as services for multipurpose business
            management system.
          </p>
          <li className="list-none">
            <ul className="mb-4">
              <h2 className="flex items-center">
                <FaCheckCircle size={20} className="mr-2" />
                <span className="font-sub-header">Valuation Services </span>
              </h2>
              <p className="lg:text-lg">
                Sometimes features require a short description. This can be
                detailed description.
              </p>
            </ul>
            <ul>
              <h2 className="flex items-center">
                <FaCheckCircle size={20} className="mr-2" />
                <span className="font-sub-header">
                  Development of Furniture Models
                </span>
              </h2>
              <p className="lg:text-lg">
                Sometimes features require a short description. This can be
                detailed description.
              </p>
            </ul>
          </li>
        </div>
      </div>
      {/*  */}

      <div className="mt-10 h-auto md:h-[400px] grid md:grid-cols-2 md:gap-4 md:items-center shadow-lg bg-gray-100 rounded-2xl overflow-hidden py-4 px-4">
        {/* img */}
        <div className="w-full">
          <img
            src={featureImg2}
            alt="feature 1"
            className="w-full max-w-[600px] h-[250px] md:h-[350px] rounded-2xl object-cover mx-auto hover:scale-105 transition-all duration-300"
          />
        </div>
        {/* text */}
        {/* mx-6 my-4 md:my-auto md:mx-auto max-w-[500px] */}
        <div className=" md:col-start-1 md:row-start-1 w-full mx-auto my-4 md:my-0">
          <h1 className="font-section-header text-center">
            The Best Furniture Manufacturer of Your Choice
          </h1>
          <p className="lg:text-lg py-6">
            Furniture power is a software as services for multipurpose business
            management system, especially for them who are running multiple
            businesses explore the future Furniture power is a software as
            services.
          </p>
        </div>
      </div>
    </div>
  );
};
export default Features;
