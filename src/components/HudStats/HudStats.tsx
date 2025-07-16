import React from 'react';
import './HudStats.scss';
import StarsAvailable from '../StarsAvailable/StarsAvailable';
import { Button } from '@world-vision/wv360-core-library';
import { useNavigate } from 'react-router-dom';

interface HudStatsProps {
  starsAvailable: number;
  starsDonated: number;
  onDonate: () => void;
}

const HudStats: React.FC<HudStatsProps> = ({
  starsAvailable,
  starsDonated,
  onDonate,
}) => {
  const navigate = useNavigate();

  return (
    <div className="hud-box">
      <div className="hud-stats">
        {/* Stars Available */}
        <StarsAvailable starsAvailable={starsAvailable} />

        <div className="divider"></div>

        {/* Stars Donated */}
        <div className="hud-stat">
          <div className="hud-stat-group">
            <span className="hud-value">{starsDonated}</span>
            <div className="hud-label">Total Stars Donated</div>
          </div>
        </div>

        <div className="divider"></div>

        {/* Conversion Rate */}
        <div className="hud-stat">
          <div className="hud-value">
            1 Tab ={' '}
            <img src="/Conversion.svg" alt="star" className="star-icon" />
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
  );
};

export default HudStats;
