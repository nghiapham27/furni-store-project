import { useEffect, useState } from 'react';

import { FiPlusCircle, FiMinusCircle } from 'react-icons/fi';

import { StarsReview } from '../components';

import { cartAction } from '../store/cart';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSingleProduct } from '../store/actions';
import { useParams } from 'react-router-dom';

const SingleProductPage = () => {
  const { productId } = useParams();
  const [activeImgId, setActiveImgId] = useState(null);
  const { singleProduct, loading } = useSelector(
    (state) => state.singleProduct
  );
  const dispatch = useDispatch();

  // fetch data
  useEffect(() => {
    dispatch(fetchSingleProduct(productId));
  }, []);

  if (Object.keys(singleProduct).length === 0) {
    return;
  }
  // product info
  const {
    id,
    images,
    stock,
    price,
    reviews,
    stars,
    name,
    description,
    company,
  } = singleProduct;

  return (
    <section className="w-full md:px-16">
      {/* Product info */}
      {loading ? (
        <div className="mx-auto">Loading data...</div>
      ) : (
        <div className="grid md:grid-cols-2">
          {/* img */}
          <div className="w-full  ">
            {/* main img */}
            <img
              src={
                !activeImgId
                  ? images[0].url
                  : images.filter((img) => img.id === activeImgId)[0].url
              }
              alt=""
              className="object-cover w-full h-60 md:w-[100%] md:h-[350px]"
            />

            {/* thumbnails */}
            {/* should use map to list these img */}
            <div className="w-full flex justify-between py-2">
              {images.map((img) => {
                return (
                  <img
                    key={img.id}
                    src={img.url}
                    alt=""
                    className={`w-[18%] h-14 object-cover rounded-lg cursor-pointer active:brightness-100  ring-amber-500 ${
                      activeImgId === img.id
                        ? 'brightness-100 ring'
                        : 'brightness-50'
                    }`}
                    onClick={() => {
                      setActiveImgId(img.id);
                    }}
                  />
                );
              })}
            </div>
          </div>
          {/* main info */}
          <div className="md:pl-8">
            {/* Name */}
            <h1 className="text-2xl font-bold">
              {name.split('')[0].toUpperCase() + name.slice(1)}
            </h1>

            {/* Reviews */}
            <StarsReview numStars={stars} reviews={reviews} />

            {/* Price */}
            <div className="font-bold text-gray-500">$ {price / 100}</div>
            {/* Description */}
            <div>
              <p>{description}</p>
              {/* should use map */}
              <p className="flex">
                <span className="basis-28">Available:</span>
                {stock > 0 ? (
                  <span>{stock}</span>
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
            </div>

            {/* Menu */}

            {/* Select color */}
            <div className="flex items-center">
              <span className="basis-28 font-semibold">Select color:</span>
              <ul className="flex items-center">
                <li>
                  <button className="w-4 h-4 rounded-[50%] mr-2 bg-amber-400 ring-amber-500 active:ring-2"></button>
                </li>
                <li>
                  <button className="w-4 h-4 rounded-[50%] bg-slate-400 ring-amber-500 active:ring-2"></button>
                </li>
              </ul>
            </div>
            {/* Quantity */}
            <div className="flex items-center text-xl md:text-2xl">
              <span className="text-base basis-28 font-semibold">
                Quantity:
              </span>
              <button>
                <FiMinusCircle />
              </button>
              <span className="px-2">2</span>
              <button>
                <FiPlusCircle />
              </button>
            </div>
            {/* Add to Cart */}
            <div className="flex py-8">
              <button className="btn-primary">Add to Cart</button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
export default SingleProductPage;
