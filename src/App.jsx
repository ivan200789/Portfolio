import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Inicio from './components/Inicio'
import Proyectos from './components/Proyectos'
import Stack from "./components/Stack"
import Contacto from './components/Contacto'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>

          <Inicio/>
          <Proyectos/>
          <Stack/>
          <Contacto/>
    
  

      </div>
    </>
  )
}

export default App
