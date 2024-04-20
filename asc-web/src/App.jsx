import './App.css'
import NavBar from './Componentes/NavBar'
import Banner from './Componentes/Banner'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'

function App() {

  return (
    <>
      <Router>
        <NavBar />  
        <Banner/>
      </Router>
    </>
  )
}

export default App
