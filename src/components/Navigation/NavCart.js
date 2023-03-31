import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { FaShoppingCart } from 'react-icons/fa';

const NavCart = () => {
  const { totalQty } = useSelector((state) => state.cart);

  return (
    <Link to="cart" className="btn-nav mr-4">
      <span>Cart</span>
      <div className="relative">
        <FaShoppingCart size={25} />
        <span className="absolute -top-4 left-4 text-white bg-red-600 rounded-full text-xl h-8 w-8 flex items-center justify-center">
          {totalQty}
        </span>
      </div>
    </Link>
  );
};

export default NavCart;
