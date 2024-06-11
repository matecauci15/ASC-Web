import React from 'react'
import { FaAddressBook, FaCar, FaCarCrash, FaHeartbeat } from 'react-icons/fa'

const Nosotros = () => {
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
          <p className="text-sm sm:text-base md:text-lg lg:text-lg text-center mt-2">NUESTRO EQUIPO</p>
          <p className="text-sm sm:text-base md:text-lg lg:text-lg text-center mt-2">Estamos para ayudarte, te dejamos nuestros datos de contacto para que puedas llamarnos cuando lo necesites.</p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <FaCarCrash size={30} />
          <p className="text-sm sm:text-base md:text-lg lg:text-lg text-center mt-2">SERVICIO GLOBAL</p>
          <p className="text-sm sm:text-base md:text-lg lg:text-lg text-center mt-2">Si tuviste un choque, robo de ruedas, rotura de cristales o granizo podés ingresar tu denuncia online.</p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <FaCar size={30} />
          <p className="text-sm sm:text-base md:text-lg lg:text-lg text-center mt-2">SOLUCIONES INTEGRALES
</p>
          <p className="text-sm sm:text-base md:text-lg lg:text-lg text-center mt-2">Tenemos las mejores opciones para que puedas elegir la que más se adapta a lo que necesitás.</p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <FaHeartbeat size={30} />
          <p className="text-sm sm:text-base md:text-lg lg:text-lg text-center mt-2">ASEGURADORAS</p>
          <p className="text-sm sm:text-base md:text-lg lg:text-lg text-center mt-2">Sumate a nuestra red de más de 500 productores en todo el país. Tenemos un equipo de profesionales a tu disposición.</p>
        </div>    
      </div>
      <div>
      </div>
    </div>
  )
}

export default Nosotros