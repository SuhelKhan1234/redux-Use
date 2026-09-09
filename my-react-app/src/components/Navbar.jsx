import React from 'react'
import { FaCartShopping } from "react-icons/fa6";


const Navbar = () => {
  return (
    <div className='flex flex-row justify-between max-w-11/12'>
    <NavLink to ="/">
      <div className=' '>
        <img src='public/logo.png' width={90} height={90}/>
    </div>
    </NavLink>
   
    <div className='flex flex-row  '>
    <NavLink to="/">
        <p>Home</p>
    </NavLink>

    <NavLink to="/cart">
        <div>
        <FaCartShopping />

        </div>
    </NavLink>

       

    </div>
        
    </div>
  )
}

export default Navbar