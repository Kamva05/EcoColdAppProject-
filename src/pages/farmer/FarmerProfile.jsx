import React, { useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './FarmerProfile.module.css';
import avatarImage from '/assets/images/source_Happy Farmer.png';
import ecoColdLogo from '/assets/images/EcoCold Logo 1.png';

const FarmerProfile = () => {
  const navigate = useNavigate();
  const [pushNotifications, setPushNotifications] = useState(true);
  const [smsAlerts, setSmsAlerts] = useState(false);

  const handleHomeClick = useCallback(() => {
    navigate('/farmer-dashboard');
  }, [navigate]);

  const handleDiscoverClick = useCallback(() => {
    navigate('/discover');
  }, [navigate]);

  const handleAlertClick = useCallback(() => {
    navigate('/ai-alert');
  }, [navigate]);

  const handleBookingsClick = useCallback(() => {
    navigate('/farmer-bookings1');
  }, [navigate]);

  const handleEditProfileClick = useCallback(() => {
    // Navigate to edit profile page
    console.log('Edit Profile clicked');
  }, []);

  const handlePhoneNumberClick = useCallback(() => {
    // Copy phone number to clipboard
    navigator.clipboard.writeText('+234 801 234 5678');
    alert('Phone number copied to clipboard');
  }, []);

  const handleEmailClick = useCallback(() => {
    // Open email client
    window.location.href = 'mailto:john.adebayo@email.com';
  }, []);

  const handleLocationClick = useCallback(() => {
    // Open in maps
    window.open('https://maps.google.com/?q=Lagos, Nigeria', '_blank');
  }, []);

  const handlePushNotificationsToggle = useCallback(() => {
    setPushNotifications(!pushNotifications);
  }, [pushNotifications]);

  const handleSmsAlertsToggle = useCallback(() => {
    setSmsAlerts(!smsAlerts);
  }, [smsAlerts]);

  const handlePaymentMethodsClick = useCallback(() => {
    navigate('/pay1');
  }, [navigate]);

  const handleSecurityPrivacyClick = useCallback(() => {
    // Navigate to security settings
    console.log('Security & Privacy clicked');
  }, []);

  const handleHelpCenterClick = useCallback(() => {
    // Navigate to help center
    console.log('Help Center clicked');
  }, []);

  const handleContactSupportClick = useCallback(() => {
    // Navigate to contact support
    console.log('Contact Support clicked');
  }, []);

  const handleSwitchViewClick = useCallback(() => {
    // Switch to operator view
    console.log('Switch to Hub Operator View clicked');
  }, []);

  const handleLogoutClick = useCallback(() => {
    // Handle logout
    console.log('Logout clicked');
    navigate('/choice');
  }, [navigate]);

  return (
    <div className={styles.farmerProfile}>
      <div className={styles.profile}>
        <div className={styles.profile2}>
          <div className={styles.heading1}>
            <div className={styles.profile3}>Profile</div>
          </div>
          <div className={styles.paragraph}>
            <div className={styles.manageYourAccount}>Manage your account settings</div>
          </div>
        </div>
        <div className={styles.editProfile}>
          <div className={styles.container}>
            <div className={styles.container2}>
              <div className={styles.ecocoldAvatar}>
                <div className={styles.avatarPlain} />
                <img className={styles.avatarImageIcon} alt="" />
                <div className={styles.online}>
                  <div className={styles.oluronkeMarthasIcons}>
                    <img className={styles.vectorIcon} alt="" />
                  </div>
                </div>
              </div>
              <div className={styles.container3}>
                <div className={styles.heading2}>
                  <div className={styles.aishaAhmed}>Aisha Ahmed</div>
                </div>
                <div className={styles.paragraph2}>
                  <div className={styles.memberSinceJanuary}>Member since January 2026</div>
                </div>
              </div>
            </div>
            <div 
              className={styles.ecocoldPrimaryButtons}
              onClick={handleEditProfileClick}
              style={{ cursor: 'pointer' }}
            >
              <div className={styles.button}>Edit Profile</div>
            </div>
          </div>
        </div>
        <div className={styles.contact}>
          <div className={styles.container4}>
            <div className={styles.heading3}>
              <b className={styles.manageYourAccount}>Contact Information</b>
            </div>
          </div>
          <div className={styles.container5}>
            <div 
              className={styles.button2}
              onClick={handlePhoneNumberClick}
              style={{ cursor: 'pointer' }}
            >
              <div className={styles.container6}>
                <img className={styles.containerIcon} alt="" />
                <div className={styles.container7}>
                  <div className={styles.heading3}>
                    <div className={styles.phoneNumber}>Phone Number</div>
                  </div>
                  <div className={styles.paragraph4}>
                    <div className={styles.div}>+234 801 234 5678</div>
                  </div>
                </div>
              </div>
              <img className={styles.icon} alt="" />
            </div>
            <div 
              className={styles.button3}
              onClick={handleEmailClick}
              style={{ cursor: 'pointer' }}
            >
              <div className={styles.container8}>
                <img className={styles.containerIcon} alt="" />
                <div className={styles.container7}>
                  <div className={styles.heading3}>
                    <div className={styles.phoneNumber}>Email Address</div>
                  </div>
                  <div className={styles.paragraph4}>
                    <div className={styles.div}>john.adebayo@email.com</div>
                  </div>
                </div>
              </div>
              <img className={styles.icon} alt="" />
            </div>
            <div 
              className={styles.button4}
              onClick={handleLocationClick}
              style={{ cursor: 'pointer' }}
            >
              <div className={styles.container10}>
                <img className={styles.containerIcon} alt="" />
                <div className={styles.container7}>
                  <div className={styles.heading3}>
                    <div className={styles.phoneNumber}>Location</div>
                  </div>
                  <div className={styles.paragraph4}>
                    <div className={styles.div}>Lagos, Nigeria</div>
                  </div>
                </div>
              </div>
              <img className={styles.icon} alt="" />
            </div>
          </div>
        </div>
        <div className={styles.setting}>
          <div className={styles.container4}>
            <div className={styles.heading3}>
              <b className={styles.phoneNumber}>Settings</b>
            </div>
          </div>
          <div className={styles.container13}>
            <div className={styles.button5}>
              <div className={styles.container14}>
                <img className={styles.containerIcon} alt="" />
                <div className={styles.paragraph9}>
                  <div className={styles.phoneNumber}>Push Notifications</div>
                </div>
              </div>
              <div 
                className={styles.primitivebutton}
                onClick={handlePushNotificationsToggle}
                style={{ cursor: 'pointer' }}
              >
                <div 
                  className={`${styles.primitivespan} ${pushNotifications ? styles.active : ''}`}
                />
              </div>
            </div>
            <div className={styles.button5}>
              <div className={styles.container15}>
                <img className={styles.containerIcon} alt="" />
                <div className={styles.paragraph9}>
                  <div className={styles.phoneNumber}>SMS Alerts</div>
                </div>
              </div>
              <div 
                className={styles.primitivebutton}
                onClick={handleSmsAlertsToggle}
                style={{ cursor: 'pointer' }}
              >
                <div 
                  className={`${styles.primitivespan} ${smsAlerts ? styles.active : ''}`}
                />
              </div>
            </div>
            <div 
              className={styles.button7}
              onClick={handlePaymentMethodsClick}
              style={{ cursor: 'pointer' }}
            >
              <div className={styles.container16}>
                <img className={styles.containerIcon} alt="" />
                <div className={styles.paragraph11}>
                  <div className={styles.phoneNumber}>Payment Methods</div>
                </div>
              </div>
              <img className={styles.icon} alt="" />
            </div>
            <div 
              className={styles.button8}
              onClick={handleSecurityPrivacyClick}
              style={{ cursor: 'pointer' }}
            >
              <div className={styles.container17}>
                <img className={styles.containerIcon} alt="" />
                <div className={styles.paragraph9}>
                  <div className={styles.phoneNumber}>{`Security & Privacy`}</div>
                </div>
              </div>
              <img className={styles.icon} alt="" />
            </div>
          </div>
        </div>
        <div className={styles.container18}>
          <div className={styles.container4}>
            <div className={styles.heading3}>
              <b className={styles.phoneNumber}>Support</b>
            </div>
          </div>
          <div className={styles.container20}>
            <div 
              className={styles.button9}
              onClick={handleHelpCenterClick}
              style={{ cursor: 'pointer' }}
            >
              <div className={styles.container21}>
                <img className={styles.containerIcon} alt="" />
                <div className={styles.paragraph9}>
                  <div className={styles.phoneNumber}>Help Center</div>
                </div>
              </div>
              <img className={styles.icon} alt="" />
            </div>
            <div 
              className={styles.button10}
              onClick={handleContactSupportClick}
              style={{ cursor: 'pointer' }}
            >
              <div className={styles.container22}>
                <img className={styles.containerIcon} alt="" />
                <div className={styles.paragraph9}>
                  <div className={styles.phoneNumber}>Contact Support</div>
                </div>
              </div>
              <img className={styles.icon} alt="" />
            </div>
          </div>
        </div>
        <div 
          className={styles.button11}
          onClick={handleSwitchViewClick}
          style={{ cursor: 'pointer' }}
        >
          <img className={styles.icon} alt="" />
          <div className={styles.text}>
            <div className={styles.switchToHub}>Switch to Hub Operator View</div>
          </div>
        </div>
        <div 
          className={styles.button12}
          onClick={handleLogoutClick}
          style={{ cursor: 'pointer' }}
        >
          <img className={styles.icon} alt="" />
          <div className={styles.text2}>
            <div className={styles.logOut}>Log Out</div>
          </div>
        </div>
        <div className={styles.text3}>
          <div className={styles.ecocoldV100}>EcoCold v1.0.0</div>
        </div>
      </div>
      <div className={styles.bNav}>
        <div className={styles.home} onClick={handleHomeClick}>
          <div className={styles.ecocoldIcons}>
            <img className={styles.vectorIcon2} alt="" />
            <img className={styles.vectorIcon3} alt="" />
          </div>
          <div className={styles.text4}>
            <div className={styles.discover}>Home</div>
          </div>
        </div>
        <div className={styles.dis} onClick={handleDiscoverClick}>
          <img className={styles.icon} alt="" />
          <div className={styles.text4}>
            <div className={styles.discover}>Discover</div>
          </div>
        </div>
        <div className={styles.dis} onClick={handleAlertClick}>
          <div className={styles.ecocoldIcons}>
            <img className={styles.vectorIcon4} alt="" />
          </div>
          <div className={styles.text4}>
            <div className={styles.discover}>Alert</div>
          </div>
        </div>
        <div className={styles.dis} onClick={handleBookingsClick}>
          <img className={styles.icon} alt="" />
          <div className={styles.text4}>
            <div className={styles.bookings2}>Bookings</div>
          </div>
        </div>
        <div className={styles.dis}>
          <img className={styles.icon} alt="" />
          <div className={styles.text4}>
            <div className={styles.discover}>Profile</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FarmerProfile;
