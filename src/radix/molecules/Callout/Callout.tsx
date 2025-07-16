import React, { useRef, useEffect, useState } from 'react';

import { Callout } from '@radix-ui/themes';
import { Icon, IconProps } from '@components/atoms/Icons/Icon';
import { Responsive } from '@radix-ui/themes/dist/cjs/props/prop-def';
import ButtonGroup, { ButtonGroupProps } from '../ButtonGroup';
import Box from '@radix-styles/atoms/Box';
import { classNames } from '@utils/common/classNames';
import Flex from '@radix-styles/atoms/Flex';

import styles from './Callout.module.scss';

/**
 * @interface
 * The props type of {@link CalloutMolecule}.
 */
export interface CalloutProps {
  /**
   * Show the icon in which direction left or right within the callout component.
   * @defaultValue `true`
   * @property
   */
  leftIcon?: boolean;

  /**
   * Alternate left icon to display instead of the default icon.
   * Provide the icon name or URL.
   * @defaultValue `null`
   * @property
   */
  iconName?: string | null;

  /**
   * Show the close icon in the callout component.
   * @defaultValue `false`
   * @property
   */
  closeIcon?: boolean;

  /**
   * Alternate close icon to display instead of the default close icon.
   * Provide the icon name or URL.
   * @defaultValue `null`
   * @property
   */
  alternateCloseIcon?: string | null;

  /**
   * Title text displayed at the top of the callout.
   * @property
   */
  title: string;

  /**
   * The content or children of the callout.
   * Can accept a string or a ReactNode for rich content.
   * @property
   */
  children: React.ReactNode;

  /**
   * Type of the callout for styling purposes.
   * @defaultValue `success`
   * @property
   */
  type: 'success' | 'error' | 'info' | 'none';

  /**
   * Duration (in milliseconds) before the callout auto-hides.
   * If `null`, the callout will not auto-hide.
   * @defaultValue `3000`
   * @property
   */
  duration?: null | number;

  /**
   * Determines if the callout should auto-hide after the specified duration.
   * @defaultValue `false`
   * @property
   */
  autoHide?: boolean;

  /**
   * Callback function executed when the callout is closed.
   * @property
   */
  closeCallback?: () => void;

  /**
   * Determines if the callout is initially visible.
   * @defaultValue `true`
   * @property
   */
  isVisible: boolean;

  /**
   * Button group props to display action buttons within the callout.
   * @property
   */
  buttons?: ButtonGroupProps;
  /**
   * triggerTaoast function executed when the callout is closed.
   * @property
   */
  triggerToast?: (status: boolean) => void;
  /**
   * Pass the custom class name to apply on the button.
   * @property
   */
  className?: string;
  /**
   * Pass the minWidth of the component
   * @property
   */
  minWidth?: string | Responsive<string>;
  /**
   * Pass the width of the component
   * @property
   */
  width?: string | Responsive<string>;
  /**
   * Pass the maxWidth of the component
   * @property
   */
  maxWidth?: string | Responsive<string>;
  /**
   * Pass the showIcon of the component
   * @defaultValue `false`
   * @property
   */
  showIcon?: boolean;
  /**
   * Pass the iconProps of the component
   * @property
   */
  iconProps?: Omit<IconProps, 'name'> & { name?: string };
  /**
   * Pass the align of the component
   * @defaultValue `stretch`
   * @property
   */
  align?: 'start' | 'center' | 'end' | 'stretch';
  /**
   * Pass the direction of the component
   * @property
   */
  direction?: 'row' | 'column' | 'column-reverse' | 'row-reverse';
  /**
   * Pass the display of the component
   * @property
   */
  display?: 'flex' | 'inline-flex' | 'none';
}

const closeIconProps = {
  size: '16',
  color: '#17191F',
};

/**
 * Primary UI component for displaying messages to users.
 *
 * @group Molecules
 * @category Radix Component
 *
 * @param {CalloutProps} props - The CalloutMolecule props.
 * @returns {ReactElement} - CalloutMolecule Component.
 *
 * @example
 * ```tsx
 * <CalloutMolecule
 *   title="Success!"
 *   type="success"
 *   children="Your action was successful."
 * /> *
 * ```
 */
export const CalloutMolecule = ({
  leftIcon = true,
  iconName,
  closeIcon = false,
  alternateCloseIcon,
  title = '',
  children,
  type = 'success',
  duration = 3000,
  autoHide = false,
  isVisible = true,
  closeCallback,
  buttons,
  className,
  triggerToast,
  width,
  minWidth,
  maxWidth,
  showIcon = false,
  iconProps = {},
  align = 'stretch',
  direction,
  display,
}: CalloutProps) => {
  const defaultIconProps = {
    size: '24',
    color: '#17191F',
    ...iconProps,
  };
  const [visible, setVisible] = useState(isVisible);
  let timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const icons = {
    success: 'icon-circle-check',
    error: 'icon-error',
    info: 'icon-info',
    none: 'icon-info',
  };
  const classes = classNames(
    styles.calloutRoot,
    styles[type],
    className,
    triggerToast ? styles.isToast : '',
    showIcon ? styles.showIcon : ''
  );

  const handleClose = () => {
    if (triggerToast) {
      triggerToast(false);
    } else {
      setVisible(false);
    }
    if (closeCallback) closeCallback();
  };

  useEffect(() => {
    if (visible && autoHide && duration) {
      timerRef.current = setTimeout(handleClose, duration);
    }

    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
        timerRef.current = null;
      }
    };
  }, [visible, autoHide, duration]); // All dependencies are included

  useEffect(() => {
    if (visible) autoClose();
    setVisible(isVisible);
  }, [isVisible]);

  const autoClose = () => {
    if (duration && autoHide) {
      timerRef.current = setTimeout(handleClose, duration);
    }
  };

  if (!visible) return null;

  return (
    <Flex
      justify="center"
      align={align}
      asChild
      display={display}
      className={classes}
      width={width}
      maxWidth={maxWidth}
      minWidth={minWidth}
      direction={direction}
    >
      <Callout.Root>
        <Box className={styles.callout}>
          {showIcon && (
            <Icon
              name={iconName ?? icons[type]}
              {...defaultIconProps}
              style={{ order: leftIcon ? 0 : 1 }}
            />
          )}
          <Box className={styles.contentbox}>
            {title && (
              <Callout.Text
                className={classNames(
                  styles.title,
                  'body-md',
                  'typography-font-weight-semibold'
                )}
              >
                {title}
              </Callout.Text>
            )}
            <Box className="body-sm typography-font-weight-regular">
              {children}
            </Box>
          </Box>
          {closeIcon && (
            <div onClick={handleClose} className={styles.closeIcon}>
              <Icon
                name={alternateCloseIcon ?? 'icon-close'}
                {...closeIconProps}
              />
            </div>
          )}
        </Box>
        {buttons && (
          <Box className={styles.callout_footer}>
            <ButtonGroup {...buttons} />
          </Box>
        )}
      </Callout.Root>
    </Flex>
  );
};

export default CalloutMolecule;
