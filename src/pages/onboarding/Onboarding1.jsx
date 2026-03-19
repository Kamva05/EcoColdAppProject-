import React, { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Onboarding1.module.css';

const Onboarding1 = () => {
  const navigate = useNavigate();

  const onButtonContainerClick = useCallback(() => {
    navigate('/onboarding2');
  }, [navigate]);

  const onSkipClick = useCallback(() => {
    navigate('/choice');
  }, [navigate]);

  return (
    <div className={styles.onboaring1}>
      <div className={styles.onboarding1}>
        <img className={styles.image1Icon} alt="" />
        <div className={styles.textParent}>
          <div className={styles.text}>
            <div className={styles.heading2}>
              <div className={styles.solarPoweredColdStorage}>Solar-Powered Cold Storage</div>
            </div>
            <div className={styles.paragraph}>
              <div className={styles.accessAffordableCleanEnerg}>Access affordable, clean-energy cold storage hubs near you. Pay only for what you use.</div>
            </div>
          </div>
          <div className={styles.container}>
            <div className={styles.container2} />
            <div className={styles.container3} />
            <div className={styles.container3} />
          </div>
        </div>
        <div className={styles.ecocoldPrimaryButtons} onClick={onButtonContainerClick}>
          <div className={styles.solarPoweredColdStorage}>Next</div>
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

export default Onboarding1;
