import React, { useState } from 'react';
import '../styles/imageCarousel.css';
import background1 from '../resources/img/background1.jpg';
import background2 from '../resources/img/background2.jpg';
import background3 from '../resources/img/background3.jpg';

const images = [
  background1,
  background2,
  background3
];

export const ImageCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === images.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="carousel">
      <button className="carousel-button" onClick={goToPrevious}>⟵</button>
      <img src={images[currentIndex]} alt={`Slide ${currentIndex}`} className="carousel-image" />
      <button className="carousel-button" onClick={goToNext}>⟶</button>
    </div>
  );
};
