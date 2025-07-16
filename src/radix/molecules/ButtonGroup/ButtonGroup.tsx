import React, { ReactElement } from 'react';
import Button, { ButtonProps } from '@radix-styles/atoms/Button';
import Flex from '@radix-styles/atoms/Flex';
import Box from '@radix-styles/atoms/Box';
import { classNames } from '@utils/common/classNames';

import styles from './ButtonGroup.module.scss';

export interface ButtonGroupProps {
  /**
   * List of buttons to display in the group
   * @default []
   * @property
   */
  data: Array<ButtonProps>;
  /**
   * Determines the layout of buttons
   * @default 'horizontal'
   * @property
   */
  direction?: string;
  /**
   * Custom class name for the button group
   */
  className?: string;
  /**
   * The Button will be disabled if it's true
   * @property
   */
  disabled?: boolean;
}

export const ButtonGroup = ({
  data = [],
  direction = 'horizontal',
  className,
  disabled,
}: ButtonGroupProps): ReactElement => {
  const isVertical = direction === 'vertical';
  const uniqueId = React.useId();
  const getUniqueKey = (index: number) =>
    'button-wrapper-' + index + '-' + uniqueId;

  return (
    <Flex
      className={classNames(styles.buttonGroupContainer, className)}
      direction={isVertical ? 'column' : 'row'}
      display="flex"
      gap="3"
    >
      {data?.map((props: ButtonProps, index: number) => {
        const isDisabled = disabled ?? props.disabled;
        const isIconOnly = !props.text && !!props.icon;
        const classes = classNames(
          styles.buttonWrapper,
          isIconOnly ? styles.iconOnly : undefined
        );
        return (
          <Box asChild key={getUniqueKey(index)} className={classes}>
            <Button {...props} disabled={isDisabled} />
          </Box>
        );
      })}
    </Flex>
  );
};

export default ButtonGroup;
