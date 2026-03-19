import React from 'react';
import styles from './NewOperatorDashboard.module.css';

const NewOperatorDashboard = () => {
  return (
    <div className={styles.newOperatorDashboard}>
      <div className={styles.containerParent}>
        <div className={styles.container}>
          <div className={styles.container2}>
            <div className={styles.heading1}>
              <div className={styles.hubDashboard}>Hub Dashboard</div>
            </div>
            <div className={styles.paragraph}>
              <div className={styles.sunchillHub}>SunChill Hub</div>
            </div>
          </div>
          <img className={styles.buttonIcon} alt="" />
        </div>
        <div className={styles.hubDash}>
          <div className={styles.container3}>
            <div className={styles.container4}>
              <div className={styles.container5}>
                <img className={styles.containerIcon} alt="" />
                <div className={styles.paragraph2}>
                  <div className={styles.activeFarmers}>Active Farmers</div>
                </div>
                <div className={styles.paragraph3}>
                  <div className={styles.div}>0</div>
                </div>
              </div>
            </div>
            <div className={styles.container6}>
              <div className={styles.container7}>
                <img className={styles.containerIcon2} alt="" />
                <div className={styles.paragraph4}>
                  <div className={styles.todaysRevenue}>Today's Revenue</div>
                </div>
                <div className={styles.paragraph5}>
                  <div className={styles.div2}>₦0</div>
                </div>
              </div>
              <div className={styles.container4}>
                <div className={styles.container7}>
                  <img className={styles.containerIcon2} alt="" />
                  <div className={styles.paragraph4}>
                    <div className={styles.activeFarmers}>Capacity Used</div>
                  </div>
                  <div className={styles.paragraph5}>
                    <div className={styles.div3}>0%</div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.container10}>
              <div className={styles.container11}>
                <div className={styles.heading4}>
                  <div className={styles.storageCapacity}>Storage Capacity</div>
                </div>
              </div>
              <div className={styles.container12}>
                <div className={styles.container13}>
                  <div className={styles.container14}>
                    <div className={styles.text}>
                      <div className={styles.sunchillHub}>Occupied: 0 crates</div>
                    </div>
                    <div className={styles.text2}>
                      <b className={styles.sunchillHub}>0%</b>
                    </div>
                  </div>
                  <div className={styles.primitivediv}>
                    <div className={styles.container15} />
                  </div>
                </div>
                <div className={styles.container16}>
                  <div className={styles.container17}>
                    <div className={styles.paragraph8}>
                      <div className={styles.activeFarmers}>Occupied</div>
                    </div>
                    <div className={styles.paragraph9}>
                      <div className={styles.div4}>0</div>
                    </div>
                  </div>
                  <div className={styles.container18}>
                    <div className={styles.paragraph8}>
                      <div className={styles.activeFarmers}>Available</div>
                    </div>
                    <div className={styles.paragraph11}>
                      <div className={styles.div4}>100</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.container19}>
              <div className={styles.container20}>
                <div className={styles.heading4}>
                  <div className={styles.storageCapacity}>System Health</div>
                </div>
              </div>
              <div className={styles.container21}>
                <div className={styles.container22}>
                  <div className={styles.container23}>
                    <img className={styles.icon} alt="" />
                    <div className={styles.text3}>
                      <div className={styles.todaysRevenue}>Temperature</div>
                    </div>
                  </div>
                  <div className={styles.paragraph12}>
                    <div className={styles.c}>4.2°C</div>
                  </div>
                  <div className={styles.paragraph8}>
                    <div className={styles.activeFarmers}>Safe Range</div>
                  </div>
                </div>
                <div className={styles.container24}>
                  <div className={styles.container23}>
                    <img className={styles.icon} alt="" />
                    <div className={styles.text4}>
                      <div className={styles.todaysRevenue}>Solar Charge</div>
                    </div>
                  </div>
                  <div className={styles.paragraph14}>
                    <div className={styles.c}>80%</div>
                  </div>
                  <div className={styles.paragraph8}>
                    <div className={styles.activeFarmers}>Good Status</div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.container26}>
              <div className={styles.container27}>
                <div className={styles.heading43}>
                  <b className={styles.storageCapacity}>System Alerts</b>
                </div>
              </div>
              <div className={styles.paragraph16}>
                <div className={styles.sunchillHub}>No Alerts</div>
              </div>
            </div>
            <div className={styles.container26}>
              <div className={styles.container27}>
                <div className={styles.heading43}>
                  <b className={styles.storageCapacity}>Recent </b>
                </div>
              </div>
              <div className={styles.paragraph16}>
                <div className={styles.sunchillHub}>No Recent Activities</div>
              </div>
              <div className={styles.button}>
                <img className={styles.icon3} alt="" />
                <div className={styles.discoverHubsNear}>
                  Discover Hubs Near
                </div>
              </div>
            </div>
            <div className={styles.container30}>
              <div className={styles.container31}>
                <div className={styles.container32}>
                  <div className={styles.paragraph18}>
                    <div className={styles.totalRevenueThis}>
                      Total Revenue (This Month)
                    </div>
                  </div>
                  <div className={styles.paragraph19}>
                    <b className={styles.b2}>₦0</b>
                  </div>
                </div>
                <img className={styles.containerIcon4} alt="" />
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
            <div className={styles.text5}>
              <div className={styles.todaysRevenue}>Home</div>
            </div>
          </div>
          <div className={styles.dis}>
            <div className={styles.ecocoldIcons}>
              <img className={styles.vectorIcon3} alt="" />
            </div>
            <div className={styles.text5}>
              <div className={styles.todaysRevenue}>Alert</div>
            </div>
          </div>
          <div className={styles.dis}>
            <img className={styles.icon} alt="" />
            <div className={styles.text5}>
              <div className={styles.monitor2}>Monitor</div>
            </div>
          </div>
          <div className={styles.dis}>
            <img className={styles.icon} alt="" />
            <div className={styles.text5}>
              <div className={styles.bookings2}>Bookings</div>
            </div>
          </div>
          <div className={styles.dis}>
            <img className={styles.icon} alt="" />
            <div className={styles.text5}>
              <div className={styles.todaysRevenue}>Profile</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewOperatorDashboard;