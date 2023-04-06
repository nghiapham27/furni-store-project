import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { ProductsDisplay, ProductsFilter } from '../components';
import { fetchProductsData } from '../features/products/products';

const ProductsPage = () => {
  const dispatch = useDispatch();

  // fetch products data
  useEffect(() => {
    dispatch(fetchProductsData());
  }, []);

  return (
    <section className="max-w-[1500px] mx-auto grid justify-center md:grid-cols-4 md:gap-4">
      <div className="col-span-1">
        <ProductsFilter />
      </div>
      <div className="w-full md:col-span-3">
        <ProductsDisplay />
      </div>
    </section>
  );
};
export default ProductsPage;
