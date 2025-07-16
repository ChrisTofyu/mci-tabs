import React from 'react';
import { DataList } from '@radix-ui/themes';
import Image from '@components/atoms/Image';
import Icon from '@components/atoms/Icons';
import Box from '@radix-styles/atoms/Box';
import Button from '@radix-styles/atoms/Button';
import Flex from '@radix-styles/atoms/Flex';
import Tag from '@radix-styles/atoms/Tag';
import Text from '@radix-styles/atoms/Text';
import { classNames } from '@utils/common/classNames';

import FallbackImage from '@assets/images/FallbackImage.svg';
import styles from './List.module.scss';

/**
 * Dynamic object representing each list item.
 * Values can be string, number, boolean, null, undefined, or a ReactNode.
 * Keys are flexible based on provided keyMapper.
 */
export interface listItemProps {
  [key: string]: string | number | boolean | null | undefined | React.ReactNode;
}
export interface ListButtonProps {
  /**
   * Text to be displayed on the button.
   * @property
   */
  text: string;
  /**
   * Show loading spinner if true.
   * @property
   */
  loading?: boolean;

  /**
   * Disable the button if true.
   * @property
   */
  disabled?: boolean;

  /**
   * Controls visibility of the button.
   * @property
   */
  isVisible?: boolean;
  /**
   * Callback function to handle button click.
   * @property
   */
  onClick?: () => void;
}

export interface ListProps {
  /**
   * Layout style of the list: default or modal.
   */
  listType?: 'default' | 'modal';

  /**
   * Data array to populate the list items.
   */
  data: listItemProps[];

  /**
   * Configuration for the "Load More" button.
   */
  loadMore?: ListButtonProps;

  /**
   * Configuration for the "Add More" inline item.
   */
  addMore?: ListButtonProps;

  /**
   * Type of content to render on the right side of each list item.
   * Can be a plain string, image, or custom React node.
   */
  endContent?: 'string' | 'image' | 'child';

  /**
   * Maps keys from the data object to be used in rendering list items.
   */
  keyMapper: {
    /**
     * Key name in `data` used for the main title.
     */
    title: string;

    /**
     * Key name in `data` used for the subtitle.
     */
    subTitle: string;

    /**
     * Key name in `data` used for rendering the right-side content.
     */
    endContent?: string;

    /**
     * Key name in `data` pointing to the image URL used in the `Tag` component.
     */
    tagURL?: string;

    /**
     * Key name in `data` providing the label text for the `Tag`.
     */
    tagLabel?: string;

    /**
     * Key name in `data` providing the avatar image URL shown at the start.
     */
    avatar?: string;
  };
  size: 'small' | 'large';
}
/**
 * List Component
 *
 * Renders a flexible list UI using Radix UI's `DataList`.
 * It supports dynamic key mapping for data rendering, optional avatars, tag elements,
 * and configurable end content (text, image, or custom element).
 * Also includes optional "Load More" and "Add More" controls.
 *
 * @component
 *
 * @param {ListProps} props - Props for the List component
 * @param {'default' | 'modal'} [props.listType='default'] - Determines list layout style.
 * @param {listItemProps[]} props.data - Array of objects representing each list row.
 * @param {'string' | 'image' | 'child'} [props.endContent='string'] - Type of end content to render on each row.
 * @param {Object} props.keyMapper - Key mapper to extract fields from each data object.
 *
 * @returns {JSX.Element} Rendered List component.
 *
 * @example
 * <List
 *   listType="modal"
 *   data={[{ name: 'John', age: 30 }]}
 *   keyMapper={{
 *     title: 'name',
 *     subTitle: 'age',
 *   }}
 * />
 */
export const List = ({
  listType = 'default',
  data,
  loadMore,
  addMore,
  endContent = 'string',
  keyMapper,
  size = 'small',
}: ListProps) => {
  const listClass = classNames(
    styles.list,
    listType === 'modal' ? styles.listModal : ''
  );
  const listItemClass = classNames(
    styles.listItem,
    size === 'large' ? styles.sizeLarge : ''
  );

  const handleClick = () => {
    if (loadMore && loadMore.onClick) loadMore.onClick();
  };
  return (
    <Box className={listClass}>
      <DataList.Root className={styles.list_inner}>
        {data.map((list: listItemProps, index: number) => (
          <DataList.Item align="center" key={index} className={listItemClass}>
            <Flex
              display="flex"
              gap="11px"
              align="center"
              className={styles.start}
            >
              {keyMapper?.avatar && list[keyMapper?.avatar] && (
                <Image
                  src={list[keyMapper?.avatar] as string}
                  alt="Globe Hero Image"
                  fallbackSrc={FallbackImage}
                  className={styles.avatar}
                />
              )}
              <Box className={styles.startInner}>
                <Text as="p" className={styles.title}>
                  {list[keyMapper.title] ?? ''}
                </Text>
                <Text as="p" className={styles.subtitle}>
                  {list[keyMapper.subTitle] ?? ''}
                </Text>
                {keyMapper?.tagURL &&
                  keyMapper.tagLabel &&
                  list[keyMapper?.tagURL] &&
                  list[keyMapper.tagLabel] && (
                    <Box className={styles.tagBox}>
                      <Tag
                        iconUrl={list[keyMapper.tagURL] as string}
                        mode="default"
                        showAvatar
                        text={list[keyMapper.tagLabel] as string}
                      />
                    </Box>
                  )}
              </Box>
            </Flex>
            {keyMapper.endContent && list[keyMapper.endContent] && (
              <Box>
                {endContent === 'string' && (
                  <Text as="p" className={styles.end}>
                    ${list[keyMapper.endContent] ?? ''}
                  </Text>
                )}
                {endContent === 'image' && (
                  <Image
                    src={list[keyMapper.endContent] as string}
                    alt="Globe Hero Image"
                    fallbackSrc={FallbackImage}
                    className={styles.globeImage}
                  />
                )}
                {endContent === 'child' && list[keyMapper.endContent]}
              </Box>
            )}
          </DataList.Item>
        ))}
        {addMore && addMore.isVisible && (
          <DataList.Item align="center" className={styles.addMoreButtonBox}>
            <Flex
              display="flex"
              gap="11px"
              align="center"
              className={styles.start}
            >
              <Icon
                backgroundColor="#F4F5F7"
                backgroundPadding="12px"
                color="#65676B"
                name="icon-plus"
                rounded
                size="24"
              />
              <Text as="p" className={styles.addButtonCaption}>
                {addMore.text}
              </Text>
            </Flex>
          </DataList.Item>
        )}
      </DataList.Root>
      {loadMore && loadMore.isVisible && (
        <Box className={styles.loadMoreBox}>
          <Button
            size="lg"
            text={loadMore.text}
            mode="outline"
            disabled={loadMore.disabled}
            loading={loadMore.loading}
            className={styles.loadMore}
            onClick={handleClick}
          />
        </Box>
      )}
    </Box>
  );
};

export default List;
