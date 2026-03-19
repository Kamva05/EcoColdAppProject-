import React from 'react';
import styles from './Pay3.module.css';

const Pay3 = () => {
  return (
    <div className={styles.pay3}>
      <div className={styles.payHeaderParent}>
        <div className={styles.payHeader}>
          <img className={styles.buttonIcon} alt="" />
          <div className={styles.container}>
            <div className={styles.heading1}>
              <div className={styles.payment}>Payment</div>
            </div>
            <div className={styles.paragraph}>
              <div className={styles.step2Of}>Step 2 of 2</div>
            </div>
          </div>
        </div>
        <div className={styles.payAll3}>
          <div className={styles.pay}>
            <div className={styles.pay2}>
              <div className={styles.container2}>
                <div className={styles.container3}>
                  <div className={styles.heading3}>
                    <div className={styles.bookingSummary}>Booking Summary</div>
                  </div>
                  <div className={styles.container4}>
                    <div className={styles.container5}>
                      <div className={styles.text}>
                        <b className={styles.hub}>Hub</b>
                      </div>
                      <div className={styles.text2}>
                        <div className={styles.hub}>SunChill Hub - Ojuelegba</div>
                      </div>
                    </div>
                    <div className={styles.container5}>
                      <div className={styles.text3}>
                        <b className={styles.hub}>Crates</b>
                      </div>
                      <div className={styles.text4}>
                        <div className={styles.hub}>10</div>
                      </div>
                    </div>
                    <div className={styles.container5}>
                      <div className={styles.text5}>
                        <b className={styles.hub}>Duration</b>
                      </div>
                      <div className={styles.text6}>
                        <div className={styles.hub}>7 days</div>
                      </div>
                    </div>
                    <div className={styles.container5}>
                      <div className={styles.text7}>
                        <b className={styles.hub}>Produce Type</b>
                      </div>
                      <div className={styles.text8}>
                        <div className={styles.hub}>Vegetables</div>
                      </div>
                    </div>
                    <div className={styles.container9}>
                      <div className={styles.text9}>
                        <b className={styles.hub}>Total Amount</b>
                      </div>
                      <div className={styles.text10}>
                        <div className={styles.payment}>₦10,500</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.container10}>
                <div className={styles.container11}>
                  <div className={styles.heading32}>
                    <div className={styles.bookingSummary}>Payment Method</div>
                  </div>
                  <div className={styles.container12}>
                    <div className={styles.button}>
                      <img className={styles.containerIcon} alt="" />
                      <div className={styles.container13}>
                        <div className={styles.paragraph2}>
                          <b className={styles.debitcreditCard}>Debit/Credit Card</b>
                        </div>
                        <div className={styles.paragraph3}>
                          <div className={styles.step2Of}>Visa, Mastercard, Verve</div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.button}>
                      <img className={styles.containerIcon} alt="" />
                      <div className={styles.container13}>
                        <div className={styles.paragraph2}>
                          <b className={styles.hub}>USSD/Bank Transfer</b>
                        </div>
                        <div className={styles.paragraph3}>
                          <div className={styles.step2Of}>Pay with your bank</div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.button3}>
                      <img className={styles.containerIcon} alt="" />
                      <div className={styles.container13}>
                        <div className={styles.paragraph2}>
                          <b className={styles.hub}>Bank Account</b>
                        </div>
                        <div className={styles.paragraph3}>
                          <div className={styles.step2Of}>Direct debit</div>
                        </div>
                      </div>
                      <img className={styles.icon} alt="" />
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.container16}>
                <div className={styles.container17}>
                  <div className={styles.heading33}>
                    <div className={styles.bookingSummary}>Bank Account Details</div>
                  </div>
                  <div className={styles.container18}>
                    <div className={styles.container19}>
                      <div className={styles.paragraph8}>
                        <div className={styles.step2Of}>Bank Name</div>
                      </div>
                      <div className={styles.paragraph9}>
                        <b className={styles.accessBank}>Access Bank</b>
                      </div>
                    </div>
                    <div className={styles.container19}>
                      <div className={styles.paragraph8}>
                        <div className={styles.step2Of}>Account Number</div>
                      </div>
                      <div className={styles.paragraph9}>
                        <b className={styles.accessBank}>0123456789</b>
                      </div>
                    </div>
                    <div className={styles.container19}>
                      <div className={styles.paragraph8}>
                        <div className={styles.step2Of}>Account Name</div>
                      </div>
                      <div className={styles.paragraph9}>
                        <b className={styles.accessBank}>SunChill Services</b>
                      </div>
                    </div>
                  </div>
                  <div className={styles.paragraph14}>
                    <b className={styles.step2Of}>Transfer ₦10,500 to the account above</b>
                  </div>
                </div>
              </div>
              <div className={styles.container22}>
                <img className={styles.icon} alt="" />
                <div className={styles.paragraph15}>
                  <div className={styles.securePaymentYourContainer}>
                    <b>Secure Payment:</b>
                    <span> Your payment information is encrypted and secure. We never store your card details.</span>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.ecocoldPrimaryButtons}>
              <div className={styles.button4}>Pay ₦10,500</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pay3;
