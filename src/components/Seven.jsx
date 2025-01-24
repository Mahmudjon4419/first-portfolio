import React, { useState, useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules"; // Import modullari
import "swiper/css";
import "swiper/css/navigation";
import imgOne from '../assets/images/shop container_2/500_500sb 11.svg'
import imgTwo from '../assets/images/shop container_2/500_500sb 12.svg'
import imgThree from '../assets/images/shop container_2/500_500sb 13.svg'
import imgFour from '../assets/images/shop container_2/500_500sb 14.svg'
import imgFive from '../assets/images/shop container_2/500_500sb 14.svg'

const Seven = () => {

    const prevRef = useRef(null);
    const nextRef = useRef(null);

    const products = [
        { img: imgOne, title: "Lancome La Vie Est Belle Eau de Parfum", info: "Омолаживающая сверхувлажняющая маска для лица" },
        { img: imgTwo, title: "Guerlain Aqua Allegoria Discovery Set", info: "Парфюмерный набор" },
        { img: imgThree, title: "Lancome L’Absolu Rouge Ruby Cream Holiday Edition", info: "Ультрапигментированная губная помада" },
        { img: imgFour, title: "Makeup Obsession Be In Love With Eyeshadow Palette", info: "Палетка теней для век" },
        { img: imgFive, title: "Makeup Obsession Be In Love With Eyeshadow Palette", info: "Палетка теней для век" }
    ]

    return (
        <div className="sevenContainer">
            <h1>Проекты</h1>
            <div className="slider-description-container">
                <p className="slider-description">
                    Поднимите уход за кожей на новый уровень! Специально разработанные формулы
                    и запатентованные технологии стирают следы активной мимики и борются с гравитацией.
                </p>
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
                    320: { slidesPerView: 1, spaceBetween: 10 },
                    480: { slidesPerView: 2, spaceBetween: 15 },
                    768: { slidesPerView: 3, spaceBetween: 30 },
                    //   1024: { slidesPerView: 4, spaceBetween: 40 },
                    1440: { slidesPerView: 4, spaceBetween: 50 },
                }}
                onBeforeInit={(swiper) => {
                    swiper.params.navigation.prevEl = prevRef.current;
                    swiper.params.navigation.nextEl = nextRef.current;
                }}
                style={{ marginTop: '1em', padding: "10px" }}
            >
                {products.map((product, index) => (
                    <SwiperSlide key={index}>
                        <a href="#" style={{textDecoration: "none", color: "#000"}}>
                            <div className="productCard">

                                <img src={product.img} alt={product.title} />
                                <div className="productInfo">
                                    <div className="productTitle">
                                        <h4 className="productChild">{product.title}</h4>
                                        <span>{product.info}</span>
                                    </div>

                                </div>
                            </div>
                        </a>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}

export default Seven