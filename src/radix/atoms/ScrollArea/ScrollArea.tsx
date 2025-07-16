import React, { CSSProperties, ReactElement } from 'react';
import { ScrollArea as Scroll } from 'radix-ui';
import styles from './ScrollArea.module.scss';
import { classNames } from '@utils/common/classNames';

/**
 * @interface
 * The Scroll Area props type of {@link ScrollArea}
 */
export interface ScrollAreaProps {
  /**
   * The child component to be rendered within the scroll area
   * @property
   */
  children: ReactElement;
  /**
   * Scroll direction: horizontal, vertical, or both
   * @property
   */
  orientation?: 'horizontal' | 'vertical' | 'both';
  /**
   * Scrollbar visibility type: always, auto, hover, or scroll
   * @property
   */
  type?: 'always' | 'auto' | 'hover' | 'scroll';
  /**
   * Size variant for styling purposes
   * @property
   */
  size?: '1' | '2';
  /**
   * Whether to hide the scrollbar
   * @property
   */
  hideScrollbar?: boolean;
  /**
   * Inline styles for the scroll area
   * @property
   */
  style?: CSSProperties;
  /**
   * Optional classname for custom styling
   * @property
   */
  classname?: string;
}

/**
 *
 * A customizable scrollable container that supports horizontal, vertical, or both orientations.
 * Provides different scrollbar visibility options (`always`, `auto`, `hover`, `scroll`) and allows
 * for hiding the scrollbar if desired. Supports custom styling through `classname` and `style` props,
 * as well as size variants for flexible design.
 *
 * Ideal for rendering long lists or content that overflows its container.
 *
 * @group Atoms
 * @category Radix Component
 *
 * @param {ScrollAreaProps} props - The Scroll Area props
 * @returns {ReactElement} - Scroll Area Component
 *
 */
export const ScrollArea = React.forwardRef<HTMLDivElement, ScrollAreaProps>(
  (
    {
      children,
      classname,
      type = 'auto',
      size = '1',
      orientation = 'horizontal',
      hideScrollbar = false,
      ...props
    }: ScrollAreaProps,
    ref
  ): ReactElement => {
    const concatinatedSize = styles[`size-${size}`];
    const hideScroll = hideScrollbar ? styles.hidden : '';

    return (
      <Scroll.Root
        className={classNames(styles.root, classname)}
        type={type}
        ref={ref}
        {...props}
      >
        <Scroll.Viewport className={styles.viewport} tabIndex={0}>
          {children}
        </Scroll.Viewport>
        {orientation !== 'vertical' && (
          <Scroll.Scrollbar
            className={classNames(
              styles.scrollbar,
              concatinatedSize,
              hideScroll
            )}
            orientation="horizontal"
          >
            <Scroll.Thumb className={styles.thumb} />
          </Scroll.Scrollbar>
        )}
        {orientation !== 'horizontal' && (
          <Scroll.Scrollbar
            className={classNames(
              styles.scrollbar,
              concatinatedSize,
              hideScroll
            )}
            orientation="vertical"
          >
            <Scroll.Thumb className={styles.thumb} />
          </Scroll.Scrollbar>
        )}
        {orientation === 'both' && <Scroll.Corner className={styles.corner} />}
      </Scroll.Root>
    );
  }
);

ScrollArea.displayName = 'ScrollArea';

export default ScrollArea;
