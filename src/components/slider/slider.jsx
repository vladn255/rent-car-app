import SwiperCore, { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from "swiper/react";

import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';

import { SLIDES_INFO } from '../../const';

SwiperCore.use([Navigation, Pagination]);

const Slider = () => {

    return (
        <Swiper
            navigation
            pagination={{ clickable: false }}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
            wrapperTag={'ul'}
            tag={'section'}
        >
            {SLIDES_INFO.map((slide) => {
                return (
                    <SwiperSlide tag={'li'} key={`slide-${slide.title}`}>
                        <article className="slider__article" style={{ backgroundImage: `url(${process.env.PUBLIC_URL}${slide.imgURL})` }}>
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