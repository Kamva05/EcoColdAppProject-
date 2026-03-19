import React, { useCallback } from 'react';
import styles from './OperatorsViewBookings2.module.css';

const OperatorsViewBookings2 = () => {
  const onPrimitivebuttonContainerClick = useCallback(() => {
    // Add your code here
  }, []);

  return (
    <div className={styles.operatorsViewBookings2}>
      <div className={styles.containerParent}>
        <div className={styles.container}>
          <div className={styles.heading1}>
            <div className={styles.myBookings}>My Bookings</div>
          </div>
          <div className={styles.paragraph}>
            <div className={styles.trackAndManage}>
              Track and manage your storage
            </div>
          </div>
        </div>
        <div className={styles.activeBooking}>
          <div className={styles.container2}>
            <div className={styles.container3}>
              <div className={styles.heading1}>
                <b className={styles.b}>2</b>
              </div>
              <div className={styles.paragraph3}>
                <div className={styles.active}>Active</div>
              </div>
            </div>
            <div className={styles.container4}>
              <div className={styles.heading1}>
                <b className={styles.b}>1</b>
              </div>
              <div className={styles.paragraph3}>
                <div className={styles.active}>Upcoming</div>
              </div>
            </div>
            <div className={styles.container5}>
              <div className={styles.heading1}>
                <b className={styles.b}>1</b>
              </div>
              <div className={styles.paragraph7}>
                <div className={styles.active}>Completed</div>
              </div>
            </div>
          </div>
          <div className={styles.upcoming2}>
            <div className={styles.tabList}>
              <div className={styles.primitivebutton}>
                <div className={styles.active2}>Active</div>
              </div>
              <div className={styles.primitivebutton2}>
                <div className={styles.active2}>Upcoming</div>
              </div>
              <div
                className={styles.primitivebutton3}
                onClick={onPrimitivebuttonContainerClick}
              >
                <div className={styles.active2}>Completed</div>
              </div>
            </div>
            <div className={styles.container6}>
              <div className={styles.container7}>
                <div className={styles.container8}>
                  <div className={styles.container9}>
                    <div className={styles.heading3}>
                      <b className={styles.freshkeepHub}>FreshKeep Hub</b>
                    </div>
                    <div className={styles.container10}>
                      <img className={styles.icon} alt="" />
                      <div className={styles.text}>
                        <div className={styles.surulereLagos}>Surulere, Lagos</div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.text2}>
                    <div className={styles.upcoming4}>upcoming</div>
                  </div>
                </div>
                <div className={styles.container11}>
                  <div className={styles.container12}>
                    <img className={styles.containerIcon} alt="" />
                    <div className={styles.container13}>
                      <div className={styles.paragraph8}>
                        <div className={styles.surulereLagos}>Crates</div>
                      </div>
                      <div className={styles.paragraph9}>
                        <b className={styles.b4}>8</b>
                      </div>
                    </div>
                  </div>
                  <div className={styles.container14}>
                    <img className={styles.containerIcon} alt="" />
                    <div className={styles.container15}>
                      <div className={styles.paragraph8}>
                        <div className={styles.active}>Duration</div>
                      </div>
                      <div className={styles.paragraph9}>
                        <b className={styles.b4}>Feb 20 - Feb 25</b>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.container16}>
                  <div className={styles.container17}>
                    <div className={styles.paragraph12}>
                      <div className={styles.active}>Total Cost</div>
                    </div>
                    <div className={styles.paragraph13}>
                      <b className={styles.b5}>₦4,000</b>
                    </div>
                  </div>
                  <div className={styles.button}>
                    <div className={styles.details}>Details</div>
                    <img className={styles.icon2} alt="" />
                  </div>
                </div>
              </div>
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
          <div className={styles.text3}>
            <div className={styles.discover}>Home</div>
          </div>
        </div>
        <div className={styles.home}>
          <div className={styles.ecocoldIcons}>
            <img className={styles.vectorIcon3} alt="" />
          </div>
          <div className={styles.text3}>
            <div className={styles.discover}>Alert</div>
          </div>
        </div>
        <div className={styles.home}>
          <img className={styles.icon3} alt="" />
          <div className={styles.text3}>
            <div className={styles.monitor2}>Monitor</div>
          </div>
        </div>
        <div className={styles.bookings}>
          <img className={styles.icon3} alt="" />
          <div className={styles.text3}>
            <div className={styles.bookings2}>Bookings</div>
          </div>
        </div>
        <div className={styles.home}>
          <img className={styles.icon3} alt="" />
          <div className={styles.text3}>
            <div className={styles.discover}>Profile</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OperatorsViewBookings2;