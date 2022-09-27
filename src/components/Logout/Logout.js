import { useAuth0 } from '@auth0/auth0-react';
import { Link } from 'react-router-dom';
import logOut from "../../assets/icons/log-out.svg";

const Logout = () => {
  const { logout } = useAuth0();
  return (
    <div className="navbar__bottom">
      <img src={logOut} alt="nav icon" className="navbar__icons"></img>
      <Link
        className="navbar__logout"
        onClick={() => logout({ returnTo: window.location.origin })}
      >
        Log Out
      </Link>
    </div>
  );
}

export default Logout;