import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { FaShoppingCart, FaUser } from 'react-icons/fa';

const NavUser = () => {
  const { totalQty } = useSelector((state) => state.cart);

  return (
    <div className="hidden min-w-[200px] md:flex justify-center items-center">
      <Link to="cart" className="btn-nav mr-4">
        <span>Cart</span>
        <div className="relative">
          <FaShoppingCart size={25} />
          <span className="absolute -top-4 left-4 text-white bg-red-600 rounded-full text-xl h-8 w-8 flex items-center justify-center">
            {totalQty}
          </span>
        </div>
      </Link>
      <Link className="btn-nav">
        <FaUser size={25} className />
        Login
      </Link>
    </div>
  );
};
export default NavUser;
