import React, { useEffect, useRef, useState } from 'react';
import { CalloutProps, CalloutMolecule } from '../Callout';
import { classNames } from '@utils/common/classNames';

import styles from './Toast.module.scss';

/**
 * @interface
 * The props type for {@link ToastMolecule}.
 * And it uses all props from callout molecule
 */
export interface ToastProps extends CalloutProps {
  /**
   *  Horizontal position of the Toast component.
   * @defaultValue `'center'`
   * @property
   */
  xPosition: 'start' | 'center' | 'end';
  /**
   * Horizontal position of the Toast component.
   * @defaultValue `'center'`
   * @property
   */
  yPosition: 'top' | 'bottom';
}
/**
 * ToastMolecule Component - Displays a floating message on the screen.
 *
 * @group Molecules
 * @category UI Components
 *
 * @param {ToastProps} props - The ToastMolecule props.
 * @returns {ReactElement | null} - ToastMolecule Component.
 *
 * @example
 * ```tsx
 * <ToastMolecule
 *   xPosition="center"
 *   yPosition="top"
 *   isVisible={true}
 *   title="Notification"
 * >
 *   This is a toast message!
 * </ToastMolecule>
 * ```
 */
export const ToastMolecule = ({
  xPosition = 'center',
  yPosition = 'top',
  isVisible = false,
  autoHide = false,
  duration = 3000,
  ...props
}: ToastProps) => {
  const [visible, setVisible] = useState(isVisible);
  const [showClass, setShowClass] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const toastTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const classes = classNames(
    styles.toast,
    styles[`toast-x-${xPosition}`],
    styles[`toast-y-${yPosition}`],
    showClass ? styles.show : ''
  );
  const handleToast = (status: boolean) => {
    if (status) {
      setVisible(true);
      toastTimerRef.current = setTimeout(() => {
        setShowClass(status);
      }, 0);
    } else {
      setShowClass(status);
      timerRef.current = setTimeout(() => {
        if (visible) setVisible(false);
      }, 300);
    }
  };

  const removeTimer = () => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }
    if (toastTimerRef.current) {
      clearTimeout(toastTimerRef.current);
      toastTimerRef.current = null;
    }
  };

  useEffect(() => {
    handleToast(isVisible);
    return () => removeTimer();
  }, [isVisible, autoHide, duration]);

  const triggerToast = (status: boolean) => {
    handleToast(status);
  };

  if (!visible) return null;

  return (
    <div className={classes}>
      <CalloutMolecule
        triggerToast={triggerToast}
        className={styles.toast_inner}
        isVisible={visible}
        autoHide={autoHide}
        duration={duration}
        {...props}
      >
        {props.children}
      </CalloutMolecule>
    </div>
  );
};
export default ToastMolecule;
