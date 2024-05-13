import './App.css'
import NavBar from './Componentes/NavBar'
import Banner from './Componentes/Banner'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import HomePage from './Page/HomePage'
import Footer from './Page/Footer'

function App() {

  return (
    <>
      <Router>
        <NavBar />  
        <Banner />
        <HomePage />
        <Footer   />
      </Router>
    </>
  )
}

export default App
