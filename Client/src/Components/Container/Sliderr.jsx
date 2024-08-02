import React, { useState, useEffect, useRef } from 'react';
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";

// Import your local images
import image2 from '../../images/slider1.png';
import image3 from '../../images/slider2.png';
import image4 from '../../images/slider3.png';
import image1 from '../../images/sl1.jpg';

function Sliderr() {
  const slides = [
    { url: image1 },
    { url: image2 },
    { url: image3 },
    { url: image4 },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const intervalRef = useRef(null);

  const autoplayInterval = 3000;
  const [isAutoplayEnabled, setIsAutoplayEnabled] = useState(true);

  useEffect(() => {
    if (isAutoplayEnabled) {
      intervalRef.current = setInterval(() => {
        const newIndex = (currentSlide + 1) % slides.length;
        setCurrentSlide(newIndex);
      }, autoplayInterval);
    }

    return () => clearInterval(intervalRef.current);
  }, [currentSlide, autoplayInterval, isAutoplayEnabled]);

  const prevSlide = () => {
    const isFirstSlide = currentSlide === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentSlide - 1;
    setCurrentSlide(newIndex);

    if (isAutoplayEnabled) {
      clearInterval(intervalRef.current);
    }
  };

  const nextSlide = () => {
    const isLastSlide = currentSlide === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentSlide + 1;
    setCurrentSlide(newIndex);

    if (isAutoplayEnabled) {
      clearInterval(intervalRef.current);
    }
  };

  const goToSlide = (slideIndex) => {
    setCurrentSlide(slideIndex);

    if (isAutoplayEnabled) {
      clearInterval(intervalRef.current);
    }
  };

  return (
    <div className="w-full sm:h-48 md:h-72 lg:h-[500px] overflow-hidden">
      <div
        style={{ backgroundImage: `url(${slides[currentSlide].url})` }}
        className="w-full h-full bg-center bg-cover duration-200 relative"
      >
        <span
          className="absolute right-5 top-1/2 -translate-y-1/2 cursor-pointer"
          onClick={nextSlide}
        >
          <FaArrowAltCircleRight size={45} />
        </span>
        <span
          className="absolute left-5 top-1/2 -translate-y-1/2 cursor-pointer"
          onClick={prevSlide}
        >
          <FaArrowAltCircleLeft size={45} />
        </span>
      </div>
    </div>
  );
}

export default Sliderr;
