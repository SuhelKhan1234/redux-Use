import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home'
import Cart from './pages/Cart'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
    <div>
      <Navbar/>
    </div>
    <Routes>
      <Route path="/" element ={<Home/>} />
      <Route path ="/cart" element = {<Cart/>} />
    </Routes>
    </div>
  )
}

export default App
