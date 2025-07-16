import React from 'react';
import {
  PieChart,
  DonationImpactProps,
} from '../../molecules/PieChart/PieChart';
import Link from '@radix-styles/atoms/Link';
import styles from './PieChartBlock.module.scss';
import { classNames } from '@utils/common/classNames';

export interface PieChartBlockProps {
  data: DonationImpactProps[]; // Data for the pie charts
  heading?: string; // Optional heading for the block
  subheading?: string; // Optional subheading for the block
  className?: string; // Optional additional class name for styling
  linkUrl?: string; // URL for the link section
  linkDescription?: string; // Description for the link section
}

export const PieChartBlock = ({
  data,
  heading,
  subheading,
  className,
  linkUrl,
  linkDescription,
}: PieChartBlockProps) => {
  if (data.length === 0) {
    return <p>No data available</p>;
  }

  return (
    <div className={classNames(styles.container, className)}>
      {/* Heading and Subheading Block */}
      <div className={styles.headingBlock}>
        {heading && <h2 className={styles.heading}>{heading}</h2>}
        <p className={styles.subheading}>{subheading || ''}</p>{' '}
        {/* Conditionally render subheading */}
      </div>

      {/* Chart Display Wrapper */}
      <div
        className={classNames(
          styles.chartWrapper,
          data.length === 1 ? styles.singleChart : ''
        )}
      >
        {data.map((chartData, index) => (
          <div key={index} className={styles.chartCard}>
            <PieChart data={chartData} className={styles.chart} />
          </div>
        ))}
      </div>

      {/* Link section */}
      {linkUrl && linkDescription && (
        <p className={styles.disclaimer}>
          <Link href={linkUrl} className={styles.reportLink} target="_blank">
            {linkDescription}
          </Link>
        </p>
      )}
    </div>
  );
};

export default PieChartBlock;
