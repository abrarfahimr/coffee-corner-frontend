import { Link, NavLink } from 'react-router-dom';
import './NavBar.scss';
import {NavBarData} from './NavBarData';
import { v4 as uuidv4 } from 'uuid';
import logo from '../../assets/icons/logo.svg';
import Logout from '../Logout/Logout';

const NavBar = ({ sideBar }) => {
  return (
    <nav className={sideBar ? 'navbar--open' : 'navbar'}>
      <Link to="/home">
        <img src={logo} alt="logo" className="navbar__logo"></img>
      </Link>
      {/* map out the nav bar data and use NavLink to send to appropriate pages */}
      {NavBarData.map((data) => {
        return (
          <div className="navbar__links" key={uuidv4()}>
            <img src={data.icon} alt="nav icon" className="navbar__icons"></img>
            <NavLink to={data.link} className="navbar__title">
              {data.title}
            </NavLink>
          </div>
        );
      })}
      {/* logout component to log out of the website */}
        <Logout/>
    </nav>
  );
};

export default NavBar;