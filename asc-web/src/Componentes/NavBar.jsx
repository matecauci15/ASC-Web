// import React from 'react'
// import { NavLink } from 'react-router-dom'

// const NavBar = () => {
//   return (
//     <header className="header">
//         <NavLink to="/" className="w-10 h-10 rounded-lg bg-white items-center justify-center flex font-bold shadow-md">
//         <p className="blue-gradient_text">MC</p>
//         </NavLink>
//         <nav className='flex text-lg gap-4 items-center font-medium'>
//             <NavLink to="/Homepage" className={({ isActive }) => isActive ? 'text-blue-500' : 'text-black'}>
//                 Inicio
//             </NavLink>
//             <NavLink to="/productos" className={({ isActive }) => isActive ? 'text-blue-500' : 'text-black'}>
//                 Productos
//             </NavLink>
//             <NavLink  to="/nosotros">
//                 Nosotros
//             </NavLink>
//             <NavLink  to="/coworking">
//                 Coworking
//             </NavLink>
//             <NavLink  to="/sumate">
//                 Sumate!
//             </NavLink>
//         </nav>
//     </header>
//   )
// }

// export default NavBar
 
import React from 'react';
import { NavLink } from 'react-router-dom';
import { logoasc } from '../assets';

const NavBar = () => {
  return (
    <header style={{ backgroundColor: 'grey' }} className="flex items-center justify-center py-4 px-6">
      <NavLink to="/" className="w-80 h-16 rounded-lg flex items-center justify-center mr-96">
        <img src={logoasc} alt="logo" />
      </NavLink>
      <nav className='flex text-lg gap-4 text-white items-center font-medium'>
        <NavLink exact to="/" activeClassName="bg-gray-300 text-gray-900" className="px-4 py-2 rounded-md">
          Inicio
        </NavLink>
        <NavLink to="/productos" activeClassName="bg-gray-300 text-gray-900" className="px-4 py-2 rounded-md">
          Productos
        </NavLink>
        <NavLink to="/nosotros" activeClassName="bg-gray-300 text-gray-900" className="px-4 py-2 rounded-md">
          Nosotros
        </NavLink>
        <NavLink to="/coworking" activeClassName="bg-gray-300 text-gray-900" className="px-4 py-2 rounded-md">
          Coworking
        </NavLink>
        <NavLink to="/sumate" activeClassName="bg-gray-300 text-gray-900" className="px-4 py-2 rounded-md">
          Sumate!
        </NavLink>
      </nav>
    </header>
  );
};

export default NavBar;

