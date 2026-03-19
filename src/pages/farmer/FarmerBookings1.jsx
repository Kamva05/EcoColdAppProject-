import React from 'react';
import styles from './FarmerBookings1.module.css';

const FarmerBookings1 = () => {
  return (
    <div className={styles.farmerBookings1}>
      <div className={styles.farmerBookings1Parent}>
        <div className={styles.farmerBookings12}>
          <div className={styles.heading1}>
            <div className={styles.myBookings}>My Bookings</div>
          </div>
          <div className={styles.paragraph}>
            <div className={styles.trackAndManage}>Track and manage your storage</div>
          </div>
        </div>
        <div className={styles.bookingStatus}>
          <div className={styles.container}>
            <div className={styles.paragraph2}>
              <div className={styles.div}>2</div>
            </div>
            <div className={styles.paragraph3}>
              <div className={styles.active}>Active</div>
            </div>
          </div>
          <div className={styles.container2}>
            <div className={styles.paragraph4}>
              <div className={styles.div}>1</div>
            </div>
            <div className={styles.paragraph5}>
              <div className={styles.active}>Completed</div>
            </div>
          </div>
        </div>
        <div className={styles.bookingCards}>
          <div className={styles.bookingCard}>
            <div className={styles.bookingCard2}>
              <div className={styles.container3}>
                <div className={styles.paragraph6}>
                  <div className={styles.sunChillHub}>SunChill Hub - Ojuelegba</div>
                </div>
                <div className={styles.paragraph7}>
                  <div className={styles.active2}>Active</div>
                </div>
              </div>
              <div className={styles.container4}>
                <div className={styles.paragraph8}>
                  <div className={styles.ojuelegbaLagos}>Ojuelegba, Lagos</div>
                </div>
              </div>
              <div className={styles.container5}>
                <div className={styles.container6}>
                  <div className={styles.paragraph9}>
                    <div className={styles.crates}>Crates</div>
                  </div>
                  <div className={styles.paragraph10}>
                    <div className={styles.duration}>Duration</div>
                  </div>
                </div>
                <div className={styles.container7}>
                  <div className={styles.paragraph11}>
                    <div className={styles.div2}>10</div>
                  </div>
                  <div className={styles.paragraph12}>
                    <div className={styles.feb14Feb}>Feb 14 - Feb 20</div>
                  </div>
                </div>
                <div className={styles.container8}>
                  <div className={styles.paragraph13}>
                    <div className={styles.daysRemaining}>4 days remaining</div>
                  </div>
                </div>
              </div>
              <div className={styles.container9}>
                <div className={styles.paragraph14}>
                  <div className={styles.totalCost}>Total Cost</div>
                </div>
                <div className={styles.paragraph15}>
                  <div className={styles.n9000}>₦9,000</div>
                </div>
              </div>
              <div className={styles.button}>
                <div className={styles.details}>Details</div>
              </div>
            </div>
          </div>
          <div className={styles.bookingCard3}>
            <div className={styles.bookingCard4}>
              <div className={styles.container10}>
                <div className={styles.paragraph16}>
                  <div className={styles.greenStoreFacility}>GreenStore Facility</div>
                </div>
                <div className={styles.paragraph17}>
                  <div className={styles.active2}>Active</div>
                </div>
              </div>
              <div className={styles.container11}>
                <div className={styles.paragraph18}>
                  <div className={styles.yabaLagos}>Yaba, Lagos</div>
                </div>
              </div>
              <div className={styles.container12}>
                <div className={styles.container13}>
                  <div className={styles.paragraph19}>
                    <div className={styles.crates}>Crates</div>
                  </div>
                  <div className={styles.paragraph20}>
                    <div className={styles.duration}>Duration</div>
                  </div>
                </div>
                <div className={styles.container14}>
                  <div className={styles.paragraph21}>
                    <div className={styles.div3}>5</div>
                  </div>
                  <div className={styles.paragraph22}>
                    <div className={styles.feb15Feb}>Feb 15 - Feb 18</div>
                  </div>
                </div>
                <div className={styles.container15}>
                  <div className={styles.paragraph23}>
                    <div className={styles.daysRemaining}>2 days remaining</div>
                  </div>
                </div>
              </div>
              <div className={styles.container16}>
                <div className={styles.paragraph24}>
                  <div className={styles.totalCost}>Total Cost</div>
                </div>
                <div className={styles.paragraph25}>
                  <div className={styles.n1800}>₦1,800</div>
                </div>
              </div>
              <div className={styles.button2}>
                <div className={styles.details}>Details</div>
              </div>
            </div>
          </div>
        </div>
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
          <div className={styles.dis2}>
            <div className={styles.ecocoldIcons}>
              <img className={styles.vectorIcon3} alt="" />
            </div>
            <div className={styles.text}>
              <div className={styles.discover}>Alert</div>
            </div>
          </div>
          <div className={styles.dis3}>
            <img className={styles.icon2} alt="" />
            <div className={styles.text}>
              <div className={styles.bookings2}>Bookings</div>
            </div>
          </div>
          <div className={styles.dis4}>
            <img className={styles.icon3} alt="" />
            <div className={styles.text}>
              <div className={styles.discover}>Profile</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FarmerBookings1;
