import { useSelector, useDispatch } from 'react-redux';

import { AnimationPage } from '../../pages';
import { singleProductAction } from '../../store/singleProduct';
import Loading from '../UI/Loading';

const ImgSingleProduct = () => {
  const { productData, activeImgId, loading } = useSelector(
    (state) => state.singleProduct
  );
  const dispatch = useDispatch();

  const { images = [] } = productData;

  return (
    <>
      {loading ? (
        <div className="col-span-2">
          <Loading text={'Loading Data...'} />
        </div>
      ) : (
        <AnimationPage>
          <div className="w-full  ">
            {/* main img */}{' '}
            <img
              src={images.filter((img) => img.id === activeImgId)[0]?.url}
              alt=""
              className="object-cover w-full h-[300px] md:h-[400px] lg:h-[450px] rounded-md"
            />
            {/* thumbnails */}
            {/* should use map to list these img */}
            <div className="w-full flex justify-between py-6">
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
                      dispatch(singleProductAction.setActiveImgId(img.id));
                    }}
                  />
                );
              })}
            </div>
          </div>
        </AnimationPage>
      )}
    </>
  );
};
export default ImgSingleProduct;
