import React, { useState } from 'react';
import './Hud.scss';
import StarsAvailable from '../StarsAvailable/StarsAvailable';
import { Button } from '@world-vision/wv360-core-library';
import { useNavigate } from 'react-router-dom';

interface HUDProps {
  visitCount: number;
  raisedAmount?: string;
  children?: React.ReactNode;
  starsAvailable: number;
  starsDonated: number;
  onDonate: () => void;
}

const HUD: React.FC<HUDProps> = ({
  visitCount,
  raisedAmount = '$90000',
  starsAvailable,
  starsDonated,
  onDonate,
}) => {
  const [showSecondHUD, setShowSecondHUD] = useState<boolean>(false);
  const navigate = useNavigate();

  const handleClick = () => {
    setShowSecondHUD(prev => !prev);
  };

  return (
    <>
      <div className="container">
        <div className="hud-container">
          <div className="transparent-box" onClick={handleClick}>
            <div className="raised-info">
              <span className="raised-amount">{raisedAmount}</span>
              <span className="raised-label">Raised</span>
            </div>
            <div className="visit-count-icon-wrapper">
              <span className="visit-count">{visitCount}</span>
              <img className="icon" src="/Dark.png" alt="WVC Icon" />
            </div>
            {showSecondHUD && (
              <div className="hud-box">
                <div className="hud-stats">
                  {/* Stars Available */}
                  <StarsAvailable starsAvailable={starsAvailable} />

                  <div className="divider"></div>

                  {/* Stars Donated */}
                  <div className="hud-stat">
                    <div className="hud-stat-group">
                      <span className="hud-value">{starsDonated}</span>
                      <div className="hud-label">
                        Total Stars <br />
                        Donated
                      </div>
                    </div>
                  </div>

                  <div className="divider"></div>

                  {/* Conversion Rate */}
                  <div className="hud-stat">
                    <div className="hud-value">
                      1 Tab ={' '}
                      <img src="/Union.png" alt="star" className="star-icon" />
                    </div>
                  </div>
                </div>
                <div>
                  <Button
                    mode="primary"
                    size="xl"
                    text="Donate"
                    onClick={() => navigate('/donate')}
                    style={{ marginTop: '2rem', width: '9vw', height: '2vw' }}
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default HUD;
