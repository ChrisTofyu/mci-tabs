import React, { useEffect, useId, useRef } from 'react';
import Box from '@radix-styles/atoms/Box';
import Flex from '@radix-styles/atoms/Flex';
import { ContentType } from '@internal/types/common/aem';
import { useContent } from '@utils/hooks';
import { Config } from '@utils/common/htmlToRadix';
import Image from '@components/atoms/Image';

import FallbackImage from '@assets/images/FallbackImage.svg';
import VideoBlock from '@components/molecules/VideoBlock';
import { classNames } from '@utils/common/classNames';
import { createPortal } from 'react-dom';
import ArticlesHero from '@components/molecules/ArticlesHero';
import QuoteBlock from '@components/molecules/QuoteBlock';

import styles from './Article.module.scss';

type ImageType = {
  title?: string;
  description?: string;
  _path: string;
};

type QuoteType = {
  quoteBody: ContentType;
};

export type ArticleType = {
  _path: string;
  title: string;
  tags: string[];
  subHead: string | null;
  contentBody: ContentType[];
  images: ImageType[];
  DisplayDate: string;
  status: string;
  createdByAuthorDetails: {
    firstName: string;
    lastName: string;
  };
  pageName: string;
  metadescription: string;
  publisheddate: string;
  config?: Config;
  video?: string | null;
  videoTitle?: string | null;
  videoCoverImage?: ImageType | null;
  quote?: QuoteType[] | null;
};

type ContentProps = {
  className: string;
  children: string | null | undefined;
  config?: Config;
  hasLoaded: (loaded: boolean) => void;
};

const Content = ({
  children,
  className,
  config = {},
  hasLoaded,
}: ContentProps) => {
  const hasStringAsChildren = typeof children === 'string';
  const configuration = {
    headingProps: {
      size: { initial: '5', xs: '5', sm: '7', md: '7', lg: '7', xl: '7' },
      weight: 'semi-bold',
      wrap: 'wrap',
      className: 'heading',
      ...config?.headingProps,
    },
    textProps: {
      className,
      size: { initial: '3', xs: '3', sm: '4', md: '4', lg: '4', xl: '4' },
      as: 'p',
      wrap: 'wrap',
      ...config?.textProps,
    },
    ...config,
  } as Config;
  const { newChildren } = useContent(
    hasStringAsChildren ? children : null,
    configuration
  );

  useEffect(() => {
    console.log('newChildren', newChildren);
    if (hasLoaded && newChildren) {
      hasLoaded(true);
    }
  }, [newChildren]);

  return (
    <Box mt="4">
      <Flex direction="column" align="center">
        <Flex gap="5" direction="column" wrap="wrap" className={styles.content}>
          {newChildren}
        </Flex>
      </Flex>
    </Box>
  );
};

const isValidUrl = (url: string) => /^https?:\/\//i.test(url);
export const setAssetsPath = (
  path: string | null | undefined,
  prefix?: string
) => {
  if (path) {
    return isValidUrl(path) ? path : `${prefix}${path}`;
  }
  return '';
};

type ArticleProps = {
  article: ArticleType;
  config?: Config;
  asset: {
    prefix: string;
  };
};

