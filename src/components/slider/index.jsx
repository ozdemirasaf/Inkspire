import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';

export default function Slider() {
    return (
        <div className="w-full max-w-[70rem] mt-6 px-4">
            <Swiper
                modules={[Navigation, Pagination]}
                spaceBetween={10}
                slidesPerView={1} // Varsayılan olarak tek slayt gösterimi (mobil için)
                navigation
                pagination={{ clickable: true }}
                loop={true}
                breakpoints={{
                    768: {
                        slidesPerView: 2, // 768px ve üzeri: 2 slayt
                    },
                    1024: {
                        slidesPerView: 3, // 1024px ve üzeri: 3 slayt
                    },
                }}
            >
                {[1, 2, 3, 4].map((_, index) => (
                    <SwiperSlide
                        key={index}
                        className="flex flex-col border p-4 bg-gray-800 rounded-2xl w-full max-w-sm mx-auto"
                    >
                        <h2 className="font-semibold text-lg text-white">Başlık</h2>
                        <p className="text-gray-400 text-base font-normal my-2">
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit...
                        </p>
                        <div className="mt-3 flex items-center gap-4">
                            <img src="/images/boy.png" className="h-11 w-11 rounded-full border p-1" alt="User avatar" />
                            <div>
                                <h4 className="text-base text-white font-normal">User123</h4>
                                <p className="text-gray-400 text-sm">Kasım 07, 2024</p>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}
