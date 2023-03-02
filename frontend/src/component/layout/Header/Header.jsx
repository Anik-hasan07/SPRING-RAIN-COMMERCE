import React from 'react'
import { Link } from 'react-router-dom'

import "./Header.css"

const Header = () => {
  return (
    <div className='hero'>
      <nav>
      <h2 className='logo'>Ecommerce</h2>
      <div className='ul'>
        
        <Link to="/">HOME</Link>
        <Link to="/products">PRODUCT</Link>
        <Link to="/contact">CONTACT</Link>
        <Link to="/about">ABOUT</Link>
        
      </div>
   
        <Link to="/search">
          <button type='button'>SEARCH</button>                                               
        </Link>
      </nav>
      
    </div>
  )
}

export default Header
