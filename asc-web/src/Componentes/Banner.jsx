import React, { useState, useEffect } from 'react';
import {banner, banner1, banner2 } from '../assets';
import { Link } from 'react-router-dom';

const Banner = () => {
  const images = [banner, banner1, banner2];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  useEffect(() => {
    const intervalId = setInterval(nextImage, 8000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="relative">
      {/* <Link to="https://somosasc.com.ar/" className="absolute bottom-8 left-1/4 transform -translate-x-1/4">
        <button className="bg-slate-600 hover:bg-slate-700 text-white font-bold py-2 px-4 rounded md:text-base" style={{ transform: 'scale(0.8)' }}>
          Cotizá ahora
        </button>
      </Link> */}

      <img src={images[currentImageIndex]} alt="Banner" className="w-full h-80" />
    </div>
  );
};

export default Banner;
