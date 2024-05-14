// import React from 'react'
// import {ciudad, afianzadora, bbva, mercantil, provincia, sancor, triunfo } from '../assets/index'

// const Empresas = () => {
//   return (
//       <div className="relative mb-20 md:w-full">
//         <img src={ciudad} alt="Ciudad" className="w-full max-h-80 object-cover " />
//         <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center">
//           <div className="imagenes-contenedor flex justify-center max-w-screen-lg mx-auto">
//             <img src={mercantil} alt="Imagen 1" className="w-1/6 mx-3 max-w-xl" />
//             <img src={afianzadora} alt="Imagen 2" className="w-1/6 mx-3 max-w-xs" />
//             <img src={bbva} alt="Imagen 2" className="w-1/6 mx-3 max-w-xs" />
//             <img src={sancor} alt="Imagen 2" className="w-1/6 mx-3 max-w-xs" />
//             <img src={provincia} alt="Imagen 2" className="w-1/6 mx-3 max-w-xs" />
//             <img src={triunfo} alt="Imagen 2" className="w-1/6 mx-3 max-w-xs" />
//           </div>
//         </div>
//       </div>
//   )
// }

// export default Empresas

// import React from 'react'
// import {ciudad, afianzadora, bbva, mercantil, provincia, sancor, triunfo } from '../assets/index'

// const Empresas = () => {
//   return (
//       <div className="">
//         <img src={ciudad} alt="Ciudad" className="" />
//         <div className="">
//           <div className="">
//             <img src={mercantil} alt="Mercantil" className="" />
//             <img src={afianzadora} alt="Afianzaora" className="" />
//             <img src={bbva} alt="BBVA" className="" />
//             <img src={sancor} alt="Sancor" className="" />
//             <img src={provincia} alt="Provincia" className="" />
//             <img src={triunfo} alt="Triunfo" className="" />
//           </div>
//         </div>
//       </div>
//   )
// }

// export default Empresas
import React from 'react';
import { ciudad, afianzadora, bbva, mercantil, provincia, sancor, triunfo } from '../assets/index';

const Empresas = () => {
  return (
    <div className="relative mb-20">
      <img src={ciudad} alt="Ciudad" className="w-full max-w-full h-auto" />
      <div className="absolute inset-0 flex justify-center items-center">
        <div className="grid grid-cols-6 gap-4 max-w-screen-lg mx-auto">
          <img src={mercantil} alt="Mercantil" className="w-full h-auto" />
          <img src={afianzadora} alt="Afianzadora" className="w-full h-auto" />
          <img src={bbva} alt="BBVA" className="w-full h-auto" />
          <img src={sancor} alt="Sancor" className="w-full h-auto" />
          <img src={provincia} alt="Provincia" className="w-full h-auto" />
          <img src={triunfo} alt="Triunfo" className="w-full h-auto" />
        </div>
      </div>
    </div>
  );
}

export default Empresas;





