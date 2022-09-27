import './Login.scss';
import { useAuth0 } from '@auth0/auth0-react';
import logo from '../../assets/icons/logo.svg';

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <div className="login">
      <div className="login__top">
        <img src={logo} alt="logo" className="login__icon" />
        <h1 className="login__heading"> Welcome to Coffee Corner</h1>
        <p className="login__paragraph">
          Helping your business grow with rich data, and a cup of coffee ☕️
        </p>
      </div>
      <p className="login__para">Get started by logging in below ⬇️</p>
      <button className='login__button' onClick={() => loginWithRedirect()}>Log In</button>
    </div>
  ); 
};

export default LoginButton;