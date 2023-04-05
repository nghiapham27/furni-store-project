import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { ImgSingleProduct, InfoSingleProduct } from '../components';

import { useDispatch, useSelector } from 'react-redux';
import { fetchSingleProduct } from '../features/actions';

const SingleProductPage = () => {
  const { productId } = useParams();
  const { error } = useSelector((state) => state.singleProduct);
  const dispatch = useDispatch();

  // fetch single product data
  useEffect(() => {
    dispatch(fetchSingleProduct(productId));
  }, []);

  return (
    <section className="w-full md:px-4">
      {error ? (
        <div className="col-span-2 text-center text-xl font-bold text-red-500">
          {error}
        </div>
      ) : (
        <div className="grid md:grid-cols-2">
          <ImgSingleProduct />
          <InfoSingleProduct />
        </div>
      )}
    </section>
  );
};
export default SingleProductPage;
