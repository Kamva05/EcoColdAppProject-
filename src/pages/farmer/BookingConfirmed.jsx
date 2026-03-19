import React from 'react';
import styles from './BookingConfirmed.module.css';

const BookingConfirmed = () => {
  return (
    <div className={styles.bookingConfirmed}>
      <div className={styles.bookingConfirmedParent}>
        <div className={styles.bookingConfirmed2}>
          <div className={styles.heading1}>
            <div className={styles.bookingConfirmed3}>Booking Confirmed!</div>
          </div>
          <div className={styles.paragraph}>
            <div className={styles.yourColdStorage}>
              Your cold storage has been successfully booked. You'll receive a confirmation SMS shortly.
            </div>
          </div>
        </div>
        <div className={styles.bookingDetails}>
          <div className={styles.bookingDetails2}>
            <div className={styles.container}>
              <div className={styles.heading3}>
                <div className={styles.bookingReference}>Booking Reference</div>
              </div>
              <div className={styles.paragraph2}>
                <div className={styles.sch25422142}>SCH25422142</div>
              </div>
            </div>
            <div className={styles.container2}>
              <div className={styles.heading32}>
                <div className={styles.bookingReference}>Storage Hub</div>
              </div>
              <div className={styles.paragraph3}>
                <div className={styles.sunchillHubOjuelegba}>
                  SunChill Hub - Ojuelegba
                </div>
                <div className={styles.ojuelegbaLagos}>Ojuelegba, Lagos</div>
              </div>
            </div>
            <div className={styles.container3}>
              <div className={styles.heading33}>
                <div className={styles.bookingReference}>Storage Details</div>
              </div>
              <div className={styles.paragraph4}>
                <div className={styles.cratesDays}>10 crates • 7 days</div>
                <div className={styles.vegetables}>vegetables</div>
              </div>
            </div>
            <div className={styles.container4}>
              <div className={styles.heading34}>
                <div className={styles.bookingReference}>Storage Period</div>
              </div>
              <div className={styles.paragraph5}>
                <div className={styles.feb202026Feb}>Feb 20, 2026 - Feb 27, 2026</div>
              </div>
            </div>
            <div className={styles.container5}>
              <div className={styles.heading35}>
                <div className={styles.bookingReference}>Total Paid</div>
              </div>
              <div className={styles.paragraph6}>
                <div className={styles.n10500}>₦10,500</div>
              </div>
            </div>
          </div>
          <div className={styles.actions}>
            <div className={styles.button}>
              <div className={styles.downloadReceipt}>Download Receipt</div>
            </div>
            <div className={styles.button2}>
              <div className={styles.shareBooking}>Share Booking</div>
            </div>
          </div>
        </div>
        <div className={styles.whatsNext}>
          <div className={styles.whatsNext2}>
            <div className={styles.heading36}>
              <div className={styles.whatsNext3}>What's Next?</div>
            </div>
            <div className={styles.container6}>
              <div className={styles.paragraph7}>
                <div className={styles.dropOffYour}>
                  Drop off your produce at the hub before Feb 29, 2026
                </div>
              </div>
              <div className={styles.paragraph8}>
                <div className={styles.monitorTemperature}>
                  Monitor temperature and conditions in real-time
                </div>
              </div>
              <div className={styles.paragraph9}>
                <div className={styles.receiveAiAlerts}>
                  Receive AI alerts if any issues are detected
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.ecocoldPrimaryButtons}>
          <div className={styles.button3}>Go to Dashboard</div>
        </div>
      </div>
    </div>
  );
};

export default BookingConfirmed;
