import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import AnimationPage from './AnimationPage';
import { ProductsDisplay, ProductsFilter, ProductsSort } from '../components';
import { fetchProducts } from '../store/actions';

const ProductsPage = () => {
  const dispatch = useDispatch();

  // fetch products data
  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  return (
    <section className="max-w-[1500px] mx-auto grid justify-center md:grid-cols-4 md:gap-4">
      {/* <AnimationPage> */}
      <div className="col-span-1">
        <ProductsFilter />
      </div>
      {/* </AnimationPage> */}
      <div className="w-full md:col-span-3">
        <ProductsSort />
        <ProductsDisplay />
      </div>
    </section>
  );
};
export default ProductsPage;
