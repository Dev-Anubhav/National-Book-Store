// src/App.js
import { useState } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import HeroSlide from "../assets/image/heroslider.webp";

function HeroSlider() {
  const [activeSlide, setActiveSlide] = useState(0);
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    autoplay:true,
    autoplayspeed:100,
    slidesToShow: 1,
    slidesToScroll: 1, responsive: [
      {
        breakpoint: 480,
        settings: {
          arrows:false
        }
      },],
    afterChange: current => setActiveSlide(current),
    customPaging: function (i) {
      return (
        <div
          className={`w-2 h-2 sm:w-3 sm:h-3 flex items-center justify-center text-xs mx-1 cursor-pointer transform rotate-45 ${
            activeSlide === i ? 'bg-[#064F88]' : 'bg-transparent border-2 border-gray-300'
          }`}
        >
          <span className="transform -rotate-45"></span>
        </div>
      );
    },
    appendDots: dots => (
      <ul className="m-0 flex justify-center space-x-2"> {dots} </ul>
    )
  };

  return (
    <div className="max-w-[1240px] mx-auto p-4">
      <Slider {...settings}>
        <div className="p-1">
          <div className=" p-1 rounded-lg"><img src={HeroSlide} alt="" className="w-full h-auto object-contain" /></div>
        </div>
        <div className="p-1">
          <div className=" p-1 rounded-lg"><img src={HeroSlide} alt="" className="w-full h-auto object-contain" /></div>
        </div>
        <div className="p-1">
          <div className=" p-1 rounded-lg"><img src={HeroSlide} alt="" className="w-full h-auto object-contain" /></div>
        </div>
      </Slider>
    </div>
  );
}

export default HeroSlider;
