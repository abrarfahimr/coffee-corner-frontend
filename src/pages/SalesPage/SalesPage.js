import './SalesPage.scss';
import { useNavigate } from 'react-router-dom';

const SalesPage = () => {

  //use navigates redirects to home page
  const navigate = useNavigate();
  const returnHome = () => {
    navigate('/home');
  };

  return (
    <div className="sales">
      <h1 className="sales__heading">Coming soon in future sprints 🚀</h1>
      <p className="sales__description">
        For now checkout other cool features down below. ⬇️
      </p>
      <button className="sales__button" onClick={returnHome}>
        Homepage
      </button>
    </div>
  );
}

export default SalesPage;