import { useSelector, useDispatch } from 'react-redux';

import { singleProductAction } from '../store/singleProduct';

const ImgSingleProduct = ({ images }) => {
  const { productData, activeImgId, loading } = useSelector(
    (state) => state.singleProduct
  );
  const dispatch = useDispatch();

  if (Object.keys(productData).length === 0) {
    return;
  }

  return (
    <>
      {loading ? (
        <div></div>
      ) : (
        <div className="w-full  ">
          {/* main img */}{' '}
          <img
            src={
              productData.images.filter((img) => img.id === activeImgId)[0].url
            }
            alt=""
            className="object-cover w-full h-60 md:w-[100%] md:h-[350px]"
          />
          {/* thumbnails */}
          {/* should use map to list these img */}
          <div className="w-full flex justify-between py-6">
            {productData.images.map((img) => {
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
                    dispatch(singleProductAction.setActiveImgId(img.id));
                  }}
                />
              );
            })}
          </div>
        </div>
      )}
    </>
  );
};
export default ImgSingleProduct;
