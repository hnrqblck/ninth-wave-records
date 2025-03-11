// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import Mayhem from '../../assets/banners/mayhem_banner.png';
import Eusexua from '../../assets/banners/eusexua-banner.jpg';
import EternalSunshine from '../../assets/banners/eternal_sunshine_deluxe.webp';
import LoveliestTime from '../../assets/banners/the_loveliest_time_banner.jpg';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import './swiper-custom.css'

const BannerCarousel = () => {
  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, A11y]}
      spaceBetween={0}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
    //   scrollbar={{ draggable: true }}
      speed={50} 
      loop={true}
      className='h-auto rounded-none overflow-hidden'
    >
       <SwiperSlide>
          <img
            src={Mayhem}
            alt="Banner of Mayhem by Lady Gaga"
            // className="w-full h-auto"
          />
        </SwiperSlide>
       <SwiperSlide>
          <img
            src={EternalSunshine}
            alt="Banner of Eternal Sunshine Deluxe by Ariana"
            // className="w-full h-auto"
          />
        </SwiperSlide>
       <SwiperSlide>
          <img
            src={Eusexua}
            alt="Banner of Eusexua by FKA Twigs"
            // className="w-full h-auto"
          />
        </SwiperSlide>
       <SwiperSlide>
          <img
            src={LoveliestTime}
            alt="Banner of The Loveliest Time by Carly Rae Jepsen"
            // className="w-full h-auto"
          />
        </SwiperSlide>
       
    </Swiper>
  );
};
export default BannerCarousel;