import React from 'react';
import bgImgOne from '../assets/images/slider/slider-img-5 1.svg';
import bgImgTwo from '../assets/images/slider/prod-img-5 2.svg';
import bgImgThree from '../assets/images/slider/prod-img-5 3.svg';
import bgImgFour from '../assets/images/slider/prod-img-5 4.svg';
import bgImgFive from '../assets/images/slider/prod-img-5 5.svg';

const Three = () => {
    const items = [
        {
            id: "01",
            title: "Уходовая косметика",
            image: bgImgOne
        },
        {
            id: "02",
            title: "Уходовая косметsdbfx",
            image: bgImgTwo
        },
        {
            id: "03",
            title: "Уходовая косметика",
            image: bgImgThree
        },
        {
            id: "04",
            title: "Уходовая косметика",
            image: bgImgFour
        },
        {
            id: "05",
            title: "Уходовая косметика",
            image: bgImgFive
        }
    ];

    return (
        <div className="three">
            {items.map((item, index) => (
                <div
                    key={index}
                    className="threeChildOne"
                    style={{
                        backgroundImage: `linear-gradient(to top, rgba(170, 132, 83, 1), rgba(255, 255, 255, 0)),url(${item.image})`,
                        backgroundSize: 'cover',  
                        backgroundPosition: 'center', 
                        backgroundRepeat: 'no-repeat'
                    }}
                >
                    <a href="#">{item.id}</a>
                    <a href="#">{item.title}</a>
                </div>
            ))}
        </div>
    );
}

export default Three;
