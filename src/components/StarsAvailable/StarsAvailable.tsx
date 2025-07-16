import React from 'react';
import '../HudStats/HudStats.scss';

interface StarsAvailableProps {
  starsAvailable: number;
}
const StarsAvailable: React.FC<StarsAvailableProps> = ({ starsAvailable }) => {
  return (
    <div className="hud-stat">
      <div className="hud-stars-available-wrapper">
        {/* Horizontal container for number + star icon */}
        <div className="number-and-star">
          <span className="hud-visit-count">{starsAvailable}</span>
          <img src="/Dark.png" alt="star" className="star-icon" />
        </div>
        {/* Label underneath both */}
        <div className="hud-label">Stars Available</div>
      </div>
    </div>
  );
};
export default StarsAvailable;
