import { FaCheckCircle } from 'react-icons/fa';

const Features = () => {
  return (
    <div className="flex flex-col">
      <div className="grid md:grid-cols-2 bg-gray-100 shadow-lg rounded-2xl overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8ZnVybml0dXJlfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
          alt="feature 1"
          className="w-full h-full rounded-2xl object-cover"
        />
        <div className="p-6">
          <h1 className="text-xl font-bold">
            We Create Your Home More Aestetic
          </h1>
          <p className="py-2 text-gray-500">
            Furniture power is a software as services for multipurpose business
            management system.
          </p>
          <li className="list-none">
            <ul className="mb-4">
              <h2 className="flex items-center">
                <FaCheckCircle className="mr-2" />
                <span className="text-lg font-bold">Valuation Services </span>
              </h2>
              <p>
                Sometimes features require a short description. This can be
                detailed description.
              </p>
            </ul>
            <ul>
              <h2 className="flex items-center">
                <FaCheckCircle className="mr-2" />
                <span className="text-lg font-bold">
                  Development of Furniture Models
                </span>
              </h2>
              <p>
                Sometimes features require a short description. This can be
                detailed description.
              </p>
            </ul>
          </li>
        </div>
      </div>
      {/*  */}
      <div className="grid md:grid-cols-2 md:flex-row bg-gray-100 shadow-lg rounded-2xl overflow-hidden mt-6">
        <img
          src="https://images.unsplash.com/photo-1538688525198-9b88f6f53126?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8ZnVybml0dXJlfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
          alt="feature 1"
          className="w-full rounded-2xl object-cover md:col-start-2"
        />
        <div className="p-6 md:col-start-1 md:row-start-1 flex flex-col md:justify-center">
          <h1 className="text-xl font-bold">
            The Best Furniture Manufacturer of your choice
          </h1>
          <p>
            Furniture power is a software as services for multipurpose business
            management system.
          </p>
        </div>
      </div>
    </div>
  );
};
export default Features;
