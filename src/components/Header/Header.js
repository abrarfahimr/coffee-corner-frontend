import './Header.scss'
import navIcon from '../../assets/icons/navicon.svg';
import settingIcon from '../../assets/icons/setting.svg';


const Header = ({ sideBar, toggleSideBar, user }) => {
  //handle name of user to show the first name only if they have more than 2 words in their given name.
  const splitName = user.given_name.split(" ")
  const firstName = splitName[0];

  return (
    <>
      {/* show a backdrop when nav bar is open or not */}
      <div
        className={sideBar ? 'backdrop--open' : 'backdrop'}
        onClick={toggleSideBar}
      ></div>
      <header className="header">
        {/* icon to open and close the sidebar */}
        <img
          src={navIcon}
          alt="nav icon"
          className="header__navicon"
          onClick={toggleSideBar}
        ></img>
        {/* grab the name from the auth0's user object */}
        <h2 className="header__title">Welcome Back, {firstName}</h2>
        <div className="header__setting">
          {/* grab the image from the auth0's user object */}
          <img
            src={user.picture}
            alt="user icon"
            className="header__user"
          ></img>
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