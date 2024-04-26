import './App.css'
import NavBar from './Componentes/NavBar'
import Banner from './Componentes/Banner'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import HomePage from './Page/HomePage'

function App() {

  return (
    <>
      <Router>
        <NavBar />  
        <Banner />
        <HomePage />
      </Router>
    </>
  )
}

export default App
