import { Link } from 'react-router-dom';

import { MdFavoriteBorder, MdFavorite } from 'react-icons/md';
import { FaCartPlus } from 'react-icons/fa';

const ProductCard = ({ singleProductData, displayType }) => {
  const { image, name, company, category, shipping, price, description } =
    singleProductData;

  // Card of Grid layout
  const grid = (
    <div className="w-full shadow-xl rounded-xl mx-auto hover:scale-105">
      <Link to="/SingleProduct">
        {/* image */}
        <img
          src={image}
          alt="demo"
          className="w-full h-[200px] md:h-[300px] rounded-t-xl object-cover"
        />

        {/* tags */}
        <p className="flex flex-wrap justify-center bg-slate-100">
          <span className="border border-slate-700 bg-blue-200 rounded-full px-2 mt-1">
            {company.toUpperCase()}
          </span>
          <span className="border border-slate-700 bg-amber-200 rounded-full px-2 mx-1 mt-1">
            {category}
          </span>

          {shipping && (
            <span className="border border-slate-700 bg-red-300 rounded-full px-2 mt-1">
              free ship
            </span>
          )}
        </p>

        {/* title & price */}
        <p className="text-center bg-slate-100 py-2">
          <span className="font-bold">
            {name.split('')[0].toUpperCase() + name.slice(1)}
          </span>
          <br />
          <span>{`$ ${(+price / 100).toLocaleString()}`}</span>
        </p>
      </Link>

      {/* Actions */}
      <div className="flex justify-end p-2 bg-yellow-50 rounded-b-xl">
        <button className="px-4">
          <FaCartPlus size={25} />
        </button>
        <button>
          <MdFavoriteBorder size={25} />
          {/* <MdFavorite size={25} /> */}
        </button>
      </div>
    </div>
  );

  // Card of List layout
  const list = (
    <div className="w-full shadow-xl rounded-xl mx-auto hover:scale-105">
      <Link
        to="/SingleProduct"
        className="bg-slate-100 overflow-hidden grid grid-cols-[150px_1fr]"
      >
        {/* image */}
        <img
          src={image}
          alt="demo"
          className="w-[150px] h-[150px] rounded-t-xl object-cover"
        />

        <div className="px-4 py-3">
          <div className="flex w-full items-start ">
            {/* title & price */}
            <p className="text-left bg-slate-100 pr-4">
              <span className="font-bold text-xl  ">
                {name.split('')[0].toUpperCase() + name.slice(1)}
              </span>
              <br />
              <span>{`$ ${(+price / 100).toLocaleString()}`}</span>
            </p>

            {/* tags */}
            <p className="flex flex-wrap justify-center bg-slate-100">
              <span className="border border-slate-700 bg-blue-200 rounded-full px-2">
                {company.toUpperCase()}
              </span>
              <span className="border border-slate-700 bg-amber-200 rounded-full px-2 mx-1 ">
                {category}
              </span>

              {shipping && (
                <span className="border border-slate-700 bg-red-300 rounded-full px-2">
                  free ship
                </span>
              )}
            </p>

            {/* description */}
          </div>
          <div className=" w-[800px] max-h-[80px] line-clamp-3">
            {description}
          </div>
        </div>
      </Link>

      {/* Actions */}
      <div className="flex justify-end p-2 bg-yellow-50 rounded-b-xl">
        <button className="px-4">
          <FaCartPlus size={25} />
        </button>
        <button>
          <MdFavoriteBorder size={25} />
          {/* <MdFavorite size={25} /> */}
        </button>
      </div>
    </div>
  );

  return displayType === 'grid' ? grid : list;
};
export default ProductCard;
