import React from 'react';
import styles from './ProgressBar.module.scss';
import {
  Progress as RadixProgress,
  ProgressProps as Props,
} from '@radix-ui/themes';
import { classNames, getModuleClasses } from '@utils/common/classNames';
import { getStylesAsCssProperties } from '@utils/common/styles';

/**
 * @interface
 * The Progress bar props type of {@link ProgressBar}
 *
 * @property {Props} props - The props of the Progress bar component
 */
export type ProgressProps = Props;

/**
 *
 * Progress bar component to display the Progress bar.
 *
 * @group Atoms
 * @category Radix Component
 *
 * @param {ProgressProps} props - The Progress bar props
 * @returns {ReactElement} - Progress bar Component
 *
 */

export const ProgressBar = ({ className, color, ...props }: ProgressProps) => {
  const classes = getModuleClasses(className?.trim(), styles);
  return (
    <RadixProgress
      className={classNames(styles.progressBarContainer, classes)}
      style={getStylesAsCssProperties({ '--progressBarColor': color })}
      {...props}
    ></RadixProgress>
  );
};

export default ProgressBar;
