import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperClass } from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

interface SliderSwiperProps {
    children: React.ReactNode;
    spaceBetween?: number;
    slidesPerView?: number;
    navigation?: boolean;
    pagination?: { clickable: true };
    scrollbar?: { draggable: true };
}

interface SwiperSlideItemProps {
    children: React.ReactNode;
    active?: boolean;
}

function SwiperSlideItem(props: SwiperSlideItemProps) {
    return <SwiperSlide>{props.children}</SwiperSlide>;
}

function SliderSwiper(props: SliderSwiperProps) {
    return (
        <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={props.spaceBetween}
            slidesPerView={props.slidesPerView}
            navigation={props.navigation}
            pagination={props.pagination}
            scrollbar={props.scrollbar}
            onSwiper={(swiper: SwiperClass) => console.log(swiper)}
            onSlideChange={() => console.log("slide change")}
        >
            {props.children}
        </Swiper>
    );
}

export { SliderSwiper, SwiperSlideItem };
