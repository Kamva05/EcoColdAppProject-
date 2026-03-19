import React, { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Onboarding3.module.css';

const Onboarding3 = () => {
  const navigate = useNavigate();

  const onGetStartedClick = useCallback(() => {
    navigate('/choice');
  }, [navigate]);

  const onSkipClick = useCallback(() => {
    navigate('/choice');
  }, [navigate]);

  return (
    <div className={styles.onboaring3}>
      <div className={styles.onboarding3}>
        <img className={styles.image3Icon} alt="" />
        <div className={styles.text}>
          <div className={styles.text2}>
            <div className={styles.heading2}>
              <div className={styles.secureReliable}>Secure & Reliable</div>
            </div>
            <div className={styles.paragraph}>
              <div className={styles.accessAffordableCleanEnerg}>Your produce is monitored 24/7 with automated alerts and transparent pricing.</div>
            </div>
          </div>
          <div className={styles.container}>
            <div className={styles.container2} />
            <div className={styles.container2} />
            <div className={styles.container4} />
          </div>
        </div>
        <div className={styles.ecocoldPrimaryButtons} onClick={onGetStartedClick}>
          <div className={styles.secureReliable}>Get Started</div>
          <div className={styles.oluronkeMarthasIcons}>
            <img className={styles.vectorIcon} alt="" />
            <img className={styles.vectorIcon2} alt="" />
          </div>
        </div>
      </div>
      <div className={styles.skip}>
        <div className={styles.button2} onClick={onSkipClick}>
          <div className={styles.skip2}>Skip</div>
        </div>
      </div>
    </div>
  );
};

export default Onboarding3;
