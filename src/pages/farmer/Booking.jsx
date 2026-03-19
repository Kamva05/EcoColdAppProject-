import React, { useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Booking.module.css';

const Booking = () => {
  const navigate = useNavigate();
  const [selectedProduce, setSelectedProduce] = useState('Vegetables');
  const [crateCount, setCrates] = useState(10);
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const onBackClick = useCallback(() => {
    navigate('/hub-details');
  }, [navigate]);

  const onContinueClick = useCallback(() => {
    navigate('/pay1');
  }, [navigate]);

  const handleProduceSelect = useCallback((produce) => {
    setSelectedProduce(produce);
  }, []);

  const handleCratesChange = useCallback((e) => {
    const value = parseInt(e.target.value) || 0;
    setCrates(Math.min(value, 45)); // Max 45 crates
  }, []);

  const handleDateChange = useCallback((type, value) => {
    if (type === 'start') {
      setStartDate(value);
    } else {
      setEndDate(value);
    }
  }, []);

  // Calculate duration
  const calculateDuration = () => {
    if (!startDate || !endDate) return 0;
    const start = new Date(startDate);
    const end = new Date(endDate);
    const diffTime = end - start;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return Math.max(0, diffDays);
  };

  const duration = calculateDuration();
  const totalPrice = crateCount * duration * 150;

  return (
    <div className={styles.booking}>
      <div className={styles.bookHeaderParent}>
        <div className={styles.bookHeader}>
          <img 
            className={styles.buttonIcon} 
            alt="Back" 
            onClick={onBackClick} 
            style={{ cursor: 'pointer' }}
          />
          <div className={styles.container}>
            <div className={styles.heading1}>
              <div className={styles.bookStorage}>Book Storage</div>
            </div>
            <div className={styles.paragraph}>
              <div className={styles.step1Of}>Step 1 of 2</div>
            </div>
          </div>
        </div>
        <div className={styles.bookingAll}>
          <div className={styles.book}>
            <div className={styles.booking2}>
              <div className={styles.container2}>
                <div className={styles.facility}>
                  <div className={styles.heading3}>
                    <div className={styles.sunchillHub}>SunChill Hub</div>
                  </div>
                  <div className={styles.paragraph2}>
                    <div className={styles.ojuelegbaLagos}>Ojuelegba, Lagos</div>
                  </div>
                  <div className={styles.container3}>
                    <div className={styles.text}>
                      <div className={styles.crateday}>₦150/crate/day</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.container4}>
                <div className={styles.container5}>
                  <div className={styles.primitivelabel}>
                    <div className={styles.produceType}>Produce Type</div>
                  </div>
                  <div className={styles.container6}>
                    <div 
                      className={`${styles.button} ${selectedProduce === 'Vegetables' ? styles.selected : ''}`}
                      onClick={() => handleProduceSelect('Vegetables')}
                    >
                      <div className={styles.paragraph3}>
                        <b className={styles.vegetables}>Vegetables</b>
                      </div>
                      <div className={styles.paragraph4}>
                        <div className={styles.step1Of}>2-6°C</div>
                      </div>
                    </div>
                    <div 
                      className={`${styles.button2} ${selectedProduce === 'Fruits' ? styles.selected : ''}`}
                      onClick={() => handleProduceSelect('Fruits')}
                    >
                      <div className={styles.paragraph3}>
                        <b className={styles.vegetables}>Fruits</b>
                      </div>
                      <div className={styles.paragraph4}>
                        <div className={styles.c2}>2-6°C</div>
                      </div>
                    </div>
                    <div 
                      className={`${styles.button3} ${selectedProduce === 'Dairy Products' ? styles.selected : ''}`}
                      onClick={() => handleProduceSelect('Dairy Products')}
                    >
                      <div className={styles.paragraph3}>
                        <b className={styles.vegetables}>Dairy Products</b>
                      </div>
                      <div className={styles.paragraph4}>
                        <div className={styles.step1Of}>2-4°C</div>
                      </div>
                    </div>
                    <div 
                      className={`${styles.button4} ${selectedProduce === 'Fish & Seafood' ? styles.selected : ''}`}
                      onClick={() => handleProduceSelect('Fish & Seafood')}
                    >
                      <div className={styles.paragraph3}>
                        <b className={styles.vegetables}>{`Fish & Seafood`}</b>
                      </div>
                      <div className={styles.paragraph4}>
                        <div className={styles.step1Of}>0-2°C</div>
                      </div>
                    </div>
                    <div 
                      className={`${styles.button5} ${selectedProduce === 'Meat' ? styles.selected : ''}`}
                      onClick={() => handleProduceSelect('Meat')}
                    >
                      <div className={styles.paragraph3}>
                        <b className={styles.vegetables}>Meat</b>
                      </div>
                      <div className={styles.paragraph4}>
                        <div className={styles.step1Of}>0-2°C</div>
                      </div>
                    </div>
                    <div 
                      className={`${styles.button6} ${selectedProduce === 'Other' ? styles.selected : ''}`}
                      onClick={() => handleProduceSelect('Other')}
                    >
                      <div className={styles.paragraph3}>
                        <b className={styles.vegetables}>Other</b>
                      </div>
                      <div className={styles.paragraph4}>
                        <div className={styles.step1Of}>Varies</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.container7}>
                <div className={styles.container8}>
                  <div className={styles.primitivelabel2}>
                    <img className={styles.icon} alt="" />
                    <div className={styles.numberOfCrates}>Number of Crates</div>
                  </div>
                  <div className={styles.numberInput}>
                    <input
                      type="number"
                      value={crateCount}
                      onChange={handleCratesChange}
                      min="1"
                      max="45"
                      className={styles.cratesInput}
                    />
                  </div>
                  <div className={styles.paragraph15}>
                    <div className={styles.step1Of}>Maximum: 45 crates available</div>
                  </div>
                </div>
              </div>
              <div className={styles.container9}>
                <div className={styles.container10}>
                  <div className={styles.container11}>
                    <div className={styles.primitivelabel}>
                      <img className={styles.icon} alt="" />
                      <div className={styles.numberOfCrates}>Start Date</div>
                    </div>
                    <input
                      type="date"
                      value={startDate}
                      onChange={(e) => handleDateChange('start', e.target.value)}
                      className={styles.datePicker}
                    />
                  </div>
                  <div className={styles.container11}>
                    <div className={styles.primitivelabel}>
                      <img className={styles.icon} alt="" />
                      <div className={styles.numberOfCrates}>End Date</div>
                    </div>
                    <input
                      type="date"
                      value={endDate}
                      onChange={(e) => handleDateChange('end', e.target.value)}
                      className={styles.datePicker}
                    />
                  </div>
                  <div className={styles.container13}>
                    <img className={styles.icon4} alt="" />
                    <div className={styles.text2}>
                      <div className={styles.vegetables}>
                        <b>Duration:</b>
                        <span> {duration} days</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.container14}>
                <div className={styles.container15}>
                  <div className={styles.heading32}>
                    <div className={styles.costSummary}>Cost Summary</div>
                  </div>
                  <div className={styles.container16}>
                    <div className={styles.container17}>
                      <div className={styles.text3}>
                        <div className={styles.vegetables}>{crateCount} crates × {duration} days</div>
                      </div>
                      <div className={styles.text4}>
                        <div className={styles.vegetables}>₦{totalPrice.toLocaleString()}</div>
                      </div>
                    </div>
                    <div className={styles.container17}>
                      <div className={styles.text5}>
                        <div className={styles.vegetables}>Service fee</div>
                      </div>
                      <div className={styles.text6}>
                        <div className={styles.vegetables}>₦0</div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.container19}>
                    <div className={styles.text7}>
                      <div className={styles.bookStorage}>Total</div>
                    </div>
                    <div className={styles.text8}>
                      <div className={styles.sunchillHub}>₦{totalPrice.toLocaleString()}</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.container20}>
                <img className={styles.icon5} alt="" />
                <div className={styles.paragraph16}>
                  <div className={styles.youCanCancel}>You can cancel or modify your booking up to 24 hours before the start date. Temperature monitoring begins immediately upon storage</div>
                </div>
              </div>
            </div>
            <div 
              className={styles.ecocoldPrimaryButtons}
              onClick={onContinueClick}
              style={{ cursor: 'pointer' }}
            >
              <div className={styles.sunchillHub}>Continue to Payment</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booking;
