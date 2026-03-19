import React from 'react';
import styles from './FarmerBookings2.module.css';

const FarmerBookings2 = () => {
  return (
    <div className={styles.farmerBookings2}>
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
        <div className={styles.home}>
          <img className={styles.icon} alt="" />
          <div className={styles.text}>
            <div className={styles.discover}>Discover</div>
          </div>
        </div>
        <div className={styles.home}>
          <div className={styles.ecocoldIcons}>
            <img className={styles.vectorIcon3} alt="" />
          </div>
          <div className={styles.text}>
            <div className={styles.discover}>Alert</div>
          </div>
        </div>
        <div className={styles.bookings}>
          <img className={styles.icon} alt="" />
          <div className={styles.text}>
            <div className={styles.bookings2}>Bookings</div>
          </div>
        </div>
        <div className={styles.home}>
          <img className={styles.icon} alt="" />
          <div className={styles.text}>
            <div className={styles.discover}>Profile</div>
          </div>
        </div>
      </div>
      <div className={styles.containerParent}>
        <div className={styles.container}>
          <div className={styles.heading1}>
            <b className={styles.myBookings}>My Bookings</b>
          </div>
          <div className={styles.paragraph}>
            <div className={styles.trackAndManage}>Track and manage your storage</div>
          </div>
        </div>
        <div className={styles.activeBooking}>
          <div className={styles.container2}>
            <div className={styles.container3}>
              <div className={styles.heading1}>
                <div className={styles.div}>2</div>
              </div>
              <div className={styles.paragraph3}>
                <div className={styles.active}>Active</div>
              </div>
            </div>
            <div className={styles.container4}>
              <div className={styles.heading1}>
                <div className={styles.div}>1</div>
              </div>
              <div className={styles.paragraph5}>
                <div className={styles.active}>Completed</div>
              </div>
            </div>
          </div>
          <div className={styles.completed2}>
            <div className={styles.tabList}>
              <div className={styles.primitivebutton}>
                <div className={styles.bookings2}>Completed</div>
              </div>
              <div className={styles.primitivebutton2}>
                <div className={styles.bookings2}>Active</div>
              </div>
            </div>
            <div className={styles.container5}>
              <div className={styles.container6}>
                <div className={styles.container7}>
                  <div className={styles.container8}>
                    <div className={styles.heading3}>
                      <div className={styles.greenharvestHub}>GreenHarvest Hub</div>
                    </div>
                    <div className={styles.container9}>
                      <img className={styles.icon4} alt="" />
                      <div className={styles.text6}>
                        <div className={styles.discover}>Ojuelegba, Lagos</div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.text7}>
                    <div className={styles.discover}>completed</div>
                  </div>
                </div>
                <div className={styles.container10}>
                  <div className={styles.container11}>
                    <img className={styles.containerIcon} alt="" />
                    <div className={styles.container12}>
                      <div className={styles.paragraph6}>
                        <div className={styles.discover}>Crates</div>
                      </div>
                      <div className={styles.paragraph7}>
                        <b className={styles.b}>12</b>
                      </div>
                    </div>
                  </div>
                  <div className={styles.container13}>
                    <img className={styles.containerIcon} alt="" />
                    <div className={styles.container14}>
                      <div className={styles.paragraph6}>
                        <div className={styles.active}>Duration</div>
                      </div>
                      <div className={styles.paragraph7}>
                        <b className={styles.b}>Feb 1 - Feb 10</b>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.container15}>
                  <div className={styles.container16}>
                    <div className={styles.paragraph10}>
                      <div className={styles.active}>Total Cost</div>
                    </div>
                    <div className={styles.paragraph11}>
                      <div className={styles.div3}>₦16,200</div>
                    </div>
                  </div>
                  <div className={styles.button}>
                    <div className={styles.details}>Details</div>
                    <img className={styles.icon5} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FarmerBookings2;
