
import { Link } from 'react-router-dom';
const NotLoggedIn = () => {
  return (
    <>
        <h2>You are not logged in</h2>
        <p>Please login to see the content</p>
        <Link to="/login">
            <button className='styled-button'>Login</button>
        </Link>
    </>
  )
}

export default NotLoggedIn