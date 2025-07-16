import React from 'react';
import Icon from '@components/atoms/Icons';
import { classNames, getModuleClasses } from '@utils/common/classNames';
import Heading from '@radix-styles/atoms/Heading';
import Text from '@radix-styles/atoms/Text';
import Flex from '@radix-styles/atoms/Flex';
import Box from '@radix-styles/atoms/Box';
import { Responsive } from '@radix-ui/themes/dist/cjs/props/prop-def';

import styles from './IconStatement.module.scss';

export interface IconStatementProps {
  backgroundColor?: string;
  backgroundSize?: string;
  backgroundPadding?: string;
  rounded?: boolean;
  iconName: string;
  iconSize?: string;
  iconColor?: string;
  iconStyle?: React.CSSProperties;
  heading?: string;
  description?: string;
  className?: string;
  gapX?: Responsive<'0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9'>;
  gapY?: Responsive<'0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9'>;
}
export const IconStatement = ({
  backgroundColor,
  backgroundSize,
  backgroundPadding,
  rounded,
  iconName,
  iconSize,
  iconColor,
  iconStyle,
  heading,
  description,
  className,
  gapX = '3',
  gapY = '0',
}: IconStatementProps) => {
  const classes = getModuleClasses(className?.trim(), styles);
  return (
    <Flex
      gapX={gapX}
      gapY={gapY}
      direction="row"
      className={classNames(styles.iconStatementWrapper, classes)}
    >
      <Box className={styles.iconStatementLeft}>
        <Icon
          name={iconName}
          size={iconSize}
          color={iconColor}
          className={styles.iconStatementLeftSpan}
          backgroundColor={backgroundColor}
          backgroundSize={backgroundSize}
          backgroundPadding={backgroundPadding}
          rounded={rounded}
          style={iconStyle}
        />
      </Box>
      <Box className={styles.iconStatementRight}>
        <Heading as="h4">{heading}</Heading>
        {description ? <Text as="p">{description}</Text> : ''}
      </Box>
    </Flex>
  );
};

export default IconStatement;
