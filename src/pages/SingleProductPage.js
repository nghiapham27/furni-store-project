import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { ImgSingleProduct, InfoSingleProduct } from '../components';

import { useDispatch } from 'react-redux';
import { fetchSingleProduct } from '../store/actions';

const SingleProductPage = () => {
  const { productId } = useParams();
  const dispatch = useDispatch();

  // fetch single product data
  useEffect(() => {
    dispatch(fetchSingleProduct(productId));
  }, []);

  return (
    <section className="w-full md:px-4">
      <div className="grid md:grid-cols-2">
        <ImgSingleProduct />
        <InfoSingleProduct />
      </div>
    </section>
  );
};
export default SingleProductPage;
