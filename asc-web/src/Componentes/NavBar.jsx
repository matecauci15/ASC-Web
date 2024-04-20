import React from 'react'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
  return (
    <header className="header">
        <NavLink to="/" className="w-10 h-10 rounded-lg bg-white items-center justify-center flex font-bold shadow-md">
        <p className="blue-gradient_text">MC</p>
        </NavLink>
        <nav className='flex text-lg gap-4 items-center font-medium'>
            <NavLink to="/Homepage" className={({ isActive }) => isActive ? 'text-blue-500' : 'text-black'}>
                Inicio
            </NavLink>
            <NavLink to="/productos" className={({ isActive }) => isActive ? 'text-blue-500' : 'text-black'}>
                Productos
            </NavLink>
            <NavLink  to="/nosotros">
                Nosotros
            </NavLink>
            <NavLink  to="/coworking">
                Coworking
            </NavLink>
            <NavLink  to="/sumate">
                Sumate!
            </NavLink>
        </nav>
    </header>
  )
}

export default NavBar