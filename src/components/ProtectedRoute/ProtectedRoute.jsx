
import { Route } from 'react-router-dom';
import { useContext } from 'react';
import AuthContext from '../../providers/AuthContext';
import NotLoggedIn from '../NotLoggedIn/NotLoggedIn';


const ProtectedRoute = ({children, ...rest}) => {
    const authCtx =useContext(AuthContext);
  return (
          <Route {...rest}>
            {authCtx.isUserLoggedIn ? children : <NotLoggedIn />}
          </Route>
  )
}

export default ProtectedRoute