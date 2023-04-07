import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { FaShoppingCart } from 'react-icons/fa';

const NavCart = () => {
  const cartAgg = useSelector((state) => state.cart.cartAgg);

  return (
    <Link to="cart" className="btn-nav mr-4">
      <span>Cart</span>
      <div className="relative">
        <FaShoppingCart size={25} />
        <span className="absolute -top-4 left-4 text-white bg-red-600 rounded-full text-xl h-8 w-8 flex items-center justify-center">
          {cartAgg.totalQty}
        </span>
      </div>
    </Link>
  );
};

export default NavCart;
