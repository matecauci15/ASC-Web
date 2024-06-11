

// import React from 'react';
// import { FaPhone, FaCarCrash, FaCar, FaHeartbeat, FaAddressBook } from 'react-icons/fa'; // Importa los íconos específicos de la biblioteca 'react-icons'
// // import { afianzadora, bbva, ciudad, mercantil, provincia, sancor, triunfo } from '../assets';
// import Empresas from '../Componentes/Empresas';

// const HomePage = () => {
//   return (
//     <div>
//       <h1 className="text-2xl sm:text-3xl md:text-6xl lg:text-4xl text-center mt-20">
//         Sobre nosotros
//       </h1>
//       <p className='flex text-1xl sm:text-2xl md:text-2xl lg:text-2xl text-center mb-12 ml-36 mr-36 mt-10'>
//       Somos un Broker de Seguros nacido en Argentina con 15 años de experiencia en el mercado y más de 9.000 clientes, que confían en nosotros. Brindamos asesoramiento personalizado y te protegemos a vos y a tus bienes!
//       </p>
//       <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl text-center mt-20 mb-12">
//         ¿Cómo te ayudamos?
//       </h1>
//       <div className="flex justify-center gap-14 ">
//         <div className='grid gap-2 justify-center'>
//           <div className='flex justify-center'>
//           <FaAddressBook size={28}/>
//           </div>
//           <p className='flex justify-center'>Quiero contactar con un asesor</p> 
//           <p className='flex text-center'>Estamos para ayudarte, te <br /> dejamos nuestros datos <br /> de contacto para que puedas <br /> llamarnos cuando lo necesites.</p>
//         </div>
//         <div className='grid gap-2 justify-center' >
//         <div className='flex justify-center'>
//           <FaCarCrash size={30} />
//         </div>
//           <p className='flex justify-center'>Auto chocado</p>
//           <p className='flex text-center'>Si tuviste un choque, robo de <br /> ruedas, rotura de cristales o <br /> granizo podés ingresar tu <br /> denuncia online.</p>
//         </div>
//         <div className='grid gap-2 justify-center'>
//         <div className='flex justify-center'>
//           <FaCar size={30} />
//         </div>
//           <p className='flex justify-center'>Auto seguro</p>
//           <p className='flex text-center'>Tenemos las mejores opciones <br /> para que puedas elegir la <br /> que más se adapta a lo que <br /> necesitás.</p>
//         </div>
//         <div className='grid gap-2 justify-center'>
//         <div className='flex justify-center'>
//           <FaHeartbeat size={30} />
//         </div>
//           <p className='flex justify-center'>Salud</p> 
//           <p className='flex text-center'>Sumate a nuestra red de más <br /> de 500 productores en todo el <br /> país. Tenemos un equipo de <br /> profesionales a tu disposición.
//           </p>
//         </div>
//       </div>
//       <Empresas />

//     </div>
//   );
// };

// export default HomePage;

import React from 'react';
import { FaPhone, FaCarCrash, FaCar, FaHeartbeat, FaAddressBook } from 'react-icons/fa';
import Empresas from '../Componentes/Empresas';

const HomePage = () => {
  return (
    <div className="px-4 md:px-8 lg:px-16">
      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center mt-20 mb-8">
        Sobre nosotros
      </h1>
      <p className="text-sm sm:text-base md:text-lg lg:text-lg text-center">
        Somos un Broker de Seguros nacido en Argentina con 15 años de experiencia en el mercado y más de 9.000 clientes, que confían en nosotros. Brindamos asesoramiento personalizado y te protegemos a vos y a tus bienes.
      </p>
      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center mt-20 mb-8">
        ¿Cómo te ayudamos?
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-24">
        <div className="flex flex-col items-center justify-center">
          <FaAddressBook size={30} />
          <p className="text-sm sm:text-base md:text-lg lg:text-lg text-center mt-2">Quiero contactar con un asesor</p>
          <p className="text-sm sm:text-base md:text-lg lg:text-lg text-center mt-2">Estamos para ayudarte, te dejamos nuestros datos de contacto para que puedas llamarnos cuando lo necesites.</p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <FaCarCrash size={30} />
          <p className="text-sm sm:text-base md:text-lg lg:text-lg text-center mt-2">Auto chocado</p>
          <p className="text-sm sm:text-base md:text-lg lg:text-lg text-center mt-2">Si tuviste un choque, robo de ruedas, rotura de cristales o granizo podés ingresar tu denuncia online.</p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <FaCar size={30} />
          <p className="text-sm sm:text-base md:text-lg lg:text-lg text-center mt-2">Auto seguro</p>
          <p className="text-sm sm:text-base md:text-lg lg:text-lg text-center mt-2">Tenemos las mejores opciones para que puedas elegir la que más se adapta a lo que necesitás.</p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <FaHeartbeat size={30} />
          <p className="text-sm sm:text-base md:text-lg lg:text-lg text-center mt-2">Salud</p>
          <p className="text-sm sm:text-base md:text-lg lg:text-lg text-center mt-2">Sumate a nuestra red de más de 500 productores en todo el país. Tenemos un equipo de profesionales a tu disposición.</p>
        </div>    
      </div>
      <div>
      <Empresas />
      </div>
    </div>
  );
};

export default HomePage;