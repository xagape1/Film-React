import { FaUser, FaCreditCard } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import './FilmStyle.css';
import ProfilesGrid from '../Profiles/ProfilesGrid';
import Header from '../Layout/Header';

function FilmStyle() {
  const navigate = useNavigate();

  const handlePaymentClick = () => {
    navigate('/payments');
  }
  const handleProfilesClick = () => {
    navigate('/profiles');
  }

  return (

    <div className="netflix-container">
      <div className="netflix-header">
        <div className='texto-derecha'>
          <Header></Header>
        </div>
        <img className="logoo" src="/images/filmcompany.png" alt="Film Logo" />
      </div>
      <div>
        <h1 className='netflix-h1'>Películas y series ilimitadas y mucho más.</h1>
        <p>Disfruta donde quieras.</p>
        <div className="netflix-buttons">
          <button className="netflix-button" onClick={handlePaymentClick}>
            <FaCreditCard className="netflix-icon" />
            Pagar subscripción
          </button>
          <button className="netflix-button" onClick={handleProfilesClick}>
            <FaUser className="netflix-icon" />
            Profiles
          </button>
        </div>
      </div>
    </div>
  );
}

export default FilmStyle;
