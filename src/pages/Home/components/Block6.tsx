import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";
import "swiper/scss/scrollbar";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Link } from "react-router-dom";

import { FaLongArrowAltRight, FaMedal, FaHeadphonesAlt, FaHeart, FaSun } from "react-icons/fa";


function ValuesSwiper() {
    return (
        <Swiper
            slidesPerView={3}
            spaceBetween={50}
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            scrollbar={{ draggable: true }}
        >
            <SwiperSlide>
                <div className="values__slide">
                    <div className="values__slide--icon">
                        <FaMedal />
                    </div>
                    <div className="values__slide--body">
                        <h4>Excellent Quality</h4>
                        <p>Forth forth moveth shall i unto midst tree, fruit great subdue every be so fowl.</p>
                        <Link to={'/'} className="values__slide--button">
                            <span>read more</span>
                            <i><FaLongArrowAltRight /></i>
                        </Link>
                    </div>
                </div>
            </SwiperSlide>
            
            <SwiperSlide>
                <div className="values__slide">
                    <div className="values__slide--icon">
                        <FaHeadphonesAlt/>
                    </div>
                    <div className="values__slide--body">
                        <h4>Customer Service</h4>
                        <p>Be saying moveth spirit fruitful called set evening fly give shall moveth lesser very.</p>
                        <Link to={'/'} className="values__slide--button">
                            <span>read more</span>
                            <i><FaLongArrowAltRight /></i>
                        </Link>
                    </div>
                </div>
            </SwiperSlide>

            <SwiperSlide>
                <div className="values__slide">
                    <div className="values__slide--icon">
                        <FaHeart />
                    </div>
                    <div className="values__slide--body">
                        <h4>The best People</h4>
                        <p>Heaven to bearing that yielding and man. Brought over shall fill over blessed, he appear.</p>
                        <Link to={'/'} className="values__slide--button">
                            <span>read more</span>
                            <i><FaLongArrowAltRight /></i>
                        </Link>
                    </div>
                </div>
            </SwiperSlide>
            
            <SwiperSlide>
                <div className="values__slide">
                    <div className="values__slide--icon">
                        <FaSun />
                    </div>
                    <div className="values__slide--body">
                        <h4>Creative Ideas</h4>
                        <p>Let fly over give, tree i second years two gathering wherein itself called for them.</p>
                        <Link to={'/'} className="values__slide--button">
                            <span>read more</span>
                            <i><FaLongArrowAltRight /></i>
                        </Link>
                    </div>
                </div>
            </SwiperSlide>
            
            <SwiperSlide>
                <div className="values__slide">
                    <div className="values__slide--icon">
                        <FaSun />
                    </div>
                    <div className="values__slide--body">
                        <h4>Creative Ideas</h4>
                        <p>Let fly over give, tree i second years two gathering wherein itself called for them.</p>
                        <Link to={'/'} className="values__slide--button">
                            <span>read more</span>
                            <i><FaLongArrowAltRight /></i>
                        </Link>
                    </div>
                </div>
            </SwiperSlide>
        </Swiper>
    )
}

export default function Block6() {
    return (
        <div className="values mt-5 pt-5">
            <h2 className="display-1 text-center">
                Values
            </h2>
            <div className="container mt-5">
                <ValuesSwiper />
            </div>
        </div>
    );
}