export const Article = ({ article, config, asset }: ArticleProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const imageReference = useRef<HTMLDivElement>(null);
  const [loading, setLoading] = React.useState(false);
  const [paragraph, setParagraph] = React.useState<Element[]>([]);
  const id = useId().replaceAll(':', '');
  const contentClassName = `${id}-content`;
  const mediaIdentifier = `${id}-media`;
  const mediaContainerId = mediaIdentifier + '-container';
  const mediaClassName = classNames('media', mediaIdentifier);

  const getMediaContainer = (index: number) =>
    paragraph[index]
      ? document.getElementsByClassName(mediaContainerId)[index]
      : (imageReference?.current ?? document.body);

  console.log('Article props', article);

  const {
    contentBody: contents,
    video,
    videoCoverImage,
    videoTitle,
    images,
    title,
    subHead,
    DisplayDate,
    createdByAuthorDetails,
    quote,
  } = article ?? {};
  const { prefix: assetBaseUrl } = asset ?? {};

  const offset = video ? 1 : 0;
  const { firstName, lastName } = createdByAuthorDetails ?? {};
  const { _path: imagePath = '', description: imageDescription } =
    images?.[0] ?? {};
  const articleImages = images?.slice(1) ?? [];
  const videoSource = setAssetsPath(video, assetBaseUrl);
  const videoThumbnail = setAssetsPath(videoCoverImage?._path, assetBaseUrl);
  const quoteText = quote;
  const authorName = ((firstName ?? '') + ' ' + (lastName ?? '')).trim();

  useEffect(() => {
    const mediaElements = imageReference.current
      ? Array.from(
          imageReference.current.querySelectorAll(`.${mediaIdentifier}`)
        )
      : [];
    if (!ref.current && !loading && mediaElements.length) return;
    const elements = Array.from(
      ref.current?.querySelectorAll(`.${contentClassName}:not(li p)`) ?? []
    );
    console.log('mediaElements', mediaElements);
    const getMedia = () => mediaElements.shift() as React.ReactNode;
    if (elements.length) {
      elements.every((element, index) => {
        if ((index + 1) % 2 === 0) {
          const media = getMedia();
          console.log('media', media);
          if (media) {
            const portalContainer = document.createElement('div');
            const isVideo = (media as unknown as Element)?.classList?.contains(
              'video'
            );
            let fullSizeMedia = '';
            if (isVideo) {
              fullSizeMedia = styles.fullSizeMedia;
            }
            portalContainer.setAttribute(
              'class',
              classNames(mediaContainerId, fullSizeMedia, 'media')
            );
            element.parentNode?.insertBefore(
              portalContainer,
              element.nextSibling
            );
            console.log('portalContainer', portalContainer);
            console.log('media', getMediaContainer(index));
            console.log('complete');
            setParagraph(prev => [...prev, element]);
          }
        }
        return true;
      });
    }
  }, [loading]);

  return (
    <>
      <ArticlesHero
        className=""
        imagePosition="top"
        imageUrl={setAssetsPath(imagePath, assetBaseUrl)}
        imageAltText={imageDescription}
        imageFallback={FallbackImage}
        articleTitle={title}
        articleDescription={subHead ?? ''}
        authorName={authorName}
        authoredDate={DisplayDate}
      />
      <Box as="div" mt="4" className={styles.container}>
        <Flex direction="column" wrap="wrap" asChild>
          <div ref={ref}>
            {contents?.map(({ html }, index) => (
              <div key={index + 'contents-' + id}>
                <Content
                  config={config}
                  hasLoaded={setLoading}
                  className={contentClassName}
                >
                  {html}
                </Content>
              </div>
            ))}
          </div>
        </Flex>
      </Box>
      <div ref={imageReference} style={{ display: 'none' }}>
        {videoSource &&
          createPortal(
            <VideoBlock
              containerClassName={classNames(mediaClassName, 'video')}
              src={videoSource}
              thumbnail={videoThumbnail}
              fallbackThumbnailSrc={FallbackImage}
              title={videoTitle}
              size="none"
              width="100%"
              height="100%"
            />,
            getMediaContainer(0)
          )}
        {articleImages?.map(({ title, description, _path }, index) =>
          createPortal(
            <Image
              className={mediaClassName}
              key={index + '-images' + id}
              src={setAssetsPath(_path, assetBaseUrl)}
              alt={description}
              title={title}
              fallbackSrc={FallbackImage}
              maxWidth="100%"
              minWidth="100%"
            />,
            getMediaContainer(index + offset)
          )
        )}
        {quoteText
          ? quoteText.map((text, index) =>
              createPortal(
                <QuoteBlock
                  className={mediaClassName}
                  quoteText={text?.quoteBody?.html ? text?.quoteBody?.html : ''}
                />,
                getMediaContainer(articleImages.length + index + offset)
              )
            )
          : null}
      </div>
    </>
  );
};

export default Article;
