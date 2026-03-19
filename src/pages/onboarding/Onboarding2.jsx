import React, { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Onboarding2.module.css';

const Onboarding2 = () => {
  const navigate = useNavigate();

  const onNextClick = useCallback(() => {
    navigate('/onboarding3');
  }, [navigate]);

  const onSkipClick = useCallback(() => {
    navigate('/choice');
  }, [navigate]);

  return (
    <div className={styles.onboaring2}>
      <div className={styles.onboarding2}>
        <img className={styles.image2Icon} alt="" />
        <div className={styles.textParent}>
          <div className={styles.text}>
            <div className={styles.heading2}>
              <div className={styles.reduceSpoilageBy}>Reduce Spoilage by 87%</div>
            </div>
            <div className={styles.paragraph}>
              <div className={styles.accessAffordableCleanEnerg}>AI-powered monitoring alerts you to temperature changes and spoilage risks in real-time.</div>
            </div>
          </div>
          <div className={styles.container}>
            <div className={styles.container2} />
            <div className={styles.container3} />
            <div className={styles.container2} />
          </div>
        </div>
        <div className={styles.ecocoldPrimaryButtons} onClick={onNextClick}>
          <div className={styles.reduceSpoilageBy}>Next</div>
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

export default Onboarding2;
