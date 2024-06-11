// import React from 'react';

// const ProductCard = ({ title, text, imgSrc }) => (
//   <div className="relative border border-gray-200 rounded-lg overflow-hidden shadow-md bg-white">
//     <img className="w-full h-auto max-h-52 object-contain mx-auto" src={imgSrc} alt={`${title} Image`} />
//     <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-75 opacity-0 hover:opacity-100 transition-opacity duration-300">
//       <div className="text-center">
//         <div className="text-lg font-bold text-white mb-2">{title}</div>
//         <div className="text-gray-200">{text}</div>
//       </div>
//     </div>
//   </div>
// );

// export default ProductCard;

import React from 'react';

const ProductCard = ({ title, text, imgSrc }) => (
  <div className="relative border border-gray-200 rounded-lg overflow-hidden shadow-md bg-white">
    <img className="w-full h-auto max-h-52 object-contain mx-auto" src={imgSrc} alt={`${title} Image`} />
    <div className="p-4">
      <div className="text-lg font-bold text-gray-800 mb-2">{title}</div>
    </div>
    <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-75 opacity-0 hover:opacity-100 transition-opacity duration-300">
      <div className="text-center">
        <div className="text-gray-200">{text}</div>
      </div>
    </div>
  </div>
);

export default ProductCard;
