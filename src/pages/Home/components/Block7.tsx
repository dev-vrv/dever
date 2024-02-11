import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";
import "swiper/scss/scrollbar";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import { CgQuote } from "react-icons/cg";


function ReviewsSwiper() {
    return (
        <Swiper
            slidesPerView={1}
            loop={true}
            centeredSlides={true}
            autoplay={{
                delay: 4000,
                disableOnInteraction: false,
            }}
            modules={[Autoplay]}
        >
            <SwiperSlide>
                <div className="text-white reviews__slide--content">
                    <h2 className="reviews__slide--content-quote">
                        <CgQuote />
                    </h2>

                    <h3 className="fs-4 gap-1 text-center reviews__slide--content-review">
                        <CgQuote />
                        <span>Lorem ipsum dolor sit, amet consectetur.</span>
                        <CgQuote />
                    </h3>

                    <p className="fs-5 reviews__slide--content-name">
                        Brian Long, Unvable
                    </p>
                </div>
            </SwiperSlide>

            <SwiperSlide>
                <div className="text-white reviews__slide--content">
                    <h2 className="reviews__slide--content-quote">
                        <CgQuote />
                    </h2>

                    <h3 className="fs-4 text-center reviews__slide--content-review">
                        <CgQuote />
                        <span>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi ipsam fugit modi corporis? Autem, obcaecati?</span>
                        <CgQuote />
                    </h3>

                    <p className="fs-5 reviews__slide--content-name">
                        Jaims Hamton, Unvable
                    </p>
                </div>
            </SwiperSlide>

            <SwiperSlide>
                <div className="text-white reviews__slide--content">
                    <h2 className="reviews__slide--content-quote">
                        <CgQuote />
                    </h2>

                    <h3 className="fs-4 text-center reviews__slide--content-review">
                        <CgQuote />
                        <span>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</span>
                        <CgQuote />
                    </h3>

                    <p className="fs-5 reviews__slide--content-name">
                        June Oliver, Unvable
                    </p>
                </div>
            </SwiperSlide>
        </Swiper>
    )
}

export default function Block7() {
    return (
        <div className="bg-dark reviews">
            <div className="container">
                <ReviewsSwiper />
            </div>
        </div>
    );
}
