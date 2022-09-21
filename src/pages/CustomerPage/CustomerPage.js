import './CustomerPage.scss';
import { useNavigate } from 'react-router-dom';

const CustomerPage = () => {
  //use navigates redirects to home page
  const navigate = useNavigate();
  const returnHome = () => {
    navigate('/home');
  };

  return (
    <div className="customer">
      <h1 className="customer__heading">Coming soon in future sprints 🚀</h1>
      <p className="customer__description">
        For now checkout other cool features down below. ⬇️
      </p>
      <button className="customer__button" onClick={returnHome}>
        Homepage
      </button>
    </div>
  );
};

export default CustomerPage;
