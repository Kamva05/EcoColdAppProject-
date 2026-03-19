import React, { useCallback } from 'react';
import styles from './Monitoring.module.css';
import TemperatureChart from '../../components/charts/TemperatureChart';
import SolarChart from '../../components/charts/SolarChart';

const Monitoring = () => {
  const onHomeContainerClick = useCallback(() => {
    // Add your code here
  }, []);

  return (
    <div className={styles.monitoring}>
      <div className={styles.containerParent}>
        <div className={styles.container}>
          <div className={styles.heading1}>
            <div className={styles.aiMonitoring}>AI Monitoring</div>
          </div>
          <div className={styles.paragraph}>
            <div className={styles.realTimeStorageHealth}>
              Real-time storage health & alerts
            </div>
          </div>
        </div>
        <div className={styles.containerGroup}>
          <div className={styles.container2}>
            <div className={styles.heading2}>
              <b className={styles.activeBookings}>Active Bookings</b>
            </div>
            <div className={styles.container3}>
              <div className={styles.container4}>
                <div className={styles.container5}>
                  <div className={styles.container6}>
                    <div className={styles.heading3}>
                      <div className={styles.activeBookings}>
                        SunChill Hub - Ojuelegba
                      </div>
                    </div>
                    <div className={styles.paragraph2}>
                      <div className={styles.crates}>10 crates</div>
                    </div>
                  </div>
                  <div className={styles.text}>
                    <div className={styles.lowRisk}>low risk</div>
                  </div>
                </div>
                <div className={styles.container7}>
                  <div className={styles.container8}>
                    <img className={styles.containerIcon} alt="" />
                    <div className={styles.paragraph3}>
                      <div className={styles.crates}>Temp</div>
                    </div>
                    <div className={styles.paragraph4}>
                      <b className={styles.c}>4.2°C</b>
                    </div>
                  </div>
                  <div className={styles.container9}>
                    <img className={styles.containerIcon} alt="" />
                    <div className={styles.paragraph5}>
                      <div className={styles.crates}>Solar</div>
                    </div>
                    <div className={styles.paragraph6}>
                      <b className={styles.lowRisk}>Good</b>
                    </div>
                  </div>
                  <div className={styles.container10}>
                    <img className={styles.containerIcon} alt="" />
                    <div className={styles.paragraph3}>
                      <div className={styles.crates}>Days Left</div>
                    </div>
                    <div className={styles.paragraph8}>
                      <b className={styles.c}>4</b>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.container3}>
              <div className={styles.container12}>
                <div className={styles.container13}>
                  <div className={styles.container14}>
                    <div className={styles.heading3}>
                      <div className={styles.activeBookings}>
                        GreenStore Facility
                      </div>
                    </div>
                    <div className={styles.paragraph2}>
                      <div className={styles.crates}>5 crates</div>
                    </div>
                  </div>
                  <div className={styles.text2}>
                    <div className={styles.lowRisk}>medium risk</div>
                  </div>
                </div>
                <div className={styles.container15}>
                  <div className={styles.container16}>
                    <img className={styles.containerIcon} alt="" />
                    <div className={styles.paragraph3}>
                      <div className={styles.crates}>Temp</div>
                    </div>
                    <div className={styles.paragraph11}>
                      <b className={styles.c}>5.8°C</b>
                    </div>
                  </div>
                  <div className={styles.container16}>
                    <img className={styles.containerIcon} alt="" />
                    <div className={styles.paragraph3}>
                      <div className={styles.crates}>Solar</div>
                    </div>
                    <div className={styles.paragraph13}>
                      <b className={styles.c}>Good</b>
                    </div>
                  </div>
                  <div className={styles.container16}>
                    <img className={styles.containerIcon} alt="" />
                    <div className={styles.paragraph3}>
                      <div className={styles.crates}>Days Left</div>
                    </div>
                    <div className={styles.paragraph15}>
                      <b className={styles.c}>4</b>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.container19}>
            <div className={styles.container20}>
              <div className={styles.heading4}>
                <img className={styles.icon} alt="" />
                <div className={styles.hourTemperatureTrend}>
                  24-Hour Temperature Trend
                </div>
              </div>
            </div>
            <div className={styles.container21}>
              <TemperatureChart />
            </div>
          </div>
          <div className={styles.container23}>
            <div className={styles.container24}>
              <div className={styles.heading42}>
                <img className={styles.icon} alt="" />
                <div className={styles.hourTemperatureTrend}>
                  Solar Energy Performance
                </div>
              </div>
            </div>
            <div className={styles.container25}>
              <SolarChart />
            </div>
          </div>
          <div className={styles.container29}>
            <div className={styles.container30}>
              <img className={styles.containerIcon7} alt="" />
              <div className={styles.container31}>
                <div className={styles.heading33}>
                  <div className={styles.aiRecommendation}>AI Recommendation</div>
                </div>
                <div className={styles.paragraph23}>
                  <div className={styles.allMonitoredStorage}>
                    All monitored storage is within optimal range. Consider
                    extending booking at Ojuelegba hub to maximize savings.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.bNav}>
        <div className={styles.home} onClick={onHomeContainerClick}>
          <div className={styles.ecocoldIcons}>
            <img className={styles.vectorIcon28} alt="" />
            <img className={styles.vectorIcon29} alt="" />
          </div>
          <div className={styles.text3}>
            <div className={styles.lowRisk}>Home</div>
          </div>
        </div>
        <div className={styles.dis}>
          <div className={styles.ecocoldIcons}>
            <img className={styles.vectorIcon30} alt="" />
          </div>
          <div className={styles.text3}>
            <div className={styles.lowRisk}>Alert</div>
          </div>
        </div>
        <div className={styles.dis}>
          <img className={styles.icon3} alt="" />
          <div className={styles.text3}>
            <div className={styles.monitor2}>Monitor</div>
          </div>
        </div>
        <div className={styles.dis}>
          <img className={styles.icon3} alt="" />
          <div className={styles.text3}>
            <div className={styles.c}>Bookings</div>
          </div>
        </div>
        <div className={styles.dis}>
          <img className={styles.icon3} alt="" />
          <div className={styles.text3}>
            <div className={styles.lowRisk}>Profile</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Monitoring;