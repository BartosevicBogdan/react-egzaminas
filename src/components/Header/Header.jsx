import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
      <header>
        <div className="header container">
          <img src="./logo.png" alt="sitelogo" className='header-logo'/>
          <nav>
              <NavLink className='nav-link' to='/'>Home</NavLink>
              <NavLink className='nav-link' to='/add'>Add</NavLink>
              <NavLink className='nav-link' to='/register'>Register</NavLink>
              <NavLink className='nav-link' to='/login'>Login</NavLink>
          </nav>
        </div>
      </header>
  )
}

export default Header