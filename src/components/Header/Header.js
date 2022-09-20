import './Header.scss'
import navIcon from '../../assets/icons/navicon.svg';
import settingIcon from '../../assets/icons/setting.svg';
import userImage from '../../assets/images/user.png';


const Header = ({ sideBar, toggleSideBar }) => {
  return (
    <>
      <div className={sideBar ? 'backdrop--open' : 'backdrop'} onClick={toggleSideBar}></div>
      <div className="header">
        <img
          src={navIcon}
          alt="nav icon"
          className="header__navicon"
          onClick={toggleSideBar}
        ></img>
        <h2 className="header__title">Welcome Back</h2>
        <div className="header__setting">
          <img src={userImage} alt="user icon" className="header__user"></img>
          <img
            src={settingIcon}
            alt="setting icon"
            className="header__settingicon"
          ></img>
        </div>
      </div>
    </>
  );
};

export default Header;