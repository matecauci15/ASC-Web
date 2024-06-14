// import React from 'react';

// const AboutUs = () => {
//   return (
//     <section className="bg-accent py-16 px-8">
//       <div className="container mx-auto">
//         <div className="text-center mb-12">
//           <h2 className="text-4xl font-heading font-bold text-primary mb-4">Sobre Nosotros</h2>
//           <p className="text-lg text-gray-700">
//             En ASC Seguros, somos un equipo comprometido con brindarte la mejor cobertura y protección para lo que más valoras. Con años de experiencia y una dedicación incansable, ofrecemos soluciones de seguros personalizadas que se adaptan a tus necesidades.
//           </p>
//         </div>
        
//         <div className="flex flex-col md:flex-row items-center">
//           <div className="md:w-1/2 mb-8 md:mb-0">
//             <img 
//               src="https://somosasc.com.ar/wp-content/uploads/2021/08/nosotros_asc.jpeg" 
//               alt="Equipo de ASC Seguros" 
//               className="w-full rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300"
//             />
//           </div>
//           <div className="md:w-1/2 md:pl-12 text-center md:text-left">
//             <div className="flex items-center mb-8">
//               <svg className="w-8 h-8 text-secondary mr-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 2a10 10 0 110 20 10 10 0 010-20zm0 4a6 6 0 110 12 6 6 0 010-12z" />
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 14l2-2 2 2m-2-6v4" />
//               </svg>
//               <h3 className="text-3xl font-heading font-bold text-primary">Nuestra Misión</h3>
//             </div>
//             <p className="text-lg text-gray-700 mb-8">
//               Nuestra misión es proporcionarte tranquilidad y seguridad a través de soluciones de seguros innovadoras y personalizadas. Estamos aquí para proteger tus bienes más preciados y ayudarte a navegar por las incertidumbres de la vida con confianza.
//             </p>
//             <div className="flex items-center mb-8">
//               <svg className="w-8 h-8 text-secondary mr-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3v18c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2zm5 9h8m-4-4v8m5.53-12H9.47c-.83 0-1.47.67-1.47 1.5s.64 1.5 1.47 1.5h6.06c.83 0 1.47-.67 1.47-1.5S15.36 5 14.53 5z" />
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 17h.01" />
//               </svg>
//               <h3 className="text-3xl font-heading font-bold text-primary">Nuestros Valores</h3>
//             </div>
//             <p className="text-lg text-gray-700 mb-4">
//               En ASC Seguros, nos guiamos por valores de integridad, transparencia y compromiso con nuestros clientes. Creemos en construir relaciones duraderas basadas en la confianza y la excelencia en el servicio.
//             </p>
//             <button className="mt-4 bg-primary text-white px-6 py-3 rounded-lg shadow-lg hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50 transition-colors duration-300">
//               Conoce Más
//             </button>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default AboutUs;

