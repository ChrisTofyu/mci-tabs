import React, { ReactElement } from 'react';

import { classNames, getModuleClasses } from '@utils/common/classNames';
import Text from '@radix-styles/atoms/Text';

import styles from './TextCaption.module.scss';
import { TextSize, TextWeight } from '@internal/types/common/style';

/**
 * @interface
 * The TextCaptionProps type of {@link TextCaption}.
 */
export interface TextCaptionProps {
  /**
   * The messages to be shown, it can be a string or an array of strings
   * @property
   */
  messages?: string | string[] | null;
  /**
   * The mode of the text caption to show the success or error messages
   * @property
   */
  mode?: 'success' | 'error';
  /**
   * The size of the text caption
   * @property
   */
  size?: TextSize;
  /**
   * The weight of the text caption
   * @property
   */
  weight?: TextWeight;
}

/**
 * TextCaption component to show the success or error messages
 *
 * @group Atoms
 * @category Component
 *
 * @param {TextCaptionProps} props - The TextCaption props
 * @returns {ReactElement} - TextCaption Component
 */
export const TextCaption = ({
  messages,
  mode = 'error',
  size = '2',
  weight = 'regular',
}: TextCaptionProps): ReactElement | null => {
  const newClasses = getModuleClasses(mode, styles);
  if (!messages) {
    return null;
  }
  const captions = typeof messages == 'string' ? [messages] : messages;
  return (
    <div className={classNames(styles.textCaption, newClasses)}>
      {captions.map((caption: string, index: number) => (
        <Text size={size} weight={weight} key={caption + '-' + index}>
          {caption}
          <br />
        </Text>
      ))}
    </div>
  );
};

export default TextCaption;
