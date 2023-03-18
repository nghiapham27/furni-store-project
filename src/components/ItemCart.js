import { Link } from 'react-router-dom';

import { MdDelete } from 'react-icons/md';
import { FiPlusCircle, FiMinusCircle } from 'react-icons/fi';

const ItemCart = () => {
  return (
    <div className="grid grid-cols-[repeat(2,minmax(0,1fr))_min-content] items-center text-base md:text-2xl md:grid-cols-[minmax(300px,1fr)_repeat(3,minmax(0,1fr))_min-content]">
      {/* img & name & color & (price) */}
      <Link to="/" className="flex flex-grow items-center justify-start">
        <img
          src="https://images.unsplash.com/photo-1618220179428-22790b461013?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=627&q=80"
          alt="demo"
          className="w-20 h-16 md:w-24 md:h-20 object-cover"
        />
        <div className="p-1 self-center">
          <span className="font-bold">Furniture</span>
          <br />
          <div className="w-4 h-4 rounded-[50%] bg-orange-500"></div>
          <span className="text-slate-500 md:hidden">100$</span>
        </div>
      </Link>

      {/* md:price */}
      <div className="hidden text-center md:block">100$</div>

      {/* quantity & subtotal */}
      <div className="text-center">
        <p className="flex justify-center items-center">
          <button>
            <FiMinusCircle />
          </button>
          <span className="px-2">2</span>
          <button>
            <FiPlusCircle />
          </button>
        </p>
        <span className="text-gray-400 md:hidden">200$</span>
      </div>

      {/* md:subtotal */}
      <div className="hidden text-center md:block">200$</div>

      {/* delete */}
      <div className="self-center justify-self-center">
        <button className="text-red-600">
          <MdDelete size={25} />
        </button>
      </div>
    </div>
  );
};
export default ItemCart;
