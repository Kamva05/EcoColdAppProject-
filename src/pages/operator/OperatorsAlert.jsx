import React from 'react';
import styles from './OperatorsAlert.module.css';

const OperatorsAlert = () => {
  return (
    <div className={styles.operatorsAlert}>
      <div className={styles.containerParent}>
        <div className={styles.container}>
          <div className={styles.critical}>
            <div className={styles.containerGroup}>
              <img className={styles.containerIcon} alt="" />
              <img className={styles.buttonIcon} alt="" />
            </div>
            <div className={styles.heading1}>
              <div className={styles.systemAlert}>SYSTEM ALERT!</div>
            </div>
            <div className={styles.paragraph}>
              <div className={styles.systemAlert}>Critical Issue Detected</div>
            </div>
          </div>
        </div>
        <div className={styles.frameParent}>
          <div className={styles.containerContainer}>
            <img className={styles.containerIcon2} alt="" />
            <div className={styles.container2}>
              <div className={styles.paragraph2}>
                <div className={styles.alertType}>Alert Type</div>
              </div>
              <div className={styles.paragraph3}>
                <b className={styles.temperatureRising}>Temperature Rising</b>
              </div>
            </div>
          </div>
          <div className={styles.container3}>
            <div className={styles.container4}>
              <div className={styles.container5}>
                <div className={styles.container6}>
                  <img className={styles.containerIcon2} alt="" />
                  <div className={styles.container7}>
                    <div className={styles.paragraph4}>
                      <div className={styles.currentTemp}>Current Temp</div>
                    </div>
                    <div className={styles.paragraph5}>
                      <b className={styles.c}>8.5°C</b>
                    </div>
                  </div>
                </div>
                <div className={styles.container8}>
                  <div className={styles.paragraph6}>
                    <b className={styles.rising}>↑ Rising</b>
                  </div>
                </div>
              </div>
              <div className={styles.container5}>
                <div className={styles.container10}>
                  <div className={styles.paragraph7}>
                    <div className={styles.safeRange}>Safe Range</div>
                  </div>
                  <div className={styles.paragraph8}>
                    <div className={styles.c4c}>2°C - 4°C</div>
                  </div>
                </div>
                <div className={styles.container11}>
                  <div className={styles.paragraph7}>
                    <div className={styles.overBy}>Over by</div>
                  </div>
                  <div className={styles.paragraph10}>
                    <b className={styles.c2}>+4.5°C</b>
                  </div>
                </div>
              </div>
              <div className={styles.container12}>
                <div className={styles.container13}>
                  <img className={styles.containerIcon2} alt="" />
                  <div className={styles.container14}>
                    <div className={styles.paragraph11}>
                      <div className={styles.currentTemp}>Solar Battery</div>
                    </div>
                    <div className={styles.paragraph12}>
                      <b className={styles.c}>45%</b>
                    </div>
                  </div>
                </div>
                <div className={styles.container15}>
                  <div className={styles.paragraph6}>
                    <b className={styles.rising}>Low</b>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.container16}>
            <div className={styles.paragraph2}>
              <div className={styles.affectedStorageUnits}>
                Affected Storage Units
              </div>
            </div>
            <div className={styles.container17}>
              <div className={styles.container18}>
                <div className={styles.paragraph15}>
                  <div className={styles.div}>3</div>
                </div>
                <div className={styles.paragraph16}>
                  <div className={styles.overBy}>Units</div>
                </div>
              </div>
              <div className={styles.container19}>
                <div className={styles.paragraph15}>
                  <div className={styles.kg}>850kg</div>
                </div>
                <div className={styles.paragraph16}>
                  <div className={styles.overBy}>Produce</div>
                </div>
              </div>
              <div className={styles.container20}>
                <div className={styles.paragraph15}>
                  <div className={styles.div}>12</div>
                </div>
                <div className={styles.paragraph16}>
                  <div className={styles.overBy}>Farmers</div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.container21}>
            <div className={styles.container22}>
              <div className={styles.container23} />
              <div className={styles.paragraph21}>
                <div className={styles.detected5Minutes}>
                  Detected 5 minutes ago
                </div>
              </div>
            </div>
            <div className={styles.paragraph22}>
              <div className={styles.currentTemp}>3:45 PM</div>
            </div>
          </div>
          <div className={styles.container24}>
            <div className={styles.button}>
              <img className={styles.icon} alt="" />
              <div className={styles.text}>
                <b className={styles.callTechnician}>Call Technician</b>
              </div>
            </div>
            <div className={styles.button2}>
              <img className={styles.icon2} alt="" />
              <div className={styles.text2}>
                <div className={styles.viewMonitoringDashboard}>
                  View Monitoring Dashboard
                </div>
              </div>
            </div>
            <div className={styles.button3}>
              <img className={styles.icon2} alt="" />
              <div className={styles.text3}>
                <div className={styles.manualSystemCheck}>
                  Manual System Check
                </div>
              </div>
            </div>
          </div>
          <div className={styles.container25}>
            <div className={styles.container26}>
              <img className={styles.icon4} alt="" />
              <div className={styles.container27}>
                <div className={styles.paragraph23}>
                  <div className={styles.urgentActionRequired}>
                    Urgent Action Required
                  </div>
                </div>
                <div className={styles.paragraph24}>
                  <div className={styles.contactTechnicianImmediately}>
                    Contact technician immediately to prevent produce spoilage
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.container28}>
            <img className={styles.icon5} alt="" />
            <div className={styles.container29}>
              <div className={styles.paragraph25}>
                <b className={styles.whatToDo}>What to do:</b>
              </div>
              <div className={styles.paragraph26}>
                <div className={styles.callTechnicianRed}>
                  1. Call technician (red button)
                </div>
                <div className={styles.checkSystemManually}>
                  2. Check system manually
                </div>
                <div className={styles.notifyAffectedFarmers}>
                  3. Notify affected farmers
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
          <div className={styles.text4}>
            <div className={styles.discover}>Home</div>
          </div>
        </div>
        <div className={styles.dis}>
          <div className={styles.ecocoldIcons}>
            <img className={styles.vectorIcon3} alt="" />
          </div>
          <div className={styles.text4}>
            <div className={styles.discover}>Alert</div>
          </div>
        </div>
        <div className={styles.home}>
          <img className={styles.icon2} alt="" />
          <div className={styles.text4}>
            <div className={styles.monitor2}>Monitor</div>
          </div>
        </div>
        <div className={styles.home}>
          <img className={styles.icon2} alt="" />
          <div className={styles.text4}>
            <div className={styles.bookings2}>Bookings</div>
          </div>
        </div>
        <div className={styles.home}>
          <img className={styles.icon2} alt="" />
          <div className={styles.text4}>
            <div className={styles.discover}>Profile</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OperatorsAlert;