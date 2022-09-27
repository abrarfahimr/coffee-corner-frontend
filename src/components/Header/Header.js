import './Header.scss'
import navIcon from '../../assets/icons/navicon.svg';
import settingIcon from '../../assets/icons/setting.svg';


const Header = ({ sideBar, toggleSideBar, user }) => {
  const splitName = user.given_name.split(" ")
  const firstName = splitName[0];

  return (
    <>
      <div className={sideBar ? 'backdrop--open' : 'backdrop'} onClick={toggleSideBar}></div>
      <header className="header">
        <img
          src={navIcon}
          alt="nav icon"
          className="header__navicon"
          onClick={toggleSideBar}
        ></img>
        <h2 className="header__title">Welcome Back, {firstName}</h2>
        <div className="header__setting">
          <img src={user.picture} alt="user icon" className="header__user"></img>
          <img
            src={settingIcon}
            alt="setting icon"
            className="header__settingicon"
          ></img>
        </div>
      </header>
    </>
  );
};

export default Header;