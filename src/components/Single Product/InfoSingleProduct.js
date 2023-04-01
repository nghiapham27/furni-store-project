import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';

import { singleProductAction } from '../../store/singleProduct';
import { cartAction } from '../../store/cart';

import { StarsReview } from '..';
import { FiPlusCircle, FiMinusCircle } from 'react-icons/fi';

const InfoSingleProduct = () => {
  const [maxQtyAlert, setMaxQtyAlert] = useState(false);
  const [itemAdded, setItemAdded] = useState(false);
  const { productData, loading, selectedColor, selectedQty } = useSelector(
    (state) => state.singleProduct
  );
  const { list } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

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
    ? (availableQty = itemInCart.availableQty)
    : (availableQty = stock);

  return (
    <div className="flex flex-col md:pl-8">
      {/* Info Header */}
      <div>
        <h1 className="font-section-header">
          {name
            .split(' ')
            .map((word) => word.split('')[0].toUpperCase() + word.slice(1))
            .join(' ')}
        </h1>
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
            <span className="text-red-500">Out of Stock</span>
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
                      color === selectedColor ? 'ring-2' : ''
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
              if (selectedQty === availableQty) {
                setMaxQtyAlert(true);
                setTimeout(() => setMaxQtyAlert(false), 3000);
              }
              if (selectedQty < availableQty)
                dispatch(singleProductAction.addQty());
            }}
          />

          {maxQtyAlert && (
            <div className=" text-sm text-red-500 absolute top-8 left-0">
              You have reached maximum quantity!
            </div>
          )}
        </div>
      </div>
      {/* Add to Cart */}
      <div className="flex h-min mt-8">
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
            setItemAdded(true);
            setTimeout(() => setItemAdded(false), 1000);
          }}
        >
          Add to Cart
        </button>
        {itemAdded && (
          <span className="ml-2 text-gray-500 my-auto">Item added!</span>
        )}
      </div>
    </div>
  );
};
export default InfoSingleProduct;
