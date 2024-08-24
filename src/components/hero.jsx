import React from 'react';
import Slider from 'react-slick';
import image1 from "../assets/images/first.jpg"
import image2 from "../assets/images/sec.jpg"
import image3 from "../assets/images/third.jpg"

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const HeroSection = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,

    };

    const slides = [
        {
            id: 1,
            image: image1,
            heading: 'Welcome to Our Store',
            description: 'Discover the best products at unbeatable prices.',
        },
        {
            id: 2,
            image: image2,
            heading: 'Shoot, Share, Relive',
            description: "Capture Life's Moments in HD",
        },
        {
            id: 3,
            image: image3,
            heading: 'New Arrivals',
            description: 'Check out the latest additions to our collection.',
        },
    ];

    return (
        <div className="hero-section my-10">
            <Slider {...settings}>
                {slides.map((slide) => (
                    <div key={slide.id} className="relative lg:h-[600px] h-96">
                        <img src={slide.image} alt={slide.heading} className="w-full h-full object-cover" />
                        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-center  text-white p-4">
                            <h2 className="md:text-4xl text-3xl font-bold mb-4">{slide.heading}</h2>
                            <p className="md:text-lg text-sm">{slide.description}</p>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default HeroSection;
