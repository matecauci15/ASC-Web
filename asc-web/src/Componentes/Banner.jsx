import React, { useState, useEffect } from 'react';
import { recepcion, banner, banner1, banner2 } from '../assets';

const Banner = () => {
  const images = [
    recepcion,
    banner,
    banner1,
    banner2
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  useEffect(() => {
    const intervalId = setInterval(nextImage, 8000); 

    return () => clearInterval(intervalId);
  }, []); 

  return (
    <div className="banner ">
      <img src={images[currentImageIndex]} alt="Banner" />
    </div>
  );
};

export default Banner;