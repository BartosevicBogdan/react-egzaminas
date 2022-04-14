import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
      <header className='header'>
          <img src="./logo.png" alt="sitelogo" className='header-logo'/>
        <nav>
            <NavLink className='nav-link' to='/'>Home</NavLink>
            <NavLink className='nav-link' to='/add'>Add</NavLink>
            <NavLink className='nav-link' to='/register'>Register</NavLink>
            <NavLink className='nav-link' to='/login'>Login</NavLink>
        </nav>
      </header>
  )
}

export default Header