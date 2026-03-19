import React, { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './HubDetails.module.css';

const HubDetails = () => {
  const navigate = useNavigate();

  const onBackClick = useCallback(() => {
    navigate('/discover');
  }, [navigate]);

  const onBookNowClick = useCallback(() => {
    navigate('/booking');
  }, [navigate]);

  return (
    <div className={styles.hubDetails}>
      <div className={styles.containerParent}>
        <div className={styles.container}>
          <img 
            className={styles.buttonIcon} 
            alt="Back" 
            onClick={onBackClick} 
            style={{ cursor: 'pointer' }}
          />
          <div className={styles.bookNow}>Hub Details</div>
        </div>
        <div className={styles.hubDetails3}>
          <img className={styles.hubIcon} alt="" />
          <div className={styles.container2}>
            <div className={styles.container3}>
              <div className={styles.container4}>
                <div className={styles.container5}>
                  <div className={styles.container6}>
                    <div className={styles.heading2}>
                      <div className={styles.sunchillHub}>SunChill Hub</div>
                    </div>
                    <div className={styles.container7}>
                      <img className={styles.icon} alt="" />
                      <div className={styles.text}>
                        <div className={styles.ojuelegbaLagos}>Ojuelegba, Lagos</div>
                      </div>
                      <div className={styles.text2}>
                        <div className={styles.div}>•</div>
                      </div>
                      <div className={styles.text3}>
                        <div className={styles.ojuelegbaLagos}>2.3 km</div>
                      </div>
                    </div>
                    <div className={styles.container8}>
                      <div className={styles.container9}>
                        <img className={styles.icon} alt="" />
                        <div className={styles.text4}>
                          <b className={styles.ojuelegbaLagos}>4.8</b>
                        </div>
                      </div>
                      <div className={styles.text5}>
                        <div className={styles.reviews}>(156 reviews)</div>
                      </div>
                      <div className={styles.text6}>
                        <div className={styles.reviews}>Verified</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.paragraph}>
                  <div className={styles.premiumSolarPoweredCold}>Premium solar-powered cold storage facility with 24/7 monitoring and automated temperature control. Ideal for vegetables, fruits, and dairy products.</div>
                </div>
                <div className={styles.staus}>
                  <div className={styles.container10}>
                    <img className={styles.containerIcon} alt="" />
                    <div className={styles.paragraph2}>
                      <div className={styles.solarStatus}>Solar Status</div>
                    </div>
                    <div className={styles.paragraph3}>
                      <b className={styles.good}>Good</b>
                    </div>
                  </div>
                  <div className={styles.container10}>
                    <img className={styles.containerIcon} alt="" />
                    <div className={styles.paragraph4}>
                      <div className={styles.solarStatus}>Temperature</div>
                    </div>
                    <div className={styles.paragraph5}>
                      <b className={styles.c}>4°C</b>
                    </div>
                  </div>
                  <div className={styles.available}>
                    <img className={styles.containerIcon} alt="" />
                    <div className={styles.paragraph6}>
                      <div className={styles.solarStatus}>Available</div>
                    </div>
                    <div className={styles.paragraph7}>
                      <b className={styles.crates}>45 crates</b>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.container12}>
              <div className={styles.container13}>
                <div className={styles.heading3}>
                  <div className={styles.sunchillHub}>Pricing</div>
                </div>
                <div className={styles.container14}>
                  <div className={styles.text7}>
                    <div className={styles.div2}>₦150</div>
                  </div>
                  <div className={styles.text8}>
                    <div className={styles.ojuelegbaLagos}>per crate/day</div>
                  </div>
                </div>
                <div className={styles.paragraph8}>
                  <div className={styles.solarStatus}>No hidden fees • Pay for what you use • Cancel anytime</div>
                </div>
              </div>
            </div>
            <div className={styles.container15}>
              <div className={styles.container16}>
                <div className={styles.heading32}>
                  <div className={styles.sunchillHub}>24-Hour Temperature History</div>
                </div>
                <div className={styles.linechart}>
                  <div className={styles.surface}>
                    <img className={styles.groupIcon} alt="" />
                    <div className={styles.group}>
                      <img className={styles.vectorIcon} alt="" />
                      <div className={styles.group2}>
                        <div className={styles.group3}>
                          <img className={styles.vectorIcon2} alt="" />
                          <div className={styles.div3}>00:00</div>
                        </div>
                        <div className={styles.group4}>
                          <img className={styles.vectorIcon2} alt="" />
                          <div className={styles.div3}>04:00</div>
                        </div>
                        <div className={styles.group5}>
                          <img className={styles.vectorIcon2} alt="" />
                          <div className={styles.div3}>08:00</div>
                        </div>
                        <div className={styles.group6}>
                          <img className={styles.vectorIcon5} alt="" />
                          <div className={styles.div3}>12:00</div>
                        </div>
                        <div className={styles.group7}>
                          <img className={styles.vectorIcon5} alt="" />
                          <div className={styles.div3}>16:00</div>
                        </div>
                        <div className={styles.group8}>
                          <img className={styles.vectorIcon2} alt="" />
                          <div className={styles.div3}>20:00</div>
                        </div>
                        <div className={styles.group9}>
                          <img className={styles.vectorIcon8} alt="" />
                          <div className={styles.div3}>24:00</div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.group10}>
                      <img className={styles.vectorIcon9} alt="" />
                      <div className={styles.group2}>
                        <div className={styles.group12}>
                          <img className={styles.vectorIcon10} alt="" />
                          <div className={styles.div10}>0</div>
                        </div>
                        <div className={styles.group13}>
                          <img className={styles.vectorIcon11} alt="" />
                          <div className={styles.div11}>3</div>
                        </div>
                        <div className={styles.group14}>
                          <img className={styles.vectorIcon10} alt="" />
                          <div className={styles.div10}>6</div>
                        </div>
                        <div className={styles.group15}>
                          <img className={styles.vectorIcon13} alt="" />
                          <div className={styles.div13}>10</div>
                        </div>
                      </div>
                    </div>
                    <img className={styles.groupIcon2} alt="" />
                  </div>
                  <div className={styles.tooltipboundingbox2}>
                    <div className={styles.defaulttooltipcontent2}>
                      <div className={styles.paragraph9}>
                        <div className={styles.div14}>20:00</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.container17}>
                  <div className={styles.paragraph6}>
                    <div className={styles.optimalRange2cContainer}>
                      <b>Optimal Range:</b>
                      <span className={styles.span}>{` `}</span>
                      <span>2°C - 6°C • Stable performance</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.container18}>
              <div className={styles.container19}>
                <div className={styles.heading3}>
                  <div className={styles.sunchillHub}>{`Features & Amenities`}</div>
                </div>
                <div className={styles.container20}>
                  <div className={styles.container21}>
                    <img className={styles.icon} alt="" />
                    <div className={styles.text9}>
                      <div className={styles.temperatureMonitoring}>24/7 Temperature Monitoring</div>
                    </div>
                  </div>
                  <div className={styles.container22}>
                    <img className={styles.icon} alt="" />
                    <div className={styles.text9}>
                      <div className={styles.solarPoweredWith}>Solar Powered with Backup</div>
                    </div>
                  </div>
                  <div className={styles.container23}>
                    <img className={styles.icon} alt="" />
                    <div className={styles.text11}>
                      <div className={styles.ojuelegbaLagos}>Secure Access Control</div>
                    </div>
                  </div>
                  <div className={styles.container24}>
                    <img className={styles.icon} alt="" />
                    <div className={styles.text12}>
                      <div className={styles.ojuelegbaLagos}>Real-time Alerts</div>
                    </div>
                  </div>
                  <div className={styles.container25}>
                    <img className={styles.icon} alt="" />
                    <div className={styles.text13}>
                      <div className={styles.ojuelegbaLagos}>Insurance Coverage</div>
                    </div>
                  </div>
                  <div className={styles.container26}>
                    <img className={styles.icon} alt="" />
                    <div className={styles.text14}>
                      <div className={styles.easyAccess}>Easy Access</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.container27}>
              <div className={styles.container28}>
                <div className={styles.heading3}>
                  <div className={styles.sunchillHub}>Operating Information</div>
                </div>
                <div className={styles.container29}>
                  <div className={styles.container30}>
                    <div className={styles.container31}>
                      <img className={styles.icon} alt="" />
                      <div className={styles.text15}>
                        <div className={styles.ojuelegbaLagos}>Operating Hours</div>
                      </div>
                    </div>
                    <div className={styles.text16}>
                      <b className={styles.ojuelegbaLagos}>24/7</b>
                    </div>
                  </div>
                  <div className={styles.container30}>
                    <div className={styles.container33}>
                      <img className={styles.icon} alt="" />
                      <div className={styles.text15}>
                        <div className={styles.ojuelegbaLagos}>Verified Since</div>
                      </div>
                    </div>
                    <div className={styles.text18}>
                      <b className={styles.ojuelegbaLagos}>Feb 2026</b>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.book}>
              <div className={styles.container34}>
                <div className={styles.paragraph11}>
                  <div className={styles.startingFrom}>Starting from</div>
                </div>
                <div className={styles.paragraph12}>
                  <div className={styles.crateday}>
                    <span className={styles.span2}>₦150</span>
                    <span className={styles.crateday2}>/crate/day</span>
                  </div>
                </div>
              </div>
              <div 
                className={styles.ecocoldPrimaryButtons}
                onClick={onBookNowClick}
                style={{ cursor: 'pointer' }}
              >
                <div className={styles.bookNow}>Book Now</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HubDetails;
