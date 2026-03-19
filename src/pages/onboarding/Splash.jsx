import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Splash.module.css';
import EcocoldLogo from '/assets/images/EcoCold Logo 1.png';

const Splash = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Redirect to onboarding1 after 3 seconds
    const timer = setTimeout(() => {
      navigate('/onboarding1');
    }, 3000);

    // Clean up the timer if component unmounts
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className={styles.splash}>
      <img 
        className={styles.ecocoldLogoIcon} 
        src={EcocoldLogo} 
        alt="EcoCold Logo" 
      />
    </div>
  );
};

export default Splash;
