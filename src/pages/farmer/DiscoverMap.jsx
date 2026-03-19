import React, { useCallback } from 'react';
import styles from './DiscoverMap.module.css';

const DiscoverMap = () => {
  const onButtonContainerClick = useCallback(() => {
    // Add your code here
  }, []);

  return (
    <div className={styles.discoverScreen2}>
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
        <div className={styles.home}>
          <div className={styles.ecocoldIcons}>
            <img className={styles.vectorIcon3} alt="" />
          </div>
          <div className={styles.text}>
            <div className={styles.discover}>Alert</div>
          </div>
        </div>
        <div className={styles.home}>
          <img className={styles.icon} alt="" />
          <div className={styles.text}>
            <div className={styles.searchByLocation}>Bookings</div>
          </div>
        </div>
        <div className={styles.home}>
          <img className={styles.icon} alt="" />
          <div className={styles.text}>
            <div className={styles.discover}>Profile</div>
          </div>
        </div>
      </div>
      <div className={styles.frameParent}>
        <div className={styles.headerWrapper}>
          <div className={styles.header}>
            <div className={styles.headingText}>
              <div className={styles.findStorage}>Find Storage</div>
              <div className={styles.paragraph}>
                <div className={styles.discoverNearbyCold}>Discover nearby cold storage hubs</div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.searchConParent}>
          <div className={styles.searchCon}>
            <div className={styles.textInput}>
              <div className={styles.searchByLocation}>Search by location or hub name...</div>
            </div>
            <div className={styles.ecocoldIcons3}>
              <img className={styles.vectorIcon4} alt="" />
              <img className={styles.vectorIcon5} alt="" />
            </div>
          </div>
          <div className={styles.viewContainer}>
            <div className={styles.button} onClick={onButtonContainerClick}>
              <div className={styles.listView}>List View</div>
            </div>
            <div className={styles.button2}>
              <div className={styles.mapView}>Map View</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiscoverMap;
