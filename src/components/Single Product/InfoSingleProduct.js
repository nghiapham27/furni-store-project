import { useSelector, useDispatch } from 'react-redux';
import { singleProductAction } from '../../features/singleProduct/singleProduct';
import { cartAction } from '../../features/cart/cart';

import { StarsReview } from '..';
import { FiPlusCircle, FiMinusCircle } from 'react-icons/fi';
import { notification } from 'antd';

const InfoSingleProduct = () => {
  const { productData, loading, selectedColor, selectedQty } = useSelector(
    (state) => state.singleProduct
  );
  const { list } = useSelector((state) => state.cart);
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

  if (Object.keys(productData).length === 0 || loading) {
    return;
  }

  const {
    id,
    stock,
    price,
    reviews,
    stars,
    name,
    description,
    company,
    colors,
  } = productData;

  // update available Qty after substracting from cart (if any)
  let availableQty;
  const [itemInCart] = list.filter(
    (item) => item.id === id && item.color === selectedColor
  );

  itemInCart
    ? (availableQty = itemInCart.stock - itemInCart.qty)
    : (availableQty = stock);

  return (
    <div className="flex flex-col md:pl-8">
      {contextHolder}
      {/* Info Header */}
      <div>
        <h1 className="capitalize font-section-header">{name}</h1>
        <StarsReview numStars={stars} reviews={reviews} />
        <p className="font-sub-header text-gray-500">
          {price.toLocaleString('en-US', {
            style: 'currency',
            currency: 'USD',
            maximumFractionDigits: 2,
          })}
        </p>
      </div>

      {/* Description */}
      <div className="my-4 text-justify">{description}</div>
      <div>
        {/* should use map */}
        <p className="flex">
          <span className="basis-28">Available:</span>
          {availableQty > 0 ? (
            <span>{availableQty}</span>
          ) : (
            <span className="text-red-500 font-semibold bg-yellow-300">
              Out of Stock
            </span>
          )}
        </p>
        <p className="flex">
          <span className="basis-28">SKU:</span>
          <span>{id}</span>
        </p>
        <p className="flex">
          <span className="basis-28">Brand:</span>
          <span>{company.toUpperCase()}</span>
        </p>

        {/* Menu */}
        {/* Select color */}
        <div className="flex items-center mt-4 pt-2 border-t-2">
          <span className="text-xl basis-32 font-semibold">Select color:</span>
          <ul className="flex items-center">
            {colors.map((color) => {
              return (
                <li key={color}>
                  <div
                    className={`w-5 h-5 rounded-[50%] mr-2 ring-yellow-700 active:ring-2 cursor-pointer ${
                      color === selectedColor ? 'ring-2 ring-amber-700' : ''
                    }`}
                    style={{ backgroundColor: `${color}` }}
                    onClick={() => {
                      dispatch(singleProductAction.selectColor(color));
                    }}
                  ></div>
                </li>
              );
            })}
          </ul>
        </div>
        {/* Quantity */}
        <div className="flex items-center md:text-xl mt-2 relative">
          <span className="text-xl basis-32 font-semibold">Quantity:</span>
          <FiMinusCircle
            size={23}
            className="cursor-pointer"
            onClick={() => dispatch(singleProductAction.removeQty())}
          />
          <span className="px-2 text-xl">{selectedQty}</span>
          <FiPlusCircle
            size={23}
            className="cursor-pointer"
            onClick={() => {
              if (selectedQty >= availableQty) {
                showNotification(
                  'warning',
                  'The selected quantity reached quantity available in stock!'
                );
              }
              if (selectedQty < availableQty)
                dispatch(singleProductAction.addQty());
            }}
          />
          {selectedQty > availableQty && (
            <div className=" text-sm text-red-500 absolute top-8 left-0">
              The selected quantity exceeds quantity available in stock!
            </div>
          )}
        </div>
      </div>
      {/* Add to Cart */}
      <div className="flex h-min mt-14">
        <button
          className={` ${
            selectedQty > availableQty ? 'btn-disabled' : 'btn-primary'
          } `}
          disabled={selectedQty > availableQty ? true : false}
          onClick={() => {
            dispatch(
              cartAction.add({
                item: productData,
                color: selectedColor,
                qtyAdded: selectedQty,
              })
            );
            showNotification('success', 'Item added to your cart');
          }}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};
export default InfoSingleProduct;
