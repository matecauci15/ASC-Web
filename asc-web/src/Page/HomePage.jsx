// import React from 'react'

// const HomePage = () => {
//   return (
//     <div className="flex justify-center items-center">
//     <h1 className="text-1xl sm:text-2xl md:text-3xl lg:text-4xl text-center font-semibold mt-8">
//       ¿Cómo te ayudamos?
//     </h1>
//   </div>
//   )
// }

// export default HomePage

import React from 'react';
import { FaPhone, FaCarCrash, FaCar, FaHeartbeat, FaAddressBook } from 'react-icons/fa'; // Importa los íconos específicos de la biblioteca 'react-icons'
// import { afianzadora, bbva, ciudad, mercantil, provincia, sancor, triunfo } from '../assets';
import Empresas from '../Componentes/Empresas';

const HomePage = () => {
  return (
    <div>
      <h1 className="text-2xl sm:text-3xl md:text-6xl lg:text-4xl text-center mt-20">
        Sobre nosotros
      </h1>
      <p className='flex text-1xl sm:text-2xl md:text-2xl lg:text-2xl text-center mb-12 ml-36 mr-36 mt-10'>
      Somos un Broker de Seguros nacido en Argentina con 15 años de experiencia en el mercado y más de 9.000 clientes, que confían en nosotros. Brindamos asesoramiento personalizado y te protegemos a vos y a tus bienes!
      </p>
      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl text-center mt-20 mb-12">
        ¿Cómo te ayudamos?
      </h1>
      <div className="flex justify-center gap-14 mb-12">
        <div className='grid gap-2 justify-center'>
          <div className='flex justify-center'>
          <FaAddressBook size={28}/>
          </div>
          <p className='flex justify-center'>Quiero contactar con un asesor</p> 
          <p className='flex text-center'>Estamos para ayudarte, te <br /> dejamos nuestros datos <br /> de contacto para que puedas <br /> llamarnos cuando lo necesites.</p>
        </div>
        <div className='grid gap-2 justify-center' >
        <div className='flex justify-center'>
          <FaCarCrash size={30} />
        </div>
          <p className='flex justify-center'>Auto chocado</p>
          <p className='flex text-center'>Si tuviste un choque, robo de <br /> ruedas, rotura de cristales o <br /> granizo podés ingresar tu <br /> denuncia online.</p>
        </div>
        <div className='grid gap-2 justify-center'>
        <div className='flex justify-center'>
          <FaCar size={30} />
        </div>
          <p className='flex justify-center'>Auto seguro</p>
          <p className='flex text-center'>Tenemos las mejores opciones <br /> para que puedas elegir la <br /> que más se adapta a lo que <br /> necesitás.</p>
        </div>
        <div className='grid gap-2 justify-center'>
        <div className='flex justify-center'>
          <FaHeartbeat size={30} />
        </div>
          <p className='flex justify-center'>Salud</p> 
          <p className='flex text-center'>Sumate a nuestra red de más <br /> de 500 productores en todo el <br /> país. Tenemos un equipo de <br /> profesionales a tu disposición.
          </p>
        </div>
      </div>
      <Empresas />

    </div>
  );
};

export default HomePage;
