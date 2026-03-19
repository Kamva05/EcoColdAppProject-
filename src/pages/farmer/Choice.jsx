import React, { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Choice.module.css';

const Choice = () => {
  const navigate = useNavigate();

  const onFarmerClick = useCallback(() => {
    navigate('/signup');
  }, [navigate]);

  const onOperatorClick = useCallback(() => {
    navigate('/signup');
  }, [navigate]);

  const onContinueClick = useCallback(() => {
    navigate('/signup');
  }, [navigate]);

  return (
    <div className={styles.choice}>
      <div className={styles.choice2}>
        <div className={styles.heading2}>
          <div className={styles.iAmA}>I am a...</div>
        </div>
        <div className={styles.choice3}>
          <div className={styles.container} onClick={onFarmerClick}>
            <img className={styles.containerIcon} alt="" />
            <div className={styles.container2}>
              <div className={styles.heading3}>
                <div className={styles.farmerTrader}>Farmer / Trader</div>
              </div>
              <div className={styles.paragraph}>
                <div className={styles.storeProduceAnd}>Store produce and track spoilage risk</div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.choice3}>
          <div className={styles.container3} onClick={onOperatorClick}>
            <img className={styles.containerIcon} alt="" />
            <div className={styles.container4}>
              <div className={styles.heading3}>
                <div className={styles.farmerTrader}>Hub Operator</div>
              </div>
              <div className={styles.paragraph}>
                <div className={styles.storeProduceAnd}>Manage storage facility and bookings</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.container5}>
        <img className={styles.buttonIcon} alt="" onClick={onContinueClick} />
      </div>
    </div>
  );
};

export default Choice;
