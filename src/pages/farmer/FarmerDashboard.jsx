import React, { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './FarmerDashboard.module.css';

const FarmerDashboard = () => {
  const navigate = useNavigate();

  const onHomeClick = useCallback(() => {
    navigate('/farmer-dashboard');
  }, [navigate]);

  const onDiscoverClick = useCallback(() => {
    navigate('/discover');
  }, [navigate]);

  const onAlertClick = useCallback(() => {
    navigate('/ai-alert');
  }, [navigate]);

  const onBookingsClick = useCallback(() => {
    navigate('/farmer-bookings1');
  }, [navigate]);

  const onProfileClick = useCallback(() => {
    navigate('/farmer-profile');
  }, [navigate]);

  const onNewBookingClick = useCallback(() => {
    navigate('/discover');
  }, [navigate]);

  const onViewAnalyticsClick = useCallback(() => {
    navigate('/monitoring');
  }, [navigate]);

  return (
    <div className={styles.existingFarmerDashboard}>
      <div className={styles.bNav}>
        <div className={styles.home} onClick={onHomeClick}>
          <div className={styles.ecocoldIcons}>
            <img className={styles.vectorIcon} alt="" />
            <img className={styles.vectorIcon2} alt="" />
          </div>
          <div className={styles.text}>
            <div className={styles.discover}>Home</div>
          </div>
        </div>
        <div className={styles.dis} onClick={onDiscoverClick}>
          <img className={styles.icon} alt="" />
          <div className={styles.text}>
            <div className={styles.discover}>Discover</div>
          </div>
        </div>
        <div className={styles.dis} onClick={onAlertClick}>
          <div className={styles.ecocoldIcons}>
            <img className={styles.vectorIcon3} alt="" />
          </div>
          <div className={styles.text}>
            <div className={styles.discover}>Alert</div>
          </div>
        </div>
        <div className={styles.dis} onClick={onBookingsClick}>
          <img className={styles.icon} alt="" />
          <div className={styles.text}>
            <div className={styles.viewAnalytics}>Bookings</div>
          </div>
        </div>
        <div className={styles.prof} onClick={onProfileClick}>
          <img className={styles.icon} alt="" />
          <div className={styles.text}>
            <div className={styles.discover}>Profile</div>
          </div>
        </div>
      </div>
      <div className={styles.containerParent}>
        <div className={styles.container}>
          <div className={styles.container2}>
            <div className={styles.heading1}>
              <div className={styles.welcomeBack}>Welcome back!</div>
            </div>
            <div className={styles.paragraph}>
              <div className={styles.heresYourStorage}>Here's your storage overview</div>
            </div>
          </div>
          <img className={styles.buttonIcon} alt="" />
        </div>
        <div className={styles.farmerDashboard}>
          <div className={styles.container3}>
            <div className={styles.container4}>
              <div className={styles.container5}>
                <img className={styles.icon4} alt="" />
                <div className={styles.paragraph2}>
                  <div className={styles.activeBookings}>Active Bookings</div>
                </div>
                <div className={styles.paragraph3}>
                  <div className={styles.div}>3</div>
                </div>
              </div>
            </div>
            <div className={styles.container6}>
              <div className={styles.container5}>
                <img className={styles.icon5} alt="" />
                <div className={styles.paragraph4}>
                  <div className={styles.activeBookings}>Spoilage Saved</div>
                </div>
                <div className={styles.paragraph5}>
                  <div className={styles.div2}>87%</div>
                </div>
              </div>
            </div>
            <div className={styles.container8}>
              <div className={styles.container9}>
                <img className={styles.icon6} alt="" />
                <div className={styles.paragraph6}>
                  <div className={styles.activeAlerts}>Active Alerts</div>
                </div>
                <div className={styles.paragraph7}>
                  <div className={styles.div3}>2</div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.container10}>
            <div className={styles.container11}>
              <div className={styles.heading4}>
                <b className={styles.recentAlerts}>Recent Alerts</b>
              </div>
            </div>
            <div className={styles.container12}>
              <div className={styles.container13}>
                <img className={styles.containerIcon} alt="" />
                <div className={styles.container14}>
                  <div className={styles.paragraph8}>
                    <div className={styles.heresYourStorage}>Battery level low at Hub C</div>
                  </div>
                  <div className={styles.paragraph9}>
                    <div className={styles.activeAlerts}>1 hour ago</div>
                  </div>
                </div>
              </div>
              <div className={styles.container13}>
                <img className={styles.containerIcon} alt="" />
                <div className={styles.container14}>
                  <div className={styles.paragraph8}>
                    <div className={styles.heresYourStorage}>Your booking at Hub B ends tomorrow</div>
                  </div>
                  <div className={styles.paragraph9}>
                    <div className={styles.activeAlerts}>3 hours ago</div>
                    <div className={styles.paragraphChild} />
                  </div>
                </div>
              </div>
              <div className={styles.container17}>
                <img className={styles.containerIcon} alt="" />
                <div className={styles.container14}>
                  <div className={styles.paragraph8}>
                    <div className={styles.heresYourStorage}>High temperature alert: Hub A - Zone 2</div>
                  </div>
                  <div className={styles.paragraph9}>
                    <div className={styles.activeAlerts}>5 min ago</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.container19}>
            <div className={styles.buttons} onClick={onNewBookingClick}>
              <img className={styles.icon7} alt="" />
              <div className={styles.paragraph14}>
                <div className={styles.discover}>New Booking</div>
              </div>
            </div>
            <div className={styles.buttons2} onClick={onViewAnalyticsClick}>
              <img className={styles.icon8} alt="" />
              <div className={styles.paragraph15}>
                <div className={styles.viewAnalytics}>View Analytics</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FarmerDashboard;
