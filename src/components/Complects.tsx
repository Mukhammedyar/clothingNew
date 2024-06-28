// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { complect } from '../helpers';
import ComplectsCard from './ComplectsCard';
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';

export default function Complects() {
  return (
    <div className='pb-24 px-[10%]'>
        <p className="text-5xl montserrat-medium mt-24 mb-16">Complete the look</p>
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
            {complect.map((item, index) => (
                <SwiperSlide>
                    <ComplectsCard item={item} index={index}/> 
                </SwiperSlide>
            ))}
            </Swiper>
        </div>
    </div>
  )
}
