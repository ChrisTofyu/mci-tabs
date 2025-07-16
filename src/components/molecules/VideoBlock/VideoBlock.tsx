import React, { ReactElement } from 'react';
import { classNames } from '@utils/common/classNames';

import VideoPlayer, { VideoPlayerProps } from '@components/atoms/VideoPlayer';
import Text from '@radix-styles/atoms/Text';
import Flex from '@radix-styles/atoms/Flex';
import Box from '@radix-styles/atoms/Box';

import styles from './VideoBlock.module.scss';

const responsiveSizes = {
  px: { initial: '4', sm: '4', md: '7', lg: '7', xl: '80px' },
  py: { initial: '7', sm: '7', md: '8', lg: '9', xl: '7' },
  pb: { initial: '4', sm: '4', md: '5', lg: '5', xl: '7' },
  width: { sm: '328px', md: '688px', lg: '944px', xl: '1130px' },
  height: { sm: '198px', md: '388px', lg: '532px', xl: '637px' },
};

export interface VideoBlockProps extends Omit<VideoPlayerProps, 'size'> {
  /**
   * Background color for the video container
   * @default 'tertiary'
   * @property
   */
  backgroundColor?: 'primary' | 'secondary' | 'tertiary';
  /**
   * Title for the video
   * @default ''
   * @property
   */
  title?: string | null;
  /**
   * Class name for the video player container
   * @default ''
   * @property
   */
  playerContainerClassName?: string;
  /**
   * Size of the video container
   * @default 'none'
   * @property
   */
  size: 'xl' | 'lg' | 'md' | 'sm' | 'none';
}

/**
 * @group Molecules
 * @category Component
 *
 * VideoBlock component is used to display a video with title and background color layout
 * @param {VideoBlockProps} props
 * @returns {ReactElement}
 */
export const VideoBlock = ({
  backgroundColor = 'tertiary',
  size = 'none',
  title = '',
  src,
  thumbnail,
  containerClassName = '',
  videoPlayerContainerClassName = '',
  videoThumbnailContainerClassName = '',
  playerContainerClassName = '',
}: VideoBlockProps): ReactElement => {
  const adaptiveSize = size === 'none';
  const containerLayout = adaptiveSize ? undefined : styles.fixed;
  const classes = classNames(
    containerLayout,
    styles.videoContainer,
    containerClassName,
    styles[backgroundColor],
    styles[`${size}-layout`]
  );
  const { px, py, pb, width, height } = adaptiveSize
    ? responsiveSizes
    : {
        px: responsiveSizes.px[size],
        py: responsiveSizes.py[size],
        pb: responsiveSizes.pb[size],
        width: responsiveSizes.width[size],
        height: responsiveSizes.height[size],
      };
  return (
    <Box className={classes} px={px} py={py}>
      <Flex align="center" direction="column">
        <Flex align="start" direction="column" style={{ width: 'min-content' }}>
          <Box pb={pb} className={styles.videoTitleBox}>
            {title && (
              <Text as="div" className={styles.title} wrap="wrap">
                {title}
              </Text>
            )}
          </Box>
          <Box width={width} height={height}>
            <VideoPlayer
              src={src}
              size={size}
              width="inherit"
              height="inherit"
              thumbnail={thumbnail}
              screenContainerClassName={styles.screenContainerClassName}
              containerClassName={playerContainerClassName}
              videoPlayerContainerClassName={videoPlayerContainerClassName}
              videoThumbnailContainerClassName={
                videoThumbnailContainerClassName
              }
            />
          </Box>
        </Flex>
      </Flex>
    </Box>
  );
};

export default VideoBlock;
