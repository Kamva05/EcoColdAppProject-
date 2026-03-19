import React from 'react';
import styles from './AIAlert.module.css';

const AIAlert = () => {
  return (
    <div className={styles.criticalAiAlert}>
      <div className={styles.containerParent}>
        <div className={styles.container}>
          <div className={styles.containerGroup}>
            <div className={styles.container2}>
              <img className={styles.containerIcon} alt="" />
              <div className={styles.container3}>
                <div className={styles.heading2}>
                  <b className={styles.criticalAlert}>Critical Alert</b>
                </div>
                <div className={styles.paragraph}>
                  <div className={styles.immediateActionRequired}>Immediate Action Required</div>
                </div>
              </div>
            </div>
            <img className={styles.buttonIcon} alt="" />
          </div>
          <div className={styles.container4}>
            <div className={styles.paragraph2}>
              <div className={styles.immediateActionRequired}>Alert ID: ALERT001</div>
            </div>
            <div className={styles.paragraph2}>
              <div className={styles.immediateActionRequired}>Detected at: 2:35 PM</div>
            </div>
          </div>
        </div>
        <div className={styles.alert}>
          <div className={styles.container5}>
            <div className={styles.container6}>
              <div className={styles.container7}>
                <div className={styles.container8}>
                  <img className={styles.containerIcon2} alt="" />
                  <div className={styles.container9}>
                    <div className={styles.heading3}>
                      <b className={styles.tempExceedsSafe}>Temp Exceeds Safe Range</b>
                    </div>
                    <div className={styles.paragraph4}>
                      <div className={styles.sunchillHub}>SunChill Hub - Ojuelegba - Zone 2</div>
                    </div>
                  </div>
                </div>
                <div className={styles.container10}>
                  <div className={styles.container11}>
                    <div className={styles.paragraph5}>
                      <div className={styles.currentTemp}>Current Temp</div>
                    </div>
                    <div className={styles.paragraph6}>
                      <div className={styles.c}>8.5°C</div>
                    </div>
                  </div>
                  <div className={styles.container12}>
                    <div className={styles.paragraph7}>
                      <div className={styles.currentTemp}>Safe Range</div>
                    </div>
                    <div className={styles.paragraph8}>
                      <div className={styles.c2}>2-6°C</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.container13}>
              <div className={styles.container14}>
                <div className={styles.heading3}>
                  <div className={styles.temperatureTrend}>Temperature Trend</div>
                </div>
                <div className={styles.linechart}>
                  <div className={styles.surface}>
                    <img className={styles.groupIcon} alt="" />
                    <div className={styles.group}>
                      <img className={styles.vectorIcon} alt="" />
                      <div className={styles.group2}>
                        <div className={styles.group3}>
                          <img className={styles.vectorIcon2} alt="" />
                          <div className={styles.div}>14:00</div>
                        </div>
                        <div className={styles.group4}>
                          <img className={styles.vectorIcon3} alt="" />
                          <div className={styles.div}>14:15</div>
                        </div>
                        <div className={styles.group5}>
                          <img className={styles.vectorIcon4} alt="" />
                          <div className={styles.div}>14:30</div>
                        </div>
                        <div className={styles.group6}>
                          <img className={styles.vectorIcon2} alt="" />
                          <div className={styles.div}>14:45</div>
                        </div>
                        <div className={styles.group7}>
                          <img className={styles.vectorIcon2} alt="" />
                          <div className={styles.div}>15:00</div>
                        </div>
                        <div className={styles.group8}>
                          <img className={styles.vectorIcon7} alt="" />
                          <div className={styles.div}>15:15</div>
                        </div>
                        <div className={styles.group9}>
                          <img className={styles.vectorIcon8} alt="" />
                          <div className={styles.div}>15:30</div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.group10}>
                      <img className={styles.vectorIcon9} alt="" />
                      <div className={styles.group2}>
                        <div className={styles.group12}>
                          <img className={styles.vectorIcon10} alt="" />
                          <div className={styles.div8}>0</div>
                        </div>
                        <div className={styles.group13}>
                          <img className={styles.vectorIcon11} alt="" />
                          <div className={styles.div9}>3</div>
                        </div>
                        <div className={styles.group14}>
                          <img className={styles.vectorIcon10} alt="" />
                          <div className={styles.div8}>6</div>
                        </div>
                        <div className={styles.group15}>
                          <img className={styles.vectorIcon13} alt="" />
                          <div className={styles.div11}>10</div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.group16}>
                      <img className={styles.vectorIcon14} alt="" />
                      <div className={styles.safeLimit}>Safe Limit</div>
                    </div>
                    <img className={styles.groupIcon2} alt="" />
                  </div>
                  <div className={styles.tooltipboundingbox2}>
                    <div className={styles.defaulttooltipcontent2}>
                      <div className={styles.paragraph9} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.container15}>
              <div className={styles.container16}>
                <div className={styles.heading33}>
                  <div className={styles.temperatureTrend}>Impact Assessment</div>
                </div>
                <div className={styles.container17}>
                  <div className={styles.container18}>
                    <div className={styles.text}>
                      <div className={styles.sunchillHub}>Your Crates at Risk</div>
                    </div>
                    <div className={styles.text2}>
                      <b className={styles.crates}>10 crates</b>
                    </div>
                  </div>
                  <div className={styles.container19}>
                    <div className={styles.text3}>
                      <div className={styles.sunchillHub}>Total Affected</div>
                    </div>
                    <div className={styles.text4}>
                      <b className={styles.crates}>15 crates</b>
                    </div>
                  </div>
                  <div className={styles.container20}>
                    <div className={styles.text5}>
                      <div className={styles.sunchillHub}>Spoilage Risk Level</div>
                    </div>
                    <div className={styles.text6}>
                      <b className={styles.crates}>High</b>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.container21}>
              <div className={styles.heading3}>
                <div className={styles.temperatureTrend}>Recommended Actions</div>
              </div>
              <div className={styles.container22}>
                <div className={styles.button}>
                  <img className={styles.containerIcon3} alt="" />
                  <div className={styles.container23}>
                    <div className={styles.paragraph10}>
                      <b className={styles.crates}>Contact Hub Operator</b>
                    </div>
                    <div className={styles.paragraph11}>
                      <div className={styles.speakDirectlyWith}>Speak directly with the hub manager</div>
                    </div>
                  </div>
                </div>
                <div className={styles.button}>
                  <img className={styles.containerIcon3} alt="" />
                  <div className={styles.container23}>
                    <div className={styles.paragraph10}>
                      <b className={styles.crates}>Relocate Produce</b>
                    </div>
                    <div className={styles.paragraph11}>
                      <div className={styles.speakDirectlyWith}>Move to another available hub</div>
                    </div>
                  </div>
                </div>
                <div className={styles.button}>
                  <img className={styles.containerIcon3} alt="" />
                  <div className={styles.container23}>
                    <div className={styles.paragraph10}>
                      <b className={styles.crates}>Request Pickup</b>
                    </div>
                    <div className={styles.paragraph11}>
                      <div className={styles.speakDirectlyWith}>Emergency pickup service</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.container26}>
              <div className={styles.container27}>
                <img className={styles.containerIcon6} alt="" />
                <div className={styles.container28}>
                  <div className={styles.heading3}>
                    <div className={styles.temperatureTrend}>AI Recommendation</div>
                  </div>
                  <div className={styles.paragraph16}>
                    <div className={styles.basedOnCurrent}>Based on current temperature trends, we recommend contacting the hub operator immediately. If temperature is not controlled within 30 minutes, consider relocating your produce.</div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.container29}>
              <img className={styles.icon} alt="" />
              <div className={styles.paragraph17}>
                <div className={styles.timeSensitiveProlongedContainer}>
                  <b>{`Time Sensitive: `}</b>
                  <span>Prolonged exposure to high temperatures may cause irreversible spoilage. Act now to protect your produce.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIAlert;
