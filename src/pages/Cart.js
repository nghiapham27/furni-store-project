import { FaShoppingCart } from 'react-icons/fa';
import { BsArrowRightShort } from 'react-icons/bs';
import ItemCart from '../components/ItemCart';

import { useSelector, useDispatch } from 'react-redux';

const Cart = () => {
  // set up the subscription for cart
  const cart = useSelector((state) => state.cart);
  const cartDispatch = useDispatch();
  console.log(cart);

  return (
    <section className="max-w-7xl mx-auto text-2xl">
      {/* Cart header */}
      <div className="flex items-center justify-center">
        <h1 className="text-2xl font-bold pr-4">Your Cart</h1>
        <span>
          <FaShoppingCart size={30} />
        </span>
      </div>

      {/* table */}
      <div className="w-full p-2">
        {/* table header */}
        <div className="flex flex-col max-w-7xl">
          <div className="hidden text-center border-b border-gray-400 md:grid grid-cols-[minmax(300px,1fr)_repeat(3,minmax(0,1fr))_25px]">
            <p>Item</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Subtotal</p>
          </div>
          {/* items list*/}
          <ul className="pt-2">
            <ItemCart />
            <ItemCart />
          </ul>
        </div>
      </div>

      {/* total amount & payment */}
      <div className="w-full px-2 py-5 text-base grid md:grid-cols-2">
        {/* shopping button */}
        <div className="">
          <button className="btn-primary">
            Continue Shopping <BsArrowRightShort size={20} />
          </button>
        </div>
        {/* total amount */}
        <div className="py-4 flex-col justify-between">
          <p className="flex justify-between border-t border-t-gray-500">
            Subtotal <span>400$</span>
          </p>
          <p className="flex justify-between border-b border-b-gray-500">
            Shipping <span>5$</span>
          </p>
          <p className="uppercase font-bold pt-4 flex justify-between">
            Total <span>405$</span>
          </p>
        </div>
      </div>
    </section>
  );
};
export default Cart;
