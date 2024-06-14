// import React from 'react'
// import { FaAddressBook, FaCar, FaCarCrash, FaHeartbeat } from 'react-icons/fa'

// const Nosotros = () => {
//   return (
//     <div className="px-4 md:px-8 lg:px-16">
//       <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center mt-20 mb-8">
//         Sobre nosotros
//       </h1>
//       <p className="text-sm sm:text-base md:text-lg lg:text-lg text-center">
//         Somos un Broker de Seguros nacido en Argentina con 15 años de experiencia en el mercado y más de 9.000 clientes, que confían en nosotros. Brindamos asesoramiento personalizado y te protegemos a vos y a tus bienes.
//       </p>
//       <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center mt-20 mb-8">
//         ¿Cómo te ayudamos?
//       </h1>
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-24">
//         <div className="flex flex-col items-center justify-center">
//           <FaAddressBook size={30} />
//           <p className="text-sm sm:text-base md:text-lg lg:text-lg text-center mt-2">NUESTRO EQUIPO</p>
//           <p className="text-sm sm:text-base md:text-lg lg:text-lg text-center mt-2">Estamos para ayudarte, te dejamos nuestros datos de contacto para que puedas llamarnos cuando lo necesites.</p>
//         </div>
//         <div className="flex flex-col items-center justify-center">
//           <FaCarCrash size={30} />
//           <p className="text-sm sm:text-base md:text-lg lg:text-lg text-center mt-2">SERVICIO GLOBAL</p>
//           <p className="text-sm sm:text-base md:text-lg lg:text-lg text-center mt-2">Si tuviste un choque, robo de ruedas, rotura de cristales o granizo podés ingresar tu denuncia online.</p>
//         </div>
//         <div className="flex flex-col items-center justify-center">
//           <FaCar size={30} />
//           <p className="text-sm sm:text-base md:text-lg lg:text-lg text-center mt-2">SOLUCIONES INTEGRALES
// </p>
//           <p className="text-sm sm:text-base md:text-lg lg:text-lg text-center mt-2">Tenemos las mejores opciones para que puedas elegir la que más se adapta a lo que necesitás.</p>
//         </div>
//         <div className="flex flex-col items-center justify-center">
//           <FaHeartbeat size={30} />
//           <p className="text-sm sm:text-base md:text-lg lg:text-lg text-center mt-2">ASEGURADORAS</p>
//           <p className="text-sm sm:text-base md:text-lg lg:text-lg text-center mt-2">Sumate a nuestra red de más de 500 productores en todo el país. Tenemos un equipo de profesionales a tu disposición.</p>
//         </div>    
//       </div>
//       <div>
//       </div>
//     </div>
//   )
// }

// export default Nosotros

import React from 'react';

const AboutUs = () => {
  return (
    <section className="bg-accent py-16 px-8">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-heading font-bold text-primary mb-4">Sobre Nosotros</h2>
          <p className="text-lg text-gray-700">
            En ASC Seguros, somos un equipo comprometido con brindarte la mejor cobertura y protección para lo que más valoras. Con años de experiencia y una dedicación incansable, ofrecemos soluciones de seguros personalizadas que se adaptan a tus necesidades.
          </p>
        </div>
        
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <img 
              src="https://somosasc.com.ar/wp-content/uploads/2021/08/nosotros_asc.jpeg" 
              alt="Equipo de ASC Seguros" 
              className="w-full rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300"
            />
          </div>
          <div className="md:w-1/2 md:pl-12 text-center md:text-left">
            <div className="flex items-center mb-8">
              <svg className="w-8 h-8 text-secondary mr-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 2a10 10 0 110 20 10 10 0 010-20zm0 4a6 6 0 110 12 6 6 0 010-12z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 14l2-2 2 2m-2-6v4" />
              </svg>
              <h3 className="text-3xl font-heading font-bold text-primary">Nuestra Misión</h3>
            </div>
            <p className="text-lg text-gray-700 mb-8">
              Nuestra misión es proporcionarte tranquilidad y seguridad a través de soluciones de seguros innovadoras y personalizadas. Estamos aquí para proteger tus bienes más preciados y ayudarte a navegar por las incertidumbres de la vida con confianza.
            </p>
            <div className="flex items-center mb-8">
              <svg className="w-8 h-8 text-secondary mr-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3v18c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2zm5 9h8m-4-4v8m5.53-12H9.47c-.83 0-1.47.67-1.47 1.5s.64 1.5 1.47 1.5h6.06c.83 0 1.47-.67 1.47-1.5S15.36 5 14.53 5z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 17h.01" />
              </svg>
              <h3 className="text-3xl font-heading font-bold text-primary">Nuestros Valores</h3>
            </div>
            <p className="text-lg text-gray-700 mb-4">
              En ASC Seguros, nos guiamos por valores de integridad, transparencia y compromiso con nuestros clientes. Creemos en construir relaciones duraderas basadas en la confianza y la excelencia en el servicio.
            </p>
            <button className="mt-4 bg-primary text-white px-6 py-3 rounded-lg shadow-lg hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50 transition-colors duration-300">
              Conoce Más
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
