import React from 'react'
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <div style={{display:'flex',justifyContent:'center',gap:'20px'}}>
        <NavLink to='/' style={{textDecoration:'none',color:'green'}}>Home</NavLink>
        <NavLink to='/login' style={{textDecoration:'none',color:'green'}}>Login</NavLink>
    </div>
  )
}

export default Navbar