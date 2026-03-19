import React from 'react';
import styles from './NewFarmerEntry.module.css';

const NewFarmerEntry = () => {
  return (
    <div className={styles.newFarmerEntry}>
      <div className={styles.bNav}>
        <div className={styles.home}>
          <div className={styles.ecocoldIcons}>
            <img className={styles.vectorIcon} alt="" />
            <img className={styles.vectorIcon2} alt="" />
          </div>
          <div className={styles.text}>
            <div className={styles.discover}>Home</div>
          </div>
        </div>
        <div className={styles.dis}>
          <img className={styles.icon} alt="" />
          <div className={styles.text}>
            <div className={styles.discover}>Discover</div>
          </div>
        </div>
        <div className={styles.dis}>
          <div className={styles.ecocoldIcons}>
            <img className={styles.vectorIcon3} alt="" />
          </div>
          <div className={styles.text}>
            <div className={styles.discover}>Alert</div>
          </div>
        </div>
        <div className={styles.dis}>
          <img className={styles.icon} alt="" />
          <div className={styles.text}>
            <div className={styles.viewAnalytics}>Bookings</div>
          </div>
        </div>
        <div className={styles.dis}>
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
              <div className={styles.welcomeAisha}>Welcome Aisha!</div>
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
                  <div className={styles.div}>0</div>
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
                  <div className={styles.div2}>0%</div>
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
                  <div className={styles.div}>0</div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.container10}>
            <div className={styles.container11}>
              <div className={styles.heading4}>
                <b className={styles.recent}>{`Recent `}</b>
              </div>
            </div>
            <div className={styles.paragraph8}>
              <div className={styles.heresYourStorage}>No Recent Activities</div>
            </div>
            <div className={styles.button}>
              <img className={styles.icon7} alt="" />
              <div className={styles.discoverHubsNear}>Discover Hubs Near</div>
            </div>
          </div>
          <div className={styles.container12}>
            <div className={styles.buttons}>
              <img className={styles.icon8} alt="" />
              <div className={styles.paragraph9}>
                <div className={styles.discover}>New Booking</div>
              </div>
            </div>
            <div className={styles.buttons2}>
              <img className={styles.icon9} alt="" />
              <div className={styles.paragraph10}>
                <div className={styles.viewAnalytics}>View Analytics</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewFarmerEntry;
