import React, { ReactElement } from 'react';
import { Avatar, Badge } from '@radix-ui/themes';
import { CrossCircledIcon } from '@radix-ui/react-icons';

import styles from './Tag.module.scss';
import Text from '../Text';

/**
 * @interface
 * The Tag props type of {@link Tag}
 */
export interface TagProps {
  /**
   * Pass the text label to display for the tag.
   * @defaultValue `Text`
   * @property
   */
  text?: string;

  /**
   * Pass the mode to change the tag's appearance.
   * @defaultValue `primary`
   * @property
   */
  mode?: string;

  /**
   * Enable the element's click event if it is true.
   * @property
   */
  isClickable?: boolean;

  /**
   * Display the avatar (circled) image if it is true and iconUrl is available;
   * otherwise, the fallback value will be visible.
   * @property
   */
  showAvatar?: boolean;

  /**
   * Display the icon on the left side of the text if it is true.
   * @property
   */
  showIcon?: boolean;

  /**
   * Pass a valid image URL or filepath to display the avatar image.
   * @property
   */
  iconUrl?: string;
}

/**
 * Tag component to display the tag with required information such as text, icon, and avatar.
 *
 * @group Atoms
 * @category Component
 *
 * @param {TagProps} props - The Tag props
 * @returns {ReactElement} - Tag Component
 *
 * @example
 * ```
 * <Tag text="Text" showAvatar={true} mode="secondary" />
 * ```
 */
export const Tag = ({
  isClickable,
  showIcon,
  showAvatar,
  iconUrl,
  text = 'Text',
  mode = 'default',
}: TagProps): ReactElement => {
  return (
    <div
      className={styles.tagComp}
      style={{ pointerEvents: isClickable ? 'auto' : 'none' }}
    >
      <Badge
        style={{
          paddingInline: showAvatar ? '4px 12px' : '8px 12px',
          borderRadius: '20px',
          cursor: isClickable ? 'pointer' : 'unset',
          width: 'auto',
          maxWidth: '100%',
          height: '32px',
          paddingBlock: 0,
        }}
        className={styles[mode]}
        tabIndex={0}
      >
        {showIcon && <CrossCircledIcon />}
        {showAvatar && (
          <Avatar
            radius="full"
            src={iconUrl}
            fallback={text.slice(0, 2) || 'AB'}
            size="1"
          />
        )}
        <Text truncate className={styles.tagText}>
          {text}
        </Text>
      </Badge>
    </div>
  );
};

export default Tag;
