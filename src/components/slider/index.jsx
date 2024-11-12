import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

export default function Slider() {
    return (
        <div className="p-4  md:max-w-full">
            <h3 className="mb-3 p-1 border-b inline-block text-white font-semibold text-[22px] leading-5">
                Trend Paylaşımlar
            </h3>
            <div className="md:max-w-screen-lg mx-auto overflow-x-hidden">
                <Swiper
                    spaceBetween={0}
                    slidesPerView={5}
                    navigation
                    pagination={{ clickable: true }}
                    modules={[Navigation, Pagination]}
                    className="flex justify-center items-center max-w-full"
                    breakpoints={{
                        320: { slidesPerView: 1 },
                        640: { slidesPerView: 2 },
                        768: { slidesPerView: 3 },
                        1024: { slidesPerView: 4 },
                        1280: { slidesPerView: 5 },
                    }}
                >
                    {[...Array(10)].map((_, index) => (
                        <SwiperSlide key={index}>
                            <div className="w-20 h-20 rounded-full border border-[#ffffff27] flex items-center justify-center cursor-pointer">
                                <img src="/images/boy.png" className="w-20 h-20 rounded-full p-2" alt={`Slide ${index + 1}`} />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
}
