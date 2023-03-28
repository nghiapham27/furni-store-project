import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { cartAction } from '../store/cart';

import { MdDelete } from 'react-icons/md';
import { FiPlusCircle, FiMinusCircle } from 'react-icons/fi';

const ItemCart = ({ itemData }) => {
  const { id, image, name, price, color, qty, subTotal } = itemData;
  const dispatch = useDispatch();

  return (
    <div className="grid grid-cols-[1fr_max-content_min-content] items-center text-base md:text-2xl md:grid-cols-[minmax(300px,1fr)_repeat(3,minmax(0,1fr))_min-content] py-2">
      {/* img & name & color & (price) */}
      <Link
        to={`/products/${id}`}
        className="w-full flex items-center justify-start"
      >
        <img
          src={image}
          alt={name}
          className="w-10 h-10 md:w-20 md:h-20 object-cover"
        />
        <div className="p-1 self-center">
          <span className="font-semibold text-base md:text-xl">
            {name
              .split(' ')
              .map((word) => word.split('')[0].toUpperCase() + word.slice(1))
              .join(' ')}
          </span>
          <br />
          <div
            className="w-2 h-2 md:w-4 md:h-4 rounded-[50%] "
            style={{ backgroundColor: `${color}` }}
          ></div>
          <span className="text-slate-500 md:hidden">
            $ {+price.toFixed(2)}
          </span>
        </div>
      </Link>

      {/* md:price */}
      <div className="hidden text-center md:block">$ {price.toFixed(2)}</div>

      {/* quantity & subtotal */}
      <div className="text-center px-3 relative">
        <div className="flex justify-center items-center">
          <button>
            <FiMinusCircle
              onClick={() =>
                dispatch(
                  cartAction.remove({
                    item: itemData,
                    color: color,
                  })
                )
              }
            />
          </button>
          <span className="px-2">{qty}</span>
          <button>
            <FiPlusCircle
              onClick={() => {
                dispatch(
                  cartAction.add({
                    item: itemData,
                    color: color,
                  })
                );
              }}
            />
          </button>
        </div>
        <span className="text-gray-400 md:hidden">
          $ {+subTotal.toFixed(2)}
        </span>
      </div>

      {/* md:subtotal */}
      <div className="hidden text-center md:block">
        $ {+subTotal.toFixed(2)}
      </div>

      {/* delete */}
      <div className="self-center justify-self-center">
        <button className="text-red-600">
          <MdDelete
            size={25}
            onClick={() => {
              dispatch(
                cartAction.clear({
                  item: itemData,
                  color: color,
                })
              );
            }}
          />
        </button>
      </div>
    </div>
  );
};
export default ItemCart;
