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
 
// import React from 'react';
// import { NavLink } from 'react-router-dom';
// import { logoasc } from '../assets';

// const NavBar = () => {
//   return (
//     <header style={{ backgroundColor: 'grey' }} className="flex items-center justify-center py-4 px-6">
//       <NavLink to="/" className="w-80 h-16 rounded-lg flex items-center justify-center mr-96">
//         <img src={logoasc} alt="logo" />
//       </NavLink>
//       <nav className='flex text-lg gap-4 text-white items-center font-medium'>
//         <NavLink exact to="/" activeClassName="bg-gray-300 text-gray-900" className="px-4 py-2 rounded-md">
//           Inicio
//         </NavLink>
//         <NavLink to="/productos" activeClassName="bg-gray-300 text-gray-900" className="px-4 py-2 rounded-md">
//           Productos
//         </NavLink>
//         <NavLink to="/nosotros" activeClassName="bg-gray-300 text-gray-900" className="px-4 py-2 rounded-md">
//           Nosotros
//         </NavLink>
//         <NavLink to="/coworking" activeClassName="bg-gray-300 text-gray-900" className="px-4 py-2 rounded-md">
//           Coworking
//         </NavLink>
//         <NavLink to="/sumate" activeClassName="bg-gray-300 text-gray-900" className="px-4 py-2 rounded-md">
//           Sumate!
//         </NavLink>
//       </nav>
//     </header>
//   );
// };

// export default NavBar;

import React from 'react';
import { NavLink } from 'react-router-dom';
import { logoasc } from '../assets';

const NavBar = () => {
  return (
    <header className="bg-gray-400">
      <div className="container mx-auto py-4 px-6 flex items-center justify-between">
        <NavLink to="/" className="w-44 h-auto">
          <img
            src={logoasc}
            alt="logo"
            className="h-auto w-full object-contain"
          />
        </NavLink>
        <button className="block md:hidden text-white">
          <svg
            className="h-6 w-6 fill-current"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M3 5h18a1 1 0 0 1 0 2H3a1 1 0 0 1 0-2zm0 6h18a1 1 0 0 1 0 2H3a1 1 0 0 1 0-2zm0 6h18a1 1 0 0 1 0 2H3a1 1 0 0 1 0-2z"
            />
          </svg>
        </button>
        <nav className="hidden md:flex text-white text-sm">
          <NavLink
            exact
            to="/"
            activeClassName="bg-gray-600"
            className="px-4 py-2 rounded-md mr-4"
          >
            Inicio
          </NavLink>
          <NavLink
            to="/productos"
            activeClassName="bg-gray-600"
            className="px-4 py-2 rounded-md mr-4"
          >
            Productos
          </NavLink>
          <NavLink
            to="/nosotros"
            activeClassName="bg-gray-600"
            className="px-4 py-2 rounded-md mr-4"
          >
            Nosotros
          </NavLink>
          <NavLink
            to="/coworking"
            activeClassName="bg-gray-600"
            className="px-4 py-2 rounded-md mr-4"
          >
            Coworking
          </NavLink>
          <NavLink
            to="/sumate"
            activeClassName="bg-gray-600"
            className="px-4 py-2 rounded-md"
          >
            Sumate!
          </NavLink>
        </nav>
      </div>
    </header>
  );
};

export default NavBar;