import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import FeaturedProductsSwiper from './FeaturedProductsSwiper';
import { fetchProducts } from './../../features/actions';

const FeaturedProducts = () => {
  const dispatch = useDispatch();

  // fetch products data
  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  return (
    <div className="w-full mt-20">
      <div className="mx-auto md:w-[50%] text-center">
        <h1 className="font-section-header border-b-4 border-b-amber-500 inline-block">
          Featured Products
        </h1>
        <p className="lg:text-lg mt-4 mb-6">
          The products we provide only for you as our services are selected from
          the best products with Number One quality in the world
        </p>
      </div>
      <FeaturedProductsSwiper />
    </div>
  );
};
export default FeaturedProducts;
