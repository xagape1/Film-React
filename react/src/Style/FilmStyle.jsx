import { FaUser, FaCreditCard } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import './FilmStyle.css';

function FilmStyle() {
  const navigate = useNavigate();

  const handlePaymentClick = () => {
    navigate('/payments');
  }

  return (
    <div className="netflix-container">
      <div className="netflix-header">
        <img className="logoo" src="/images/filmcompany.png" alt="Film Logo" />
      </div>
      <div className="netflix-body">
        <h1>Películas y series ilimitadas y mucho más.</h1>
        <p>Disfruta donde quieras. Cancela cuando quieras.</p>
        <div className="netflix-buttons">
          <button className="netflix-btn" onClick={handlePaymentClick}>
            <FaCreditCard className="netflix-icon" />
            Pagar subscripción
          </button>
          <button className="netflix-btn">
            <FaUser className="netflix-icon" />
            Seleccionar perfil
          </button>
        </div>
      </div>
    </div>
  );
}

export default FilmStyle;
