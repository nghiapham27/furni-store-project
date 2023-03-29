import { Swiper, SwiperSlide } from 'swiper/react';
import { MdNavigateNext } from 'react-icons/md';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { EffectCoverflow, Pagination, Navigation, EffectCube } from 'swiper';
import { Link } from 'react-router-dom';

const TestSwiper = () => {
  const imgUrls = [
    'https://images.unsplash.com/photo-1493612276216-ee3925520721?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cmFuZG9tfGVufDB8MXwwfHw%3D&auto=format&fit=crop&w=500&q=60',
    'https://images.unsplash.com/photo-1509281373149-e957c6296406?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cmFuZG9tfGVufDB8MXwwfHw%3D&auto=format&fit=crop&w=500&q=60',
    'https://images.unsplash.com/photo-1518895949257-7621c3c786d7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cmFuZG9tfGVufDB8MXwwfHw%3D&auto=format&fit=crop&w=500&q=60',
    'https://images.unsplash.com/photo-1509114397022-ed747cca3f65?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8cmFuZG9tfGVufDB8MXwwfHw%3D&auto=format&fit=crop&w=500&q=60',
    'https://images.unsplash.com/photo-1504470695779-75300268aa0e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHJhbmRvbXxlbnwwfDF8MHx8&auto=format&fit=crop&w=500&q=60',
    'https://images.unsplash.com/photo-1679954570743-fadc1f2953f4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60',
    'https://images.unsplash.com/photo-1679939652241-4679c2125e2f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60',
  ];
  return (
    <div>
      <h1 className="mx-auto font-bold text-center">Images Gallery</h1>
      <Swiper
        breakpoints={{
          // when window width is >= 480px
          320: {
            slidesPerView: 1,
            spaceBetween: 30,
          },
          // when window width is >= 480px
          640: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          // when window width is >= 640px
          1024: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
        }}
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={'3'}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 3,
        }}
        pagination={{ el: '.swiper-pagination', clickable: true }}
        navigation={{
          nextEl: '.next-slider',
          prevEl: '.swiper-button-prev',
          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation, EffectCube]}
        className="swiper_container"
      >
        {imgUrls.map((img, i) => {
          return (
            <SwiperSlide key={i}>
              <Link>
                <img
                  src={img}
                  alt="slide_image"
                  className="w-full h-96 object-cover cursor-pointer"
                />
              </Link>
            </SwiperSlide>
          );
        })}

        {/* <div className="slider-controler">
          <div className="swiper-button-prev slider-arrow">
            <ion-icon name="arrow-back-outline"></ion-icon>
          </div>
          <div className="swiper-button-next slider-arrow">
            <ion-icon name="arrow-forward-outline"></ion-icon>
          </div>
          <div className="swiper-pagination"></div>
        </div> */}
        <div className="">
          <MdNavigateNext
            size={40}
            className="next-slider cursor-pointer flex"
          />
        </div>
      </Swiper>
    </div>
  );
};
export default TestSwiper;
