import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { ImgSingleProduct, InfoSingleProduct } from '../components';

import { useDispatch, useSelector } from 'react-redux';
import { fetchSingleProductData } from '../features/singleProduct/singleProduct';

let idFetched;
const SingleProductPage = () => {
  const { productId } = useParams();
  const { error } = useSelector((state) => state.singleProduct);
  const dispatch = useDispatch();

  // fetch single product data
  useEffect(() => {
    if (idFetched === productId) {
      return;
    }
    dispatch(fetchSingleProductData(productId));
    return () => {
      idFetched = productId;
    };
  }, []);

  return (
    <section className="w-full">
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
