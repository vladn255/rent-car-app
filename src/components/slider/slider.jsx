import SwiperCore, { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from "swiper/react";

import { SLIDES_INFO } from '../../const';

SwiperCore.use([Navigation, Pagination]);

const Slider = () => {

    return (
        <Swiper
            navigation
            pagination={{ clickable: false }}
            wrapperTag={'ul'}
            tag={'section'}
        >
            {SLIDES_INFO.map((slide) => {
                return (
                    <SwiperSlide tag={'li'} key={`slide-${slide.title}`}>
                        <article className="slider__article" style={{ background: `linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 100%), url(${process.env.PUBLIC_URL}${slide.imgURL})`}}>
                            <div className="slider__wrapper">
                                <h3 className="slider__title">{slide.title}</h3>
                                <p className="slider__text">{slide.text}</p>
                                <a className={`button button--slide button--${slide.buttonColor}`} href='/#'>Подробнее</a>
                            </div>
                        </article>
                    </SwiperSlide>
                )
            })}

        </Swiper>
    );
}
export default Slider;