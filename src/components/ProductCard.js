import { Link } from 'react-router-dom';

import { MdFavoriteBorder, MdFavorite } from 'react-icons/md';
import { FaCartPlus } from 'react-icons/fa';

const ProductCard = () => {
  return (
    <div className="w-full shadow-xl rounded-xl mx-auto">
      <Link to="/SingleProduct">
        {/* image */}
        <img
          src="https://images.unsplash.com/photo-1618220179428-22790b461013?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=627&q=80"
          alt="demo"
          className="w-full max-h-[200px] md:max-h-[300px] rounded-t-xl object-cover"
        />

        {/* tags */}
        <p className="flex justify-around py-1 mt-2 bg-slate-50">
          <span className="border border-slate-700 bg-blue-200 rounded-full px-2">
            luxury
          </span>
          <span className="border border-slate-700 bg-red-200 rounded-full px-2">
            indoor
          </span>
        </p>

        {/* title & price */}
        <p className="text-center bg-slate-50">
          <span>Furniture</span>
          <br />
          <span>100$</span>
        </p>
        {/* actions (add to cart + favorite)*/}
      </Link>

      {/* Actions */}
      <div className="flex justify-end p-2 bg-yellow-50 rounded-b-xl">
        <button className="px-4" onClick={() => console.log('add to cart')}>
          <FaCartPlus size={25} />
        </button>
        <button onClick={() => console.log('add to my list')}>
          <MdFavoriteBorder size={25} />
          <MdFavorite size={25} />
        </button>
      </div>
    </div>
  );
};
export default ProductCard;
