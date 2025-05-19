import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './styles.css';

const Landing = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const redirect = () => navigate('/home');

    const timer = setTimeout(redirect, 5000);

    document.addEventListener('click', redirect);

    return () => {
      clearTimeout(timer);
      document.removeEventListener('click', redirect);
    };
  }, [navigate]);

  return (
    <div className="landing">
      <h1>Bienvenido a la librería</h1>
      <p>Serás redirigido en 5 segundos... o haz clic para continuar.</p>
    </div>
  );
};

export default Landing;
