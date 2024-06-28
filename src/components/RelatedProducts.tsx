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
    <div className='pb-24 px-[10%]'>
        <p className="text-5xl montserrat-medium mt-5 mb-16">Related products</p>
        <div>
            <Swiper
            modules={[Navigation, Pagination, Mousewheel, Keyboard]}
            spaceBetween={20}
            slidesPerView={4}
            mousewheel={{ forceToAxis: true }}
            keyboard={{ enabled: true }}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
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
