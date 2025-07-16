import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Image } from '@world-vision/wv360-core-library';
import { Button } from '@world-vision/wv360-core-library';
import CalloutMolecule from '@radix-styles/molecules/Callout';
import Calendar from '../components/Calendar/Calendar';
import Hud from '../components/Hud/Hud';

import './HomePage.css';

const HomePage: React.FC = () => {
  const [showPrivacyNotice, setShowPrivacyNotice] = useState(true);
  const navigate = useNavigate();

  return (
    <>
      {/* Overlay + Callout */}
      {showPrivacyNotice && (
        <>
          {/* Overlay
          <div
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              width: '100vw',
              height: '100vh',
              backgroundColor: 'rgba(0, 0, 0, 0.6)',
              zIndex: 9998,
            }}
          /> */}
          {/* Callout */}
          <div
            style={{
              position: 'fixed',
              top: '10vh',
              left: '50%',
              transform: 'translateX(-50%)',
              zIndex: 9999,
              maxWidth: '600px',
              width: '90vw',
              boxSizing: 'border-box', // Ensures padding doesn't push width
              overflow: 'hidden',
              padding: '2rem',
              margin: '0.5rem',
              display: 'flex',
              alignContent: 'center',
              justifyContent: 'center',
            }}
          >
            {/* <CalloutMolecule
              type="info"
              title="Privacy Notice"
              leftIcon={true}
              showIcon={true}
              closeIcon={true}
              isVisible={showPrivacyNotice}
              closeCallback={() => setShowPrivacyNotice(false)}
            >
              <div
                style={{
                  lineHeight: '1.0',
                  fontSize: '0.95rem',
                  padding: '0.5rem',
                  justifyContent: 'center',
                }}
              >
                <p>
                  If you have an ad blocker, please consider whitelisting our
                  site. Ad revenue is what allows us to support children in need
                  through your tabs.
                </p>
                <br />
                <p>
                  We do not collect, store, or track any personal data, browsing
                  history, or usage information. The extension operates entirely
                  on your local browser and does not transmit any information to
                  external servers or third parties.
                </p>
                <br />
                <p>
                  If you have any questions or concerns, feel free to contact us
                  at{' '}
                  <a href="mailto:digital_platform@worldvision.ca">
                    digital_platform@worldvision.ca
                  </a>
                  .
                </p>
              </div>
            </CalloutMolecule> */}
          </div>
        </>
      )}
      <div className="app-background"></div>
      <Image
        src="/Mono.png"
        alt="Logo"
        fallbackSrc="/Mark.svg"
        width="10vw"
        height="10vh"
        style={{
          zIndex: 10,
          position: 'relative',
          marginTop: '50px',
          marginLeft: '75vw',
        }}
      />
      <div>
        <Hud
          visitCount={1234}
          starsDonated={18}
          starsAvailable={4}
          onDonate={() => {
            window.location.href = '/donate'; // Navigate to the donate page
          }}
        >
          <Button
            text="Donate"
            mode="brand" // Optional - if "brand" is styled in your theme
            size="lg"
            onClick={() => navigate('/donate')}
          />
        </Hud>
      </div>
    </>
  );
};

export default HomePage;
