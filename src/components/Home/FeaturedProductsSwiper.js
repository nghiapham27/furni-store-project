import { Swiper, SwiperSlide } from 'swiper/react';
import { MdNavigateNext, MdNavigateBefore } from 'react-icons/md';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { EffectCoverflow, Pagination, Navigation, Autoplay } from 'swiper';
import { useSelector } from 'react-redux';

import ProductCardGrid from '../Products/ProductCardGrid';
import Loading from '../UI/Loading';

const FeaturedProductsSwiper = () => {
  const { productsData, loading } = useSelector((state) => state.products);

  // get featured products list
  const featuredProductsList = productsData.filter(
    (product) => product.featured
  );

  console.log(featuredProductsList);
  return (
    <>
      {loading ? (
        <Loading text={'Loading Featured Products...'} />
      ) : (
        <Swiper
          // responsive for effect
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 0,
              coverflowEffect: {
                rotate: 0,
                stretch: 0,
                depth: 0,
              },
            },
            640: {
              slidesPerView: 2,
              coverflowEffect: {
                rotate: 0,
                stretch: 0,
                depth: 200,
                slideShadows: false,
              },
            },
          }}
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          autoplay={{ delay: 2000 }}
          pagination={{ el: '.pagination', clickable: true }}
          navigation={{
            nextEl: '.next-slider',
            prevEl: '.previous-slider',
            clickable: true,
          }}
          modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
          className="w-full max-w-[1000px] mt-10"
        >
          {featuredProductsList.map((product) => {
            return (
              <SwiperSlide key={product.id}>
                <div className="w-full max-w-[300px] md:max-w-[400px] mx-auto bg-transparent">
                  <ProductCardGrid singleProductData={product} />
                </div>
              </SwiperSlide>
            );
          })}

          {/* Slider controller */}
          <div className="flex items-center w-48 mx-auto mt-8">
            <MdNavigateBefore
              size={30}
              className="next-slider cursor-pointer active:text-orange-500"
            />
            <div className="pagination flex w-32 justify-between mx-4 cursor-pointer"></div>
            <MdNavigateNext
              size={30}
              className="previous-slider cursor-pointer active:text-orange-500"
            />
          </div>
        </Swiper>
      )}
    </>
  );
};
export default FeaturedProductsSwiper;
