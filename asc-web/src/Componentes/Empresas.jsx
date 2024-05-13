import React from 'react'
import {ciudad, afianzadora, bbva, mercantil, provincia, sancor, triunfo } from '../assets/index'

const Empresas = () => {
  return (
      <div className="relative mb-20">
        <img src={ciudad} alt="Ciudad" className="w-full max-h-80 object-cover " />
        <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center">
          <div className="imagenes-contenedor flex justify-center max-w-screen-lg mx-auto">
            <img src={mercantil} alt="Imagen 1" className="w-1/6 mx-3 max-w-xl" />
            <img src={afianzadora} alt="Imagen 2" className="w-1/6 mx-3 max-w-xs" />
            <img src={bbva} alt="Imagen 2" className="w-1/6 mx-3 max-w-xs" />
            <img src={sancor} alt="Imagen 2" className="w-1/6 mx-3 max-w-xs" />
            <img src={provincia} alt="Imagen 2" className="w-1/6 mx-3 max-w-xs" />
            <img src={triunfo} alt="Imagen 2" className="w-1/6 mx-3 max-w-xs" />
          </div>
        </div>
      </div>
  )
}

export default Empresas