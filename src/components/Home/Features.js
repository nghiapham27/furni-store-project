import { FaCheckCircle } from 'react-icons/fa';
import featureImg1 from '../../assets/feature-1.jpg';
import featureImg2 from '../../assets/feature-2.jpg';

const Features = () => {
  return (
    <div className="flex flex-col mt-40 md:mt-28">
      <div className="h-auto md:h-[400px] grid md:grid-cols-2 shadow-lg bg-gray-100 rounded-2xl overflow-hidden px-2">
        <img
          src={featureImg1}
          alt="feature 1"
          className="w-[90%] max-w-[600px] h-[250px] md:h-[350px] rounded-2xl object-cover mx-auto my-4 md:my-auto"
        />
        <div className="mx-6 my-2 md:my-auto md:mx-auto max-w-[520px]">
          <h1 className="font-section-header">
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
      <div className="h-auto md:h-[400px] grid md:grid-cols-2 shadow-lg bg-gray-100 rounded-2xl overflow-hidden mt-6 px-2">
        <img
          src={featureImg2}
          alt="feature 1"
          className="w-[90%] max-w-[600px] h-[250px] md:h-[350px]  rounded-2xl object-cover mx-auto my-4 md:my-auto"
        />
        <div className=" md:col-start-1 md:row-start-1 mx-6 my-4 md:my-auto md:mx-auto max-w-[500px]">
          <h1 className="font-section-header">
            The Best Furniture Manufacturer of your choice
          </h1>
          <p className="lg:text-lg py-6 text-justify">
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
