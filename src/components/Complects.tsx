// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import ComplectsCard from './ComplectsCard';
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';
import React from 'react';
import { selectedProduct } from './SelectedProduct';

const Complects:React.FC<selectedProduct> = ({ id, index, product }) => {
  
  console.log(product);
  
  return (
    <div className='px-[5%] mt-10'>
        <p className="header-page montserrat-medium mb-5">Complete the look</p>
        <div>
            <Swiper
            modules={[Navigation, Pagination, Mousewheel, Keyboard]}
            spaceBetween={10}
            slidesPerView={2}
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
            mousewheel={{ forceToAxis: true }}
            keyboard={{ enabled: true }}
            // onSlideChange={() => console.log('slide change')}
            // onSwiper={(swiper) => console.log(swiper)}
            >
            {product?.colors[index].complect1.map((item, i) => (
                <SwiperSlide>
                <ComplectsCard item={item} i={i} index={index} id={id} /> 
                </SwiperSlide>
            ))}
            </Swiper>
        </div>
    </div>
  )
}


export default Complects