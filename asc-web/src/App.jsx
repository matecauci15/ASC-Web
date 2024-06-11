import './App.css'
import NavBar from './Componentes/NavBar'
import Banner from './Componentes/Banner'
import { Route, BrowserRouter, Routes } from 'react-router-dom'
import HomePage from './Page/HomePage'
import Footer from './Page/Footer'
import ContactForm from './Page/Contacto'
import Productos from './Page/Productos'
import Nosotros from './Page/Nosotros'

function App() {

  return (
    <>
    <BrowserRouter>
        <NavBar/>  
        <Banner />
      <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='/productos' element={<Productos/>} />
        <Route path='/sumate' element={<ContactForm />}/>
        <Route path='/nosotros' element={<Nosotros />}/>
      </Routes>
        <Footer/>
    </BrowserRouter>
    </>
  )
}

export default App
