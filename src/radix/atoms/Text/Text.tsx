import { TextSize, TextWeight } from '@internal/types/common/style';
import { Text as RadixText, TextProps as Props } from '@radix-ui/themes';
import { getFontStyles } from '@utils/elements/font';
import React, { Fragment, ReactElement } from 'react';
import { useContent } from '@utils/hooks';
import { Config } from '@utils/common/htmlToRadix';
import { hasTags } from '@utils/common/text';

export type TextProps = Omit<Props, 'size' | 'weight'> & {
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
  /**
   * config for the text
   * @property
   */
  config?: TextProps;
};

/**
 * Text component is to apply the text style to the children element.
 *
 * @group Atoms
 * @category Radix Component
 *
 * @param {TextProps} props - The Text props
 * @returns {ReactElement} - Text Component
 */
export const Text = ({
  children,
  size = '3',
  weight = 'regular',
  className,
  config,
  ...props
}: TextProps): ReactElement => {
  const classes = getFontStyles(props, size, weight, className);
  const newProps = { className: classes, ...(props as Props) };

  const defaultTextConfig = {
    size,
    weight,
  };

  const textConfig: Config = {
    textProps: {
      ...(config ?? defaultTextConfig),
    },
  };

  const hasStringAsChildren = typeof children === 'string';
  const { id, newChildren } = useContent(
    hasStringAsChildren ? children : null,
    textConfig
  );

  if (hasStringAsChildren) {
    return (
      <RadixText
        id={id}
        {...newProps}
        asChild={props.asChild || hasTags(children)}
      >
        <Fragment>{newChildren}</Fragment>
      </RadixText>
    );
  }
  return <RadixText {...newProps}>{children}</RadixText>;
};

export default Text;
