import { FaCheckCircle } from 'react-icons/fa';
import featureImg1 from '../../assets/feature-1.jpg';
import featureImg2 from '../../assets/feature-2.jpg';

const Features = () => {
  return (
    <div className="flex flex-col">
      <div className="h-auto md:h-[400px] grid md:grid-cols-2 shadow-lg bg-gray-100 rounded-2xl overflow-hidden px-2">
        <img
          src={featureImg1}
          alt="feature 1"
          className="w-[90%] h-[350px] max-w-[600px] rounded-2xl object-cover mx-auto my-4 md:my-auto"
        />
        <div className="mx-6 my-2 md:my-auto md:mx-auto max-w-[500px]">
          <h1 className="text-xl font-bold md:text-2xl lg:text-3xl">
            We Create Your Home More Aestetic
          </h1>
          <p className="py-2 text-gray-500 md:text-lg">
            Furniture power is a software as services for multipurpose business
            management system.
          </p>
          <li className="list-none">
            <ul className="mb-4">
              <h2 className="flex items-center">
                <FaCheckCircle className="mr-2" />
                <span className="text-lg font-semibold md:text-xl lg:text-2xl">
                  Valuation Services{' '}
                </span>
              </h2>
              <p className="lg:text-lg">
                Sometimes features require a short description. This can be
                detailed description.
              </p>
            </ul>
            <ul>
              <h2 className="flex items-center">
                <FaCheckCircle className="mr-2" />
                <span className="text-lg font-semibold md:text-xl lg:text-2xl">
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
      <div className="h-auto md:h-[400px] grid md:grid-cols-2 shadow-lg bg-gray-100 rounded-2xl overflow-hidden mt-6 px-2">
        <img
          src={featureImg2}
          alt="feature 1"
          className="w-[90%] h-[350px] max-w-[600px] rounded-2xl object-cover mx-auto my-4 md:my-auto"
        />
        <div className=" md:col-start-1 md:row-start-1 mx-6 my-4 md:my-auto md:mx-auto max-w-[500px]">
          <h1 className="text-xl font-bold md:text-2xl lg:text-3xl">
            The Best Furniture Manufacturer of your choice
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
