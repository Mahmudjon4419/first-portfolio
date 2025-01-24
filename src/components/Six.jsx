import React, { useState, useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules"; // Import modullari
import "swiper/css";
import "swiper/css/navigation";

import logoImgOne from '../assets/images/logo/image 5.svg'
import logoImgTwo from '../assets/images/logo/image 6.svg'
import logoImgThree from '../assets/images/logo/image 7.svg'
import logoImgFour from '../assets/images/logo/image 8.svg'
import logoImgFive from '../assets/images/logo/image4.svg'
import logoImgSix from '../assets/images/logo/image4.svg'


const logo = [
    { img: logoImgOne },
    { img: logoImgTwo },
    { img: logoImgThree },
    { img: logoImgSix },
    { img: logoImgFour },
    { img: logoImgFive }
]

const Six = () => {

    const prevRef = useRef(null);
    const nextRef = useRef(null);
    return (
        <div className="sixContainer">
            <div className="sixChild">
                <div className="sliderContainer">
                    <h2 className="slider-title">Популярные товары</h2>

                    <div className="buttons">
                        <button ref={prevRef} className="custom-nav-button prev-button">
                            ◀
                        </button>
                        <button ref={nextRef} className="custom-nav-button next-button">
                            ▶
                        </button>
                    </div>
                </div>
                <Swiper
                    modules={[Navigation, Autoplay]}
                    loop={true}
                    autoplay={{ delay: 3000 }} // Avtomatik aylanish
                    spaceBetween={20}
                    navigation={{
                        prevEl: prevRef.current,
                        nextEl: nextRef.current,
                    }}
                    breakpoints={{
                        320: { slidesPerView: 2, spaceBetween: 10 },
                        //   480: { slidesPerView: 2, spaceBetween: 15 },
                        768: { slidesPerView: 4, spaceBetween: 30 },
                        //   1024: { slidesPerView: 4, spaceBetween: 40 },
                        1440: { slidesPerView: 5, spaceBetween: 20 },
                    }}
                    onBeforeInit={(swiper) => {
                        swiper.params.navigation.prevEl = prevRef.current;
                        swiper.params.navigation.nextEl = nextRef.current;
                    }}
                    style={{ marginTop: '2em', padding: "10px" }}
                >
                    {logo.map((product, index) => (
                        <SwiperSlide key={index}>
                            <div className="logo-card">
                                <a href="#"><img src={product.img} alt={logo.title} /></a>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    )
}

export default Six