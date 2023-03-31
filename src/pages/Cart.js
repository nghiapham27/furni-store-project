import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useAuth0 } from '@auth0/auth0-react';

import { FaShoppingCart } from 'react-icons/fa';
import { BsArrowRightShort } from 'react-icons/bs';
import { ItemCart, NavUser } from '../components';
import { Button } from 'antd';
const Cart = () => {
  // set up the subscription for cart
  const { list, shippingFee, subTotal, totalPrice } = useSelector(
    (state) => state.cart
  );
  const { loginWithRedirect } = useAuth0();
  const { isAuthenticated } = useSelector((state) => state.user);
  console.log(isAuthenticated);

  return (
    <section className="max-w-7xl mx-auto text-2xl">
      {/* Cart header */}
      <div className="flex items-center justify-center">
        {list.length > 0 ? (
          <h1 className="text-2xl font-bold pr-4">Your Cart</h1>
        ) : (
          <h1 className="text-2xl font-bold pr-4 text-red-500">
            Your Cart is Empty
          </h1>
        )}
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
          <ul className="">
            {list.map((item) => (
              <ItemCart key={item.id + item.color} itemData={item} />
            ))}
          </ul>
        </div>
      </div>

      {/* total amount & payment */}
      <div className="w-full px-2 py-5 text-base grid md:grid-cols-2">
        {/* shopping button */}
        <div className="flex h-min">
          <Link to="/products" className="btn-primary">
            Continue Shopping <BsArrowRightShort size={20} />
          </Link>
        </div>
        {/* total amount */}
        <div className="py-4 flex-col justify-between">
          <p className="flex justify-between border-t border-t-gray-500">
            Subtotal{' '}
            <span className="text-xl">
              {subTotal.toLocaleString('en-US', {
                style: 'currency',
                currency: 'USD',
                maximumFractionDigits: 2,
              })}
            </span>
          </p>
          <p className="flex justify-between border-b border-b-gray-500">
            Shipping{' '}
            <span className="text-xl">
              {shippingFee.toLocaleString('en-US', {
                style: 'currency',
                currency: 'USD',
                maximumFractionDigits: 2,
              })}
            </span>
          </p>
          <p className="uppercase font-bold pt-4 flex justify-between">
            Total{' '}
            <span className="text-2xl">
              {totalPrice.toLocaleString('en-US', {
                style: 'currency',
                currency: 'USD',
                maximumFractionDigits: 2,
              })}
            </span>
          </p>
          {!isAuthenticated ? (
            <button
              className="btn-nav mx-auto mt-4 bg-gray-300 font-bold"
              onClick={() => loginWithRedirect()}
            >
              Login to Checkout
            </button>
          ) : (
            <button className="btn-nav mx-auto mt-4 bg-gray-300 font-bold">
              Checkout
            </button>
          )}
        </div>
      </div>
    </section>
  );
};
export default Cart;
