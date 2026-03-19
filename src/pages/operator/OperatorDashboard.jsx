import React, { useCallback } from 'react';
import styles from './OperatorDashboard.module.css';

const OperatorDashboard = () => {
  const onDisContainerClick = useCallback(() => {
    // Add your code here
  }, []);

  return (
    <div className={styles.existingOperatorDashboard}>
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
                  <div className={styles.div}>12</div>
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
                  <div className={styles.div2}>₦8,500</div>
                </div>
              </div>
              <div className={styles.container4}>
                <div className={styles.container7}>
                  <img className={styles.containerIcon2} alt="" />
                  <div className={styles.paragraph4}>
                    <div className={styles.activeFarmers}>Capacity Used</div>
                  </div>
                  <div className={styles.paragraph5}>
                    <div className={styles.div3}>73%</div>
                  </div>
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
                    <div className={styles.sunchillHub}>Occupied: 73 crates</div>
                  </div>
                  <div className={styles.text2}>
                    <b className={styles.sunchillHub}>73%</b>
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
                    <div className={styles.div4}>73</div>
                  </div>
                </div>
                <div className={styles.container18}>
                  <div className={styles.paragraph8}>
                    <div className={styles.activeFarmers}>Available</div>
                  </div>
                  <div className={styles.paragraph11}>
                    <div className={styles.div4}>27</div>
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
                  <div className={styles.c}>78%</div>
                </div>
                <div className={styles.paragraph8}>
                  <div className={styles.activeFarmers}>Good Status</div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.container26}>
            <div className={styles.container11}>
              <div className={styles.heading4}>
                <div className={styles.storageCapacity}>System Alerts</div>
              </div>
            </div>
            <div className={styles.container28}>
              <div className={styles.container29}>
                <img className={styles.containerIcon4} alt="" />
                <div className={styles.container30}>
                  <div className={styles.container31}>
                    <div className={styles.paragraph16}>
                      <div className={styles.sunchillHub}>Tem exceeding safe range</div>
                    </div>
                    <div className={styles.text5}>
                      <div className={styles.zone2}>Zone 2</div>
                    </div>
                  </div>
                  <div className={styles.paragraph17}>
                    <div className={styles.activeFarmers}>5 min ago</div>
                  </div>
                </div>
              </div>
              <div className={styles.container32}>
                <img className={styles.containerIcon4} alt="" />
                <div className={styles.container33}>
                  <div className={styles.container34}>
                    <div className={styles.paragraph18}>
                      <div className={styles.sunchillHub}>Solar battery at 35% capacity</div>
                    </div>
                  </div>
                  <div className={styles.paragraph17}>
                    <div className={styles.activeFarmers}>15 min ago</div>
                  </div>
                </div>
              </div>
              <div className={styles.container35}>
                <img className={styles.containerIcon4} alt="" />
                <div className={styles.container36}>
                  <div className={styles.container37}>
                    <div className={styles.paragraph20}>
                      <div className={styles.sunchillHub}>New booking request from Aisha A.</div>
                    </div>
                  </div>
                  <div className={styles.paragraph17}>
                    <div className={styles.activeFarmers}>1 hour ago</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.container38}>
            <div className={styles.container11}>
              <div className={styles.container40}>
                <div className={styles.heading44}>
                  <div className={styles.storageCapacity}>Recent Bookings</div>
                </div>
                <div className={styles.button}>
                  <div className={styles.todaysRevenue}>View All</div>
                </div>
              </div>
            </div>
            <div className={styles.container41}>
              <div className={styles.container42}>
                <div className={styles.container33}>
                  <div className={styles.paragraph22}>
                    <div className={styles.sunchillHub}>Aisha Ahmed</div>
                  </div>
                  <div className={styles.paragraph17}>
                    <div className={styles.activeFarmers}>10 crates • Zone A</div>
                  </div>
                </div>
                <div className={styles.text6}>
                  <div className={styles.todaysRevenue}>Active</div>
                </div>
              </div>
              <div className={styles.container44}>
                <div className={styles.container45}>
                  <div className={styles.paragraph22}>
                    <div className={styles.sunchillHub}>Amina Hassan</div>
                  </div>
                  <div className={styles.paragraph17}>
                    <div className={styles.activeFarmers}>5 crates • Zone B</div>
                  </div>
                </div>
                <div className={styles.text7}>
                  <div className={styles.todaysRevenue}>Pending</div>
                </div>
              </div>
              <div className={styles.container42}>
                <div className={styles.container33}>
                  <div className={styles.paragraph22}>
                    <div className={styles.sunchillHub}>Chidi Okafor</div>
                  </div>
                  <div className={styles.paragraph17}>
                    <div className={styles.activeFarmers}>8 crates • Zone A</div>
                  </div>
                </div>
                <div className={styles.text6}>
                  <div className={styles.todaysRevenue}>active</div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.container48}>
            <div className={styles.container49}>
              <div className={styles.container50}>
                <div className={styles.paragraph28}>
                  <div className={styles.totalRevenueThis}>Total Revenue (This Month)</div>
                </div>
                <div className={styles.paragraph29}>
                  <b className={styles.b2}>₦245,000</b>
                </div>
              </div>
              <img className={styles.containerIcon7} alt="" />
            </div>
          </div>
        </div>
        <div className={styles.bNav}>
          <div className={styles.home}>
            <div className={styles.ecocoldIcons}>
              <img className={styles.vectorIcon} alt="" />
              <img className={styles.vectorIcon2} alt="" />
            </div>
            <div className={styles.text9}>
              <div className={styles.todaysRevenue}>Home</div>
            </div>
          </div>
          <div className={styles.dis} onClick={onDisContainerClick}>
            <div className={styles.ecocoldIcons}>
              <img className={styles.vectorIcon3} alt="" />
            </div>
            <div className={styles.text9}>
              <div className={styles.todaysRevenue}>Alert</div>
            </div>
          </div>
          <div className={styles.dis} onClick={onDisContainerClick}>
            <img className={styles.icon} alt="" />
            <div className={styles.text9}>
              <div className={styles.monitor2}>Monitor</div>
            </div>
          </div>
          <div className={styles.dis} onClick={onDisContainerClick}>
            <img className={styles.icon} alt="" />
            <div className={styles.text9}>
              <div className={styles.zone2}>Bookings</div>
            </div>
          </div>
          <div className={styles.prof}>
            <img className={styles.icon} alt="" />
            <div className={styles.text9}>
              <div className={styles.todaysRevenue}>Profile</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OperatorDashboard;