import React from 'react';
import { vcs } from '../assets';


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
        
        <div className="flex flex-col md:flex-row items-center mb-12">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <img 
              src={vcs} 
              alt="Equipo de ASC Seguros" 
              className="w-full h-72 object-cover rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300"
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
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 17h.01M12 12h.01M12 7h.01M3 3v18c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2zm9 4h3M12 12h3m-3 5h3m-9-4h6" />
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

        <div className="mb-12">
          <h3 className="text-3xl font-heading font-bold text-primary mb-4 text-center">Historia de la Empresa</h3>
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-icon bg-secondary text-white">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3M7 8v4l3 3" />
                </svg>
              </div>
              <div className="timeline-content bg-white shadow-lg p-4 rounded-lg">
                <h4 className="text-lg font-bold text-primary mb-2">Fundación</h4>
                <p className="text-gray-700">ASC Seguros fue fundada en 2010 con la visión de ofrecer soluciones de seguros personalizadas.</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-icon bg-secondary text-white">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3M7 8v4l3 3" />
                </svg>
              </div>
              <div className="timeline-content bg-white shadow-lg p-4 rounded-lg">
                <h4 className="text-lg font-bold text-primary mb-2">Expansión</h4>
                <p className="text-gray-700">En 2015, expandimos nuestros servicios a nivel nacional, llegando a más clientes con nuestras soluciones innovadoras.</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-icon bg-secondary text-white">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3M7 8v4l3 3" />
                </svg>
              </div>
              <div className="timeline-content bg-white shadow-lg p-4 rounded-lg">
                <h4 className="text-lg font-bold text-primary mb-2">Innovación</h4>
                <p className="text-gray-700">En 2020, lanzamos nuestra plataforma en línea, facilitando el acceso a seguros de manera rápida y eficiente.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-12 text-center">
          <h3 className="text-3xl font-heading font-bold text-primary mb-4">Nuestros clientes</h3>
          <div className="flex flex-wrap justify-center">
            <div className="w-full md:w-1/3 p-4">
              <div className="bg-white shadow-lg p-6 rounded-lg">
                <p className="text-gray-700 mb-4">"Excelente servicio y atención al cliente. Me siento seguro y protegido con ASC Seguros."</p>
                <p className="font-bold text-primary">- Juan Pérez</p>
              </div>
            </div>
            <div className="w-full md:w-1/3 p-4">
              <div className="bg-white shadow-lg p-6 rounded-lg">
                <p className="text-gray-700 mb-4">"Las mejores soluciones personalizadas para mis necesidades. Recomiendo ASC Seguros a todos."</p>
                <p className="font-bold text-primary">- María García</p>
              </div>
            </div>
            <div className="w-full md:w-1/3 p-4">
              <div className="bg-white shadow-lg p-6 rounded-lg">
                <p className="text-gray-700 mb-4">"Rápidos y eficientes, con un equipo siempre dispuesto a ayudar. Muy satisfecho con el servicio."</p>
                <p className="font-bold text-primary">- Carlos Sánchez</p>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mb-12">
          <button className="bg-primary text-white px-6 py-3 rounded-lg shadow-lg hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50 transition-colors duration-300">
            Solicita más información
          </button>
        </div>
        
        <div className="flex justify-center space-x-4">
          <a href="https://www.facebook.com/SomosASC" target="_blank" rel="noopener noreferrer" className="text-secondary hover:text-primary transition-colors duration-300">
            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
              <path d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.406.593 24 1.325 24H12.82V14.708h-3.348v-3.62h3.348V8.356c0-3.3 2.015-5.096 4.956-5.096 1.41 0 2.623.104 2.976.151v3.451h-2.042c-1.604 0-1.913.763-1.913 1.88v2.458h3.831l-.501 3.62h-3.33V24h6.539c.732 0 1.325-.593 1.325-1.325V1.325C24 .593 23.407 0 22.675 0z"/>
            </svg>
          </a>
          <a href="https://www.linkedin.com/company/grupoasc/" target="_blank" rel="noopener noreferrer" className="text-secondary hover:text-primary transition-colors duration-300">
  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
    <path d="M19 0h-14c-2.75 0-5 2.25-5 5v14c0 2.75 2.25 5 5 5h14c2.75 0 5-2.25 5-5v-14c0-2.75-2.25-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.23c-.97 0-1.75-.79-1.75-1.77s.78-1.77 1.75-1.77 1.75.79 1.75 1.77-.78 1.77-1.75 1.77zm13.5 11.23h-3v-5.6c0-1.33-.03-3.05-1.86-3.05-1.86 0-2.14 1.45-2.14 2.94v5.71h-3v-10h2.88v1.37h.04c.4-.75 1.36-1.54 2.8-1.54 3 0 3.56 1.97 3.56 4.53v5.64z"/>
  </svg>
</a>

          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-secondary hover:text-primary transition-colors duration-300">
            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.332 3.608 1.308.975.976 1.246 2.243 1.308 3.608.058 1.267.07 1.647.07 4.851s-.012 3.584-.07 4.85c-.062 1.366-.333 2.633-1.308 3.608-.975.975-2.243 1.246-3.608 1.308-1.267.058-1.647.07-4.851.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.333-3.608-1.308-.975-.975-1.246-2.243-1.308-3.608-.058-1.267-.07-1.647-.07-4.851s.012-3.584.07-4.85c.062-1.366.333-2.633 1.308-3.608.975-.975 2.243-1.246 3.608-1.308 1.267-.058 1.647-.07 4.851-.07m0-2.163c-3.257 0-3.667.012-4.947.071-1.29.06-2.527.335-3.584 1.392-1.056 1.057-1.331 2.294-1.392 3.584-.059 1.281-.071 1.691-.071 4.947s.012 3.667.071 4.947c.06 1.29.335 2.527 1.392 3.584 1.057 1.056 2.294 1.331 3.584 1.392 1.281.059 1.691.071 4.947.071s3.667-.012 4.947-.071c1.29-.06 2.527-.335 3.584-1.392 1.056-1.057 1.331-2.294 1.392-3.584.059-1.281.071-1.691.071-4.947s-.012-3.667-.071-4.947c-.06-1.29-.335-2.527-1.392-3.584-1.057-1.056-2.294-1.331-3.584-1.392-1.281-.059-1.691-.071-4.947-.071zM12 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.162c-2.204 0-4-1.796-4-4s1.796-4 4-4 4 1.796 4 4-1.796 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.441s.645 1.441 1.441 1.441 1.441-.645 1.441-1.441-.645-1.441-1.441-1.441z"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
