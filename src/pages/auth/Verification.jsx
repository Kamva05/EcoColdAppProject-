import React, { useCallback, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Verification.module.css';

const Verification = () => {
  const navigate = useNavigate();
  const [code, setCode] = useState(['', '', '', '', '', '']);
  const [timeLeft, setTimeLeft] = useState(40);
  const [isVerifying, setIsVerifying] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const onBackClick = useCallback(() => {
    navigate('/login');
  }, [navigate]);

  const handleInputChange = useCallback((index, value) => {
    if (value.length <= 1 && /^\d*$/.test(value)) {
      const newCode = [...code];
      newCode[index] = value;
      setCode(newCode);

      // Auto-focus next input
      if (value && index < 5) {
        const nextInput = document.getElementById(`code-input-${index + 1}`);
        if (nextInput) nextInput.focus();
      }
    }
  }, [code]);

  const handleKeyDown = useCallback((index, e) => {
    if (e.key === 'Backspace' && !code[index] && index > 0) {
      const prevInput = document.getElementById(`code-input-${index - 1}`);
      if (prevInput) prevInput.focus();
    }
  }, [code]);

  const handlePaste = useCallback((e) => {
    const pastedData = e.clipboardData.getData('text').replace(/\D/g, '').slice(0, 6);
    if (pastedData.length === 6) {
      const newCode = pastedData.split('');
      setCode(newCode);
      const lastInput = document.getElementById('code-input-5');
      if (lastInput) lastInput.focus();
    }
  }, []);

  const onVerifyClick = useCallback(async () => {
    const codeString = code.join('');
    if (codeString.length === 6) {
      setIsVerifying(true);
      // Simulate verification
      setTimeout(() => {
        setIsVerifying(false);
        navigate('/farmer-dashboard');
      }, 1500);
    } else {
      alert('Please enter a complete 6-digit code');
    }
  }, [code, navigate]);

  const onResendClick = useCallback(() => {
    setTimeLeft(40);
    setCode(['', '', '', '', '', '']);
    // Simulate resend
    alert('Verification code resent to +2348012345678');
  }, []);

  return (
    <div className={styles.verification}>
      <div className={styles.otpVerificationScreen}>
        <div className={styles.container}>
          <img 
            className={styles.buttonIcon} 
            alt="Back" 
            onClick={onBackClick} 
            style={{ cursor: 'pointer' }}
          />
        </div>
        <img className={styles.containerIcon} alt="" />
        <div className={styles.container2}>
          <div className={styles.heading1}>
            <div className={styles.enterCode}>Enter Code</div>
          </div>
          <div className={styles.paragraph}>
            <div className={styles.weSentA}>We sent a code to</div>
          </div>
          <div className={styles.paragraph2}>
            <img className={styles.icon} alt="" />
            <div className={styles.div}>+2348012345678</div>
          </div>
        </div>
        <div className={styles.container3}>
          <div className={styles.container4}>
            <div className={styles.container5}>
              {code.map((digit, index) => (
                <input
                  key={index}
                  id={`code-input-${index}`}
                  className={styles.phoneInput}
                  type="text"
                  maxLength="1"
                  value={digit}
                  onChange={(e) => handleInputChange(index, e.target.value)}
                  onKeyDown={(e) => handleKeyDown(index, e)}
                  onPaste={handlePaste}
                  style={{
                    border: digit ? '2px solid #5b9f2d' : '1px solid #ccc',
                    width: '48px',
                    height: '56px',
                    fontSize: '24px',
                    textAlign: 'center',
                    borderRadius: '8px',
                    outline: 'none'
                  }}
                />
              ))}
            </div>
            <div className={styles.paragraph3}>
              <div className={styles.weSentA}>
                <span>
                  <span>Code expires in</span>
                  <span className={styles.span}> </span>
                </span>
                <b className={styles.s} style={{ color: timeLeft < 10 ? '#d32f2f' : '#2e2d2d' }}>
                  {timeLeft}s
                </b>
              </div>
            </div>
            <div 
              className={styles.ecocoldPrimaryButtons} 
              onClick={onVerifyClick}
              style={{ 
                opacity: isVerifying ? 0.7 : 1,
                cursor: isVerifying ? 'not-allowed' : 'pointer'
              }}
            >
              <div className={styles.div}>{isVerifying ? 'Verifying...' : 'Verify & Login'}</div>
              <div className={styles.oluronkeMarthasIcons}>
                <img className={styles.vectorIcon} alt="" />
                <img className={styles.vectorIcon2} alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.container6}>
          <img className={styles.icon2} alt="" />
          <div className={styles.container7}>
            <div className={styles.paragraph4}>
              <b className={styles.checkYourPhone}>Check your phone</b>
            </div>
            <div className={styles.paragraph5}>
              <div className={styles.enterThe6Digit}>Enter the 6-digit code from SMS</div>
            </div>
          </div>
        </div>
        <div className={styles.container8}>
          <div 
            className={styles.resendText}
            onClick={onResendClick}
            style={{ 
              cursor: 'pointer',
              color: timeLeft > 0 ? '#888a86' : '#5b9f2d',
              textDecoration: timeLeft > 0 ? 'none' : 'underline'
            }}
          >
            {timeLeft > 0 ? `Resend code in ${timeLeft}s` : 'Resend code'}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Verification;
