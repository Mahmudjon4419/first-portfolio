import React, { useState } from 'react';
import navRasm from '../assets/images/shop container/500_500sb 11.svg';

const First = () => {
    const [isNavOpen, setIsNavOpen] = useState(false);

    const toggleNav = () => {
        setIsNavOpen(!isNavOpen);
    };

    return (
        <div className="First">
            <div className="First_container">
                <div className="nawOne">
                    <h1 className="logo">PerfectShop</h1>
                    <ul className={`nav_list ${isNavOpen ? 'nav--open' : ''}`}>
                        <li className="nav_itemParent">
                            <li className="nav_item">
                                <a href="#">Парфюмерия</a>
                            </li>
                            <li className="nav_item">
                                <a href="#">Макияж</a>
                            </li>
                            <li className="nav_item">
                                <a href="#">Уход за телом</a>
                            </li>
                            <li className="nav_item">
                                <a href="#">Уход за волосами</a>
                            </li>
                        </li>
                        <li>
                            <div className="navTwo">
                                <div className="nawTwo_child">
                                    <a href="#"><span><i className="fa-solid fa-user"></i></span></a>
                                    <a href="#"><span><i className="fa-regular fa-heart"></i> 0</span></a>
                                    <a href="#"><span><i className="fa-solid fa-bag-shopping"></i> 0</span></a>
                                </div>
                                <span>+7 (499) 550-00-50</span>
                            </div>
                        </li>
                    </ul>
                </div>

                <div className={`hamburger ${isNavOpen ? 'hamburger--open' : ''}`} onClick={toggleNav}>
                    <div className="bar"></div>
                    <div className="bar"></div>
                    <div className="bar"></div>
                </div>
            </div>
        </div>
    );
};

export default First;
