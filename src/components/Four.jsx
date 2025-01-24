import React, { useState, useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules"; // Import modullari
import "swiper/css";
import "swiper/css/navigation";

import imgSlideOne from "../assets/images/shop container/500_500sb 11.svg";
import imgSlideTwo from "../assets/images/shop container/500_500sb 12.svg";
import imgSlideThree from "../assets/images/shop container/500_500sb 13.svg";
import imgSlideFour from "../assets/images/shop container/500_500sb 14.svg";
import imgSlideFive from "../assets/images/shop container/500_500sb 15.svg";
import imgSlideSix from "../assets/images/shop container/500_500sb 16.svg";
import imgSlideSeven from "../assets/images/shop container/500_500sb 16.svg";

const SliderWithSixVisible = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [likedItems, setLikedItems] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const handleLike = (index) => {
    setLikedItems((prev) =>
      prev.includes(index) ? prev.filter((id) => id !== index) : [...prev, index]
    );
  };

  const products = [
    { img: imgSlideOne, titleOne: "Sisley", title: "Sisley Le Phyto Rouge", oldPrice: 3840, price: 1500, isNew: true },
    { img: imgSlideTwo, titleOne: "DR.JAR", title: "Dr.Jart Dermaclear Micro Foam", oldPrice: 2110, price: 1700, isNew: false },
    { img: imgSlideThree, titleOne: "KERASTASE", title: "Kerastase Elixir Ultime L'Huile Originale", oldPrice: 2560, price: 1900, isNew: true },
    { img: imgSlideFour, titleOne: "GUERLAIN", title: "Guerlain Mad Eyes Contrast Shadow Duo", oldPrice: 2700, price: 2100, isNew: false },
    { img: imgSlideFive, titleOne: "DIOR", title: "Dior 5 Couleurs Couture", price: 2300, isNew: true },
    { img: imgSlideSix, titleOne: "JO MALONE", title: "Jo Malone Wood Sage And Sea Salt Cologne", price: 2500, isNew: false },
    { img: imgSlideSeven, titleOne: "JO MALONE", title: "Jo Malone Wood Sage And Sea Salt Cologne", price: 2500, isNew: false },
  ];

  return (
    <div className="slider-container">
      <div className="slider-header">
        <h2 className="slider-title">Популярные товары</h2>
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
          1024: { slidesPerView: 4, spaceBetween: 40 },
          1440: { slidesPerView: 6, spaceBetween: 50 },
        }}
        onBeforeInit={(swiper) => {
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
        }}
        style={{ marginTop: '1em', padding: "10px" }}
      >
        {products.map((product, index) => (
          <SwiperSlide key={index}>
            <div className="product-card">
              {product.isNew && (
                <button
                  className="new-badge"
                  onClick={() => setShowModal(true)}
                >
                  New
                </button>
              )}
              <button
                className={`like-button ${likedItems.includes(index) ? "liked" : ""}`}
                onClick={() => handleLike(index)}
              >
                <span className={`like-icon ${likedItems.includes(index) ? "liked" : ""}`}>❤</span>
              </button>

              <img src={product.img} alt={product.title} />
              <div className="product-info">
                <div className="productTitle">
                  <h3>{product.title}</h3>
                  <h1>{product.titleOne}</h1>
                </div>
                <div className="priceInfo">
                  {product.oldPrice ? (
                    <p className="price old-price">
                      {product.oldPrice} ₽
                    </p>
                  ) : (
                    <p className="price"> </p>
                  )}

                  <p className="price current-price">
                    {product.oldPrice ? product.price : `от ${product.price}`} ₽
                  </p>
                </div>




                <button className="buy-button">
                  <a
                    href={`https://youtube.com`}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ textDecoration: "none", color: "#fff" }}
                  >
                    В корзину
                  </a>
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Modal for "New" information */}
      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <h3>Новинка</h3>
            <p>
              Этот продукт недавно появился в продаже и соответствует самым
              высоким стандартам качества!
            </p>
            <button onClick={() => setShowModal(false)}>Закрыть</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SliderWithSixVisible;
