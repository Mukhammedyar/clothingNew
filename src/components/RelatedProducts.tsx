// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { related } from '../helpers';
import ComplectsCard from './ComplectsCard';
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';

export default function RelatedProduct() {
  return (
    <div className='pb-24 px-[5%]'>
        <p className="header-page montserrat-medium mt-5 mb-5">Related products</p>
        <div>
            <Swiper
            modules={[Navigation, Pagination, Mousewheel, Keyboard]}
            spaceBetween={20}
            breakpoints={{
              // when window width is >= 640px
              640: {
                width: 640,
                slidesPerView: 2,
                spaceBetween: 10
              },
              // when window width is >= 768px
              768: {
                width: 768,
                slidesPerView: 3,
                spaceBetween: 10
              },
              980: {
                width: 1100,
                slidesPerView: 4,
                spaceBetween: 10
              },
            }}   
            slidesPerView={4}
            mousewheel={{ forceToAxis: true }}
            keyboard={{ enabled: true }}
            // onSlideChange={() => console.log('slide change')}
            // onSwiper={(swiper) => console.log(swiper)}
            >
            {related.map((item, index) => (
                <SwiperSlide>
                    <ComplectsCard item={item} index={index}/> 
                </SwiperSlide>
            ))}
            </Swiper>
        </div>
    </div>
  )
}
