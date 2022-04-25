import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
import AuthContext from '../../providers/AuthContext';
import { removeToken } from './../../utils/helper';

const Header = () => {

      const authCtx =useContext(AuthContext);
  function logout(e){
    authCtx.logout();
    removeToken();
  }
  return (
      <header>
        <div className="header container">
          <Link className='nav-link' to='/'>
            <img src="./logo.png" alt="sitelogo" className='header-logo'/>
          </Link>
          <nav>
              {authCtx.isUserLoggedIn && <NavLink className='nav-link' to='/'>Home</NavLink>}
              {authCtx.isUserLoggedIn &&  <NavLink className='nav-link' to='/add'>Add</NavLink>}
              {!authCtx.isUserLoggedIn && <NavLink className='nav-link' to='/register'>Register</NavLink>}
              {!authCtx.isUserLoggedIn && <NavLink className='nav-link' to='/login'>Login</NavLink>}
              {authCtx.isUserLoggedIn && <NavLink className='nav-link' onClick={logout} to={'/login'}>Logout</NavLink>}

          </nav>
        </div>
      </header>
  )
}

export default Header