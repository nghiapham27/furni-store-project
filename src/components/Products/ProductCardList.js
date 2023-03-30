import { Link } from 'react-router-dom';

import { MdFavoriteBorder, MdFavorite } from 'react-icons/md';
import { FaCartPlus } from 'react-icons/fa';

import { cartAction } from '../../store/cart';
import { useDispatch } from 'react-redux';
import { useState } from 'react';

const ProductCardList = ({ singleProductData }) => {
  const [popup, setPopup] = useState(false);

  const { id, image, name, company, category, shipping, price, description } =
    singleProductData;

  const cartDispatch = useDispatch();

  return (
    <div className="w-full shadow-xl rounded-2xl mx-auto overflow-hidden hover:border-amber-300 border-4 border-transparent hover:-translate-y-1 transition-all duration-500">
      <Link
        to={id}
        className="bg-slate-100 overflow-hidden grid grid-cols-[150px_1fr]"
      >
        {/* image */}
        <img
          src={image}
          alt="demo"
          className="w-[150px] h-[150px] rounded-t-xl object-cover"
        />

        <div className="px-4 py-3">
          <div className="flex flex-wrap w-full items-start ">
            {/* title & price */}
            <p className="text-left bg-slate-100 pr-4">
              <span className="font-bold text-xl">
                {name
                  .split(' ')
                  .map(
                    (word) => word.split('')[0].toUpperCase() + word.slice(1)
                  )
                  .join(' ')}
              </span>
              <br />
              <span className="text-slate-500 font-semibold">{` ${(+price).toLocaleString(
                'en-US',
                {
                  style: 'currency',
                  currency: 'USD',
                  maximumFractionDigits: 2,
                }
              )}`}</span>
            </p>

            {/* tags */}
            <p className="flex justify-center bg-slate-100">
              <span className="tag-blue rounded-full px-2">
                {company.toUpperCase()}
              </span>
              <span className="tag-amber rounded-full px-2 mx-1 ">
                {category}
              </span>

              {shipping && (
                <span className="tag-red rounded-full px-2">free ship</span>
              )}
            </p>
          </div>
          {/* description */}
          <div className="w-[90%] max-h-[80px] line-clamp-3">{description}</div>
        </div>
      </Link>

      {/* Actions */}
      <div className="flex justify-end p-2 bg-yellow-50 rounded-b-xl">
        {popup && (
          <p className="text-sm text-slate-500">Item added to your cart</p>
        )}
        <button>
          <MdFavoriteBorder size={25} />
          {/* <MdFavorite size={25} /> */}
        </button>
      </div>
    </div>
  );
};
export default ProductCardList;
