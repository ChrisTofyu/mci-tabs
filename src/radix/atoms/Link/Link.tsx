import React, { ReactElement } from 'react';
import { Link as RadixLink, LinkProps as Props } from '@radix-ui/themes';
import { classNames } from '@utils/common/classNames';

import styles from './Link.module.scss';
import { AnalyticsHandler } from '@utils/Analytics';

/**
 * @interface
 * The Link props type of {@link Link}
 *
 * @property {Props} props - The props of the Link component
 */
export interface LinkProps extends Props {
  /**
   * Name that represents link the tag that will be used for the internal logic such as analytics, etc.
   * @property
   */
  name?: string;
  /**
   * ignoreHref as true, when the href is not passed or empty,
   * will display the children as a normal text/element with the link component along with its styles.
   * @default true
   * @property
   */
  ignoreHref?: boolean;
  /**
   * When the link is only for displaying purpose, i.e, the href is not passed or empty, this will be helpfule to idetify when the trackClick (analytics) callback supposed to call.
   * @property
   */
  targetHref?: string;
  /**
   * Custom click event handler.
   * This function is triggered when the link is clicked.
   *
   * @param {React.MouseEvent<HTMLAnchorElement>} data - The click event object.
   * @property
   */
  onClick?: (data: React.MouseEvent<HTMLAnchorElement>) => void;
}

/**
 * Link component is to apply the link style to the children element.
 *
 * When passed a valid or non empty href string value, it will display as a anchor link with its styles and behaviour,
 * (or) else it will display as a normal text with its link styles
 *
 * @group Atoms
 * @category Radix Component
 *
 * @param {LinkProps} props - The Link props
 * @returns {ReactElement} - Link Component
 */
export const Link = ({
  name = '',
  children,
  tabIndex = 0,
  className,
  href,
  ignoreHref = false,
  targetHref = '',
  onClick,
  ...props
}: LinkProps): ReactElement => {
  const link = href?.trim() ? href : undefined;
  const { trackClick } = AnalyticsHandler();

  if (!link && ignoreHref) {
    return children as ReactElement;
  }
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const target = link ?? targetHref;
    const targetName = typeof children === 'string' ? children : name;

    if (link || targetHref) {
      trackClick({
        target,
        name: targetName,
        type: 'link',
        eventDetails: 'link click',
      });
    }
    if (onClick) onClick(e);
  };
  return (
    <RadixLink
      href={link}
      tabIndex={tabIndex}
      className={classNames(styles.link, 'body-md', className)}
      onClick={handleClick}
      {...props}
    >
      {children}
    </RadixLink>
  );
};

export default Link;
