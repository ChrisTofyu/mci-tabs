import React from 'react';
import styles from './PieChart.module.scss';
import { classNames } from '@utils/common/classNames';

export interface DonationImpactProps {
  value: number; // percentage
  description: string; // replaces title
  color: string;
  size?: '1' | '2' | '3'; // "1" = 80px, "2" = 160px, "3" = 320px
}

export interface PieChartProps {
  data: DonationImpactProps;
  className?: string;
}

export const PieChart = ({ data, className }: PieChartProps) => {
  const { value, description, color, size = '1' } = data;

  const radius = 50;
  const strokeWidth = 25;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference * (1 - value / 100);

  // Reverse size mapping: "1" = size3 (80px), "2" = size2 (160px), "3" = size1 (320px)
  const sizeClassMap = {
    '1': 'size3',
    '2': 'size2',
    '3': 'size1',
  };
  const appliedSize = sizeClassMap[size];

  const wrapperClass = classNames(
    styles.chartWrapper,
    styles[appliedSize],
    className
  );
  const labelClass = classNames(styles.chartLabel, styles[appliedSize]);

  const truncatedDescription =
    description.length > 40
      ? description.slice(0, 40).trim() + '…'
      : description;

  return (
    <div className={wrapperClass}>
      <div className={styles.chartCircleWrapper}>
        <svg width="100%" height="100%" viewBox="0 0 140 140">
          <circle
            cx="70"
            cy="70"
            r={radius}
            stroke="#eee"
            strokeWidth={strokeWidth}
            fill="none"
          />
          <circle
            cx="70"
            cy="70"
            r={radius}
            stroke={color}
            strokeWidth={strokeWidth}
            fill="none"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            strokeLinecap="butt"
            transform="rotate(-90 70 70)"
          />
        </svg>

        <div className={labelClass}>
          <div>
            <strong>{value}%</strong>
          </div>
          <p>{truncatedDescription}</p>
        </div>
      </div>
    </div>
  );
};

export default PieChart;
