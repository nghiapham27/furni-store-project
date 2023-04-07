import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { cartAction } from '../../features/cart/cart';

import { MdDelete } from 'react-icons/md';
import { FiPlusCircle, FiMinusCircle } from 'react-icons/fi';
import { notification, message, Popconfirm } from 'antd';

const ItemCart = ({ itemData }) => {
  const { id, image, name, price, color, qty, stock } = itemData;
  const dispatch = useDispatch();

  // setup for notification
  const [api, contextHolder] = notification.useNotification();
  const showNotification = (type, text) => {
    api[type]({
      description: text,
      placement: 'topRight',
      style: {
        backgroundColor: '#f3f4f6',
        color: `${type === 'warning' ? '#f43f5e' : 'black'} `,
        fontWeight: 'bold',
      },
    });
  };

  return (
    <div className="grid grid-cols-[1fr_max-content_min-content] items-center text-base md:text-2xl md:grid-cols-[minmax(300px,1fr)_repeat(3,minmax(0,1fr))_min-content] py-2 border-b border-b-gray-300">
      {contextHolder}
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
          <span className="capitalize font-sub-header">{name}</span>
          <br />
          <div
            className="w-2 h-2 md:w-4 md:h-4 rounded-[50%] "
            style={{ backgroundColor: `${color}` }}
          ></div>
          <span className="text-slate-500 md:hidden">
            {price.toLocaleString('en-US', {
              style: 'currency',
              currency: 'USD',
              maximumFractionDigits: 2,
            })}
          </span>
        </div>
      </Link>

      {/* md:price */}
      <div className="hidden text-center md:block">
        {price.toLocaleString('en-US', {
          style: 'currency',
          currency: 'USD',
          maximumFractionDigits: 2,
        })}
      </div>

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
                if (qty >= stock) {
                  showNotification(
                    'warning',
                    'The selected quantity reached quantity available in stock!'
                  );
                  return;
                }
                dispatch(
                  cartAction.add({
                    item: itemData,
                    color: color,
                    qtyAdded: 1,
                  })
                );
              }}
            />
          </button>
        </div>
        <span className="text-gray-400 md:hidden">
          {(price * qty).toLocaleString('en-US', {
            style: 'currency',
            currency: 'USD',
            maximumFractionDigits: 2,
          })}
        </span>
      </div>

      {/* md:subtotal */}
      <div className="hidden text-center md:block">
        {(price * qty).toLocaleString('en-US', {
          style: 'currency',
          currency: 'USD',
          maximumFractionDigits: 2,
        })}
      </div>

      {/* delete */}
      <div className="self-center justify-self-center">
        <Popconfirm
          title="Are you sure to delete this item?"
          okText="Yes"
          cancelText="No"
          okButtonProps={{ danger: true }}
          onConfirm={() => {
            dispatch(
              cartAction.clear({
                item: itemData,
                color: color,
              })
            );
            message.warning('Item deleted from your cart');
          }}
        >
          <button className="text-red-600">
            <MdDelete size={25} onClick={() => {}} />
          </button>
        </Popconfirm>
      </div>
    </div>
  );
};
export default ItemCart;
