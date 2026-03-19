import React, { useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Discover.module.css';

const Discover = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');

  const onHomeClick = useCallback(() => {
    navigate('/farmer-dashboard');
  }, [navigate]);

  const onMapClick = useCallback(() => {
    navigate('/discover-map');
  }, [navigate]);

  const onAlertClick = useCallback(() => {
    navigate('/ai-alert');
  }, [navigate]);

  const onBookingsClick = useCallback(() => {
    navigate('/farmer-bookings1');
  }, [navigate]);

  const onProfileClick = useCallback(() => {
    navigate('/farmer-profile');
  }, [navigate]);

  const onViewDetailsClick = useCallback((hubId) => {
    navigate('/hub-details');
  }, [navigate]);

  const handleSearchChange = useCallback((e) => {
    setSearchQuery(e.target.value);
  }, []);

  const handleSearchSubmit = useCallback((e) => {
    e.preventDefault();
    // Implement search functionality
    console.log('Searching for:', searchQuery);
  }, [searchQuery]);

  return (
    <div className={styles.discoverScreen}>
      <div className={styles.headerParent}>
        <div className={styles.header}>
          <div className={styles.headingText}>
            <div className={styles.findStorage}>Find Storage</div>
            <div className={styles.paragraph}>
              <div className={styles.discoverNearbyCold}>Discover nearby cold storage hubs</div>
            </div>
          </div>
        </div>
        <div className={styles.searchConParent}>
          <div className={styles.searchCon}>
            <form onSubmit={handleSearchSubmit} className={styles.searchForm}>
              <div className={styles.textInput}>
                <input
                  type="text"
                  placeholder="Search by location or hub name..."
                  value={searchQuery}
                  onChange={handleSearchChange}
                  className={styles.searchInput}
                />
              </div>
              <div className={styles.ecocoldIcons}>
                <img className={styles.vectorIcon} alt="" />
                <img className={styles.vectorIcon2} alt="" />
              </div>
            </form>
          </div>
          <div className={styles.viewContainer}>
            <div className={styles.button}>
              <div className={styles.listView}>List View</div>
            </div>
            <div className={styles.button2} onClick={onMapClick}>
              <div className={styles.mapView}>Map View</div>
            </div>
          </div>
          <div className={styles.storagehub}>
            <div className={styles.hubViewCardContainer}>
              <div className={styles.container}>
                <div className={styles.container2}>
                  <div className={styles.container3}>
                    <div className={styles.heading3}>
                      <div className={styles.sunchillHub}>SunChill Hub</div>
                    </div>
                    <div className={styles.container4}>
                      <div className={styles.ecocoldIcons2}>
                        <img className={styles.vectorIcon3} alt="" />
                        <img className={styles.vectorIcon4} alt="" />
                      </div>
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
                  </div>
                  <div className={styles.container5}>
                    <img className={styles.icon} alt="" />
                    <div className={styles.text4}>
                      <div className={styles.ojuelegbaLagos}>4.8</div>
                    </div>
                  </div>
                </div>
                <div className={styles.container6}>
                  <div className={styles.container7}>
                    <img className={styles.icon} alt="" />
                    <div className={styles.text5}>
                      <div className={styles.ojuelegbaLagos}>4°C</div>
                    </div>
                  </div>
                  <div className={styles.container8}>
                    <div className={styles.ecocoldIcons3}>
                      <img className={styles.vectorIcon5} alt="" />
                      <img className={styles.vectorIcon6} alt="" />
                    </div>
                    <div className={styles.text6}>
                      <div className={styles.ojuelegbaLagos}>Good</div>
                    </div>
                  </div>
                  <div className={styles.text7}>
                    <div className={styles.ojuelegbaLagos}>45/100 crates</div>
                  </div>
                </div>
                <div className={styles.container9}>
                  <div className={styles.container10}>
                    <div className={styles.paragraph2}>
                      <div className={styles.startingFrom}>Starting from</div>
                    </div>
                    <div className={styles.paragraph3}>
                      <div className={styles.crateday}>
                        <b>₦150</b>
                        <span className={styles.crateday2}>/crate/day</span>
                      </div>
                    </div>
                  </div>
                  <div 
                    className={styles.ecocoldPrimaryButtons} 
                    onClick={() => onViewDetailsClick('sunchill')}
                  >
                    <div className={styles.bookNow}>View Details</div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.hubViewCardContainer2}>
              <div className={styles.container11}>
                <div className={styles.container2}>
                  <div className={styles.container3}>
                    <div className={styles.heading3}>
                      <div className={styles.sunchillHub}>GreenHarvest Hub</div>
                    </div>
                    <div className={styles.container4}>
                      <img className={styles.icon3} alt="" />
                      <div className={styles.text8}>
                        <div className={styles.ojuelegbaLagos}>Yaba, Lagos</div>
                      </div>
                      <div className={styles.text9}>
                        <div className={styles.div}>•</div>
                      </div>
                      <div className={styles.text10}>
                        <div className={styles.ojuelegbaLagos}>4.1 km</div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.container15}>
                    <img className={styles.icon} alt="" />
                    <div className={styles.text4}>
                      <div className={styles.ojuelegbaLagos}>4.5</div>
                    </div>
                  </div>
                </div>
                <div className={styles.container16}>
                  <div className={styles.container17}>
                    <img className={styles.icon} alt="" />
                    <div className={styles.text5}>
                      <div className={styles.ojuelegbaLagos}>3°C</div>
                    </div>
                  </div>
                  <div className={styles.container18}>
                    <div className={styles.ecocoldIcons3}>
                      <img className={styles.vectorIcon5} alt="" />
                      <img className={styles.vectorIcon6} alt="" />
                    </div>
                    <div className={styles.text6}>
                      <div className={styles.ojuelegbaLagos}>Good</div>
                    </div>
                  </div>
                  <div className={styles.text14}>
                    <div className={styles.ojuelegbaLagos}>12/80 crates</div>
                  </div>
                </div>
                <div className={styles.container19}>
                  <div className={styles.container10}>
                    <div className={styles.paragraph2}>
                      <div className={styles.startingFrom}>Starting from</div>
                    </div>
                    <div className={styles.paragraph5}>
                      <div className={styles.crateday}>
                        <b>₦120</b>
                        <span className={styles.crateday2}>/crate/day</span>
                      </div>
                    </div>
                  </div>
                  <div 
                    className={styles.ecocoldPrimaryButtons} 
                    onClick={() => onViewDetailsClick('greenharvest')}
                  >
                    <div className={styles.bookNow}>View Details</div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.hubViewCardContainer2}>
              <div className={styles.container11}>
                <div className={styles.container2}>
                  <div className={styles.container23}>
                    <div className={styles.heading3}>
                      <div className={styles.sunchillHub}>FreshKeep Hub</div>
                    </div>
                    <div className={styles.container4}>
                      <img className={styles.icon3} alt="" />
                      <div className={styles.text15}>
                        <div className={styles.ojuelegbaLagos}>Surulere, Lagos</div>
                      </div>
                      <div className={styles.text16}>
                        <div className={styles.div}>•</div>
                      </div>
                      <div className={styles.text17}>
                        <div className={styles.ojuelegbaLagos}>5.7 km</div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.container15}>
                    <img className={styles.icon} alt="" />
                    <div className={styles.text4}>
                      <div className={styles.ojuelegbaLagos}>4.2</div>
                    </div>
                  </div>
                </div>
                <div className={styles.container6}>
                  <div className={styles.container7}>
                    <img className={styles.icon} alt="" />
                    <div className={styles.text5}>
                      <div className={styles.ojuelegbaLagos}>5°C</div>
                    </div>
                  </div>
                  <div className={styles.container28}>
                    <div className={styles.ecocoldIcons3}>
                      <img className={styles.vectorIcon5} alt="" />
                      <img className={styles.vectorIcon6} alt="" />
                    </div>
                    <div className={styles.text20}>
                      <div className={styles.medium}>Medium</div>
                    </div>
                  </div>
                  <div className={styles.text21}>
                    <div className={styles.ojuelegbaLagos}>28/60 crates</div>
                  </div>
                </div>
                <div className={styles.container9}>
                  <div className={styles.container30}>
                    <div className={styles.paragraph6}>
                      <div className={styles.startingFrom}>Starting from</div>
                    </div>
                    <div className={styles.paragraph7}>
                      <div className={styles.crateday}>
                        <b>₦100</b>
                        <span className={styles.crateday2}>/crate/day</span>
                      </div>
                    </div>
                  </div>
                  <div 
                    className={styles.ecocoldPrimaryButtons} 
                    onClick={() => onViewDetailsClick('freshkeep')}
                  >
                    <div className={styles.bookNow}>View Details</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.bNav}>
        <div className={styles.home} onClick={onHomeClick}>
          <div className={styles.ecocoldIcons6}>
            <img className={styles.vectorIcon11} alt="" />
            <img className={styles.vectorIcon12} alt="" />
          </div>
          <div className={styles.text22}>
            <div className={styles.ojuelegbaLagos}>Home</div>
          </div>
        </div>
        <div className={styles.dis}>
          <img className={styles.icon9} alt="" />
          <div className={styles.text22}>
            <div className={styles.ojuelegbaLagos}>Discover</div>
          </div>
        </div>
        <div className={styles.bookings} onClick={onAlertClick}>
          <div className={styles.ecocoldIcons6}>
            <img className={styles.vectorIcon13} alt="" />
          </div>
          <div className={styles.text22}>
            <div className={styles.ojuelegbaLagos}>Alert</div>
          </div>
        </div>
        <div className={styles.bookings} onClick={onBookingsClick}>
          <img className={styles.icon9} alt="" />
          <div className={styles.text22}>
            <div className={styles.searchByLocation}>Bookings</div>
          </div>
        </div>
        <div className={styles.bookings} onClick={onProfileClick}>
          <img className={styles.icon9} alt="" />
          <div className={styles.text22}>
            <div className={styles.ojuelegbaLagos}>Profile</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Discover;
