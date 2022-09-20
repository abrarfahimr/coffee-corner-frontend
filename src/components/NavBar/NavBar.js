import { Link } from 'react-router-dom';
import './NavBar.scss';
import {NavBarData} from './NavBarData';
import { v4 as uuidv4 } from 'uuid';
import logo from '../../assets/icons/logo.svg';

const NavBar = ({ sideBar }) => {
  return (
    <nav className={sideBar? "navbar--open" : "navbar"}>
      <img src={logo} alt="logo" className="navbar__logo"></img>
      {NavBarData.map((data) => {
        return (
          <div className="navbar__links" key={uuidv4()}>
            <img src={data.icon} alt="nav icon" className="navbar__icons"></img>
            <Link to={data.link} className="navbar__title">
              {data.title}
            </Link>
          </div>
        );
      })}
      <div className="navbar__logout"></div>
    </nav>
  );
};

export default NavBar;