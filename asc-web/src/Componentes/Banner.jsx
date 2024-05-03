// import React, { useState, useEffect } from 'react';
// import { recepcion, banner, banner1, banner2 } from '../assets';
// import { Link } from 'react-router-dom'

// const Banner = () => {
//   const images = [
//     recepcion,
//     banner,
//     banner1,
//     banner2
//   ];

//   const [currentImageIndex, setCurrentImageIndex] = useState(0);

//   const nextImage = () => {
//     setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
//   };

//   useEffect(() => {
//     const intervalId = setInterval(nextImage, 8000); 

//     return () => clearInterval(intervalId);
//   }, []); 

//   return (
//     <div className="banner">
//       <h1 className='absolute ml-72 mt-72 '>hola</h1>

//       <img src={images[currentImageIndex]} alt="Banner" />
//     </div>
//   );
// };

// export default Banner;

// <Link to='https://somosasc.com.ar/'>
// <button className=' absolute ml-72 mt-80'>Cotizá ahora</button>
// </Link>

// import React, { useState, useEffect } from 'react';
// import { recepcion, banner, banner1, banner2 } from '../assets';
// import { Link } from 'react-router-dom';

// const Banner = () => {
//   const images = [recepcion, banner, banner1, banner2];

//   const [currentImageIndex, setCurrentImageIndex] = useState(0);

//   const nextImage = () => {
//     setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
//   };

//   useEffect(() => {
//     const intervalId = setInterval(nextImage, 8000);

//     return () => clearInterval(intervalId);
//   }, []);

//   return (
//     <div className="relative">
//       <Link to="https://somosasc.com.ar/" className="absolute bottom-4 left-36 transform -translate-x-1/2">
//         <button className="bg-blue-900 hover:bg-blue-700 text-white font-bold py-2 px-2 rounded text-sm">
//           Cotizá ahora
//         </button>
//       </Link>

//       <img src={images[currentImageIndex]} alt="Banner" className="w-full" />
//     </div>
//   );
// };

// export default Banner;


import React, { useState, useEffect } from 'react';
import { recepcion, banner, banner1, banner2 } from '../assets';
import { Link } from 'react-router-dom';

const Banner = () => {
  const images = [recepcion, banner, banner1, banner2];

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
      <Link to="https://somosasc.com.ar/" className="absolute bottom-8 left-1/4 transform -translate-x-1/4">
        <button className="bg-slate-600 hover:bg-slate-700 text-white font-bold py-2 px-4 rounded md:text-base" style={{ transform: 'scale(0.8)' }}>
          Cotizá ahora
        </button>
      </Link>

      <img src={images[currentImageIndex]} alt="Banner" className="w-full" />
    </div>
  );
};

export default Banner;
