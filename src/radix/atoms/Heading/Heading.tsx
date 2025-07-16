import React, { ReactElement } from 'react';
import styles from './Heading.module.scss';
import {
  Heading as RadixHeading,
  HeadingProps as Props,
} from '@radix-ui/themes';
import { classNames } from '@utils/common/classNames';
import { getStylesAsCssProperties } from '@utils/common/styles';
import { getFontStyles } from '@utils/elements/font';
import { TextSize, TextWeight } from '@internal/types/common/style';
import { useContent } from '@utils/hooks';

/**
 * @interface
 * The heading props type of {@link Heading}
 *
 * @property {Props} props - The props of the Heading component
 */
export type HeadingProps = Omit<Props, 'size' | 'weight'> & {
  /**
   * The size of the text
   * @property
   */
  size?: TextSize | null;
  /**
   * The weight of the text
   * @property
   */
  weight?: TextWeight | null;
};

/**
 *
 * Heading component to display the Heading.
 *
 * @group Atoms
 * @category Radix Component
 *
 * @param {HeadingProps} props - The Heading props
 * @returns {ReactElement} - Heading Component
 *
 */
export const Heading = ({
  children,
  className,
  color,
  size = '6',
  weight = 'regular',
  style,
  ...props
}: HeadingProps): ReactElement => {
  const headingStyles = getStylesAsCssProperties({
    '--HeadingColor': color,
    ...style,
  });
  const classes = getFontStyles(props, size, weight, className, styles);
  const headingClassName = classNames(styles.headingContainer, classes);
  const newProps = { className: headingClassName, ...(props as Props) };

  const hasStringAsChildren = typeof children === 'string';
  const { id, newChildren } = useContent(hasStringAsChildren ? children : null);

  if (hasStringAsChildren) {
    return (
      <RadixHeading id={id} style={headingStyles} {...newProps}>
        {newChildren}
      </RadixHeading>
    );
  }

  return (
    <RadixHeading style={headingStyles} {...newProps}>
      {children}
    </RadixHeading>
  );
};

export default Heading;
