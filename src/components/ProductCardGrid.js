import { Link } from 'react-router-dom';

import { MdFavoriteBorder, MdFavorite } from 'react-icons/md';
import { FaCartPlus } from 'react-icons/fa';

import { cartAction } from '../store/cart';
import { useDispatch } from 'react-redux';
import { useState } from 'react';

const ProductCardGrid = ({ singleProductData }) => {
  const [popup, setPopup] = useState(false);
  const { id, image, name, company, category, shipping, price, description } =
    singleProductData;

  const cartDispatch = useDispatch();

  // Card of Grid layout
  return (
    <div className="w-full shadow-xl rounded-xl mx-auto hover:scale-105 transition-all duration-500">
      <Link to={id}>
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
            {name
              .split(' ')
              .map((word) => word.split('')[0].toUpperCase() + word.slice(1))
              .join(' ')}
          </span>
          <br />$
          <span className="underline">{` ${(+price).toLocaleString()}`}</span>
        </p>
      </Link>

      {/* Actions */}
      <div className="flex justify-end p-2 bg-yellow-50 rounded-b-xl">
        {popup && (
          <p className="text-sm text-slate-500">Item added to your cart!</p>
        )}
        <button>
          <MdFavoriteBorder size={25} />
          {/* <MdFavorite size={25} /> */}
        </button>
      </div>
    </div>
  );
};
export default ProductCardGrid;
