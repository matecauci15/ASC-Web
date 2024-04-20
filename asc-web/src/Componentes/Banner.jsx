import React, { useState, useEffect } from 'react';
import { recepcion } from '../assets';

const Banner = () => {
  const images = [
    recepcion,
    '../assets/react.svg',
    'url_de_la_imagen_3',
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  useEffect(() => {
    const intervalId = setInterval(nextImage, 5000); 

    return () => clearInterval(intervalId);
  }, []); 

  return (
    <div className="banner">
      <img src={images[currentImageIndex]} alt="Banner" />
    </div>
  );
};

export default Banner;