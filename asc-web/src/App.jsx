// import './App.css'
// import NavBar from './Componentes/NavBar'
// import Banner from './Componentes/Banner'
// import { Route, BrowserRouter, Routes } from 'react-router-dom'
// import HomePage from './Page/HomePage'
// import Footer from './Page/Footer'
// import ContactForm from './Page/Contacto'
// import Productos from './Page/Productos'
// import Nosotros from './Page/Nosotros'

// function App() {

//   return (
//     <>
//     <BrowserRouter>
//         <NavBar/>  
//         <Banner />
//       <Routes>
//         <Route path='/' element={<HomePage/>} />
//         <Route path='/productos' element={<Productos/>} />
//         <Route path='/sumate' element={<ContactForm />}/>
//         <Route path='/nosotros' element={<Nosotros />}/>
//       </Routes>
//         <Footer/>
//     </BrowserRouter>
//     </>
//   )
// }

// export default App

import './App.css';
import NavBar from './Componentes/NavBar';
import Banner from './Componentes/Banner';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import HomePage from './Page/HomePage';
import Footer from './Page/Footer';
import ContactForm from './Page/Contacto';
import Productos from './Page/Productos';
import Nosotros from './Page/Nosotros';
import { useEffect } from 'react';
import { autoasegurado, tiendaa, casa, puerta } from './assets';

function App() {
  
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      document.querySelectorAll('.parallax').forEach((element, index) => {
        const speed = element.getAttribute('data-speed');
        element.style.transform = `translateY(${scrollY * speed}px)`;
      });
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <div className="background">
        <img src={autoasegurado} alt="Seguro auto" className="parallax" data-speed="0.6" style={{ top: '10%', left: '5%' }} />
        <img src={tiendaa} alt="Seguro integral" className="parallax" data-speed="0.5" style={{ top: '30%', right: '10%' }} />
        <img src={casa} alt="Seguro casa" className="parallax" data-speed="0.7" style={{ top: '50%', left: '10%' }} />
        <img src={puerta} alt="Entrada asc" className="parallax" data-speed="0.2" style={{ top: '5%', right: '30%' }} />
      </div>
      <BrowserRouter>
        <NavBar />  
        <Banner />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/productos' element={<Productos />} />
          <Route path='/sumate' element={<ContactForm />} />
          <Route path='/nosotros' element={<Nosotros />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
