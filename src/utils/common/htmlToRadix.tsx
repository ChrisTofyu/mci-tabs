import React, { Fragment, ReactNode } from 'react';
import parse, { DOMNode, domToReact } from 'html-react-parser';
import Image from '@components/atoms/Image';
import FallbackImage from '@assets/images/FallbackImage.svg';
import Heading, { HeadingProps } from '@radix-styles/atoms/Heading';
import Text, { TextProps } from '@radix-styles/atoms/Text';
import Link from '@radix-styles/atoms/Link';
import { hasOnlyEmptyText } from './text';

const headingTags = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'] as const;
const textTags = ['p', 'div'] as const;
const list = 'li';

type HeadingNames = (typeof headingTags)[number];
type TextNames = (typeof textTags)[number];

export type HeadingConfiguration = {
  [key in HeadingNames]?: HeadingProps;
};

export type TextConfiguration = {
  [key in TextNames]?: TextProps;
};

export type Config = {
  headingProps?: HeadingProps | HeadingConfiguration;
  textProps?: TextProps | TextConfiguration;
};

interface DomNodeType {
  name?: string;
  attribs?: Record<string, string>;
  children?: DOMNode[];
}

const isTextOrUndefined = (node: DOMNode[] | DOMNode | undefined): boolean => {
  const { children = [] } = (node ?? {}) as DomNodeType;

  if (!children || (Array.isArray(children) && children.length === 0)) {
    return true;
  }

  return (
    Array.isArray(children) &&
    children.every(child => {
      if (child.type === 'text') {
        if (hasOnlyEmptyText(child.data)) {
          return true;
        }
      }
      if (child.type === 'tag' && child.children) {
        return isTextOrUndefined(child as unknown as DOMNode[]);
      }
      return false;
    })
  );
};

const htmlToRadix = (
  htmlString: string | ReactNode | null,
  config?: Config
) => {
  if (!htmlString) {
    return null;
  }

  const replaceHtmlTag = (htmlString: string | ReactNode) => {
    const options = {
      replace: (domNode: DomNodeType) => {
        const { name = '', attribs = {}, children = [] } = domNode;
        const child = domToReact(children, options as object);
        const isEmptyTextOnly =
          name === 'p' && isTextOrUndefined(domNode as unknown as DOMNode[]);
        if (isEmptyTextOnly) {
          return <></>;
        } else if (name === 'a') {
          return <Link {...attribs}>{child}</Link>;
        } else if (name === 'img') {
          type attribsKey = keyof typeof attribs;
          const attribsSrc = 'src' as attribsKey;
          const attribsAltText = 'alt' as attribsKey;

          return (
            <Image
              src={attribsSrc}
              alt={attribsAltText}
              fallbackSrc={FallbackImage}
              {...attribs}
            />
          );
        } else if (headingTags.includes(name as HeadingNames)) {
          const as = name as HeadingNames;
          let data = {};
          const props = config?.headingProps as HeadingConfiguration;
          if (props) {
            if (
              Object.keys(props).some(key =>
                headingTags.includes(key as HeadingNames)
              )
            ) {
              data = props[as] as HeadingProps;
            } else {
              data = props as HeadingProps;
            }
          }
          return (
            <Heading as={as} {...data}>
              {child}
            </Heading>
          );
        } else if (textTags.includes(name as TextNames) || name === list) {
          const as = name as TextNames;
          let data: Partial<TextProps> = { size: null, weight: null };
          const props = config?.textProps as TextConfiguration;
          if (props) {
            if (
              Object.keys(props).some(key =>
                textTags.includes(key as TextNames)
              )
            ) {
              data = props[as] as TextProps;
            } else {
              data = props as TextProps;
            }
          }

          const asChild =
            name === 'div' &&
            Array.isArray(child) &&
            child.every(
              node => typeof child !== 'string' || node?.props?.as === 'p'
            );
          if (name === 'li') {
            return (
              <li>
                <Text as="p" {...data} asChild={asChild}>
                  <Fragment>{child}</Fragment>
                </Text>
              </li>
            );
          } else {
            return (
              <Text as="p" {...data} asChild={asChild}>
                <Fragment>{child}</Fragment>
              </Text>
            );
          }
        }
      },
    };

    return parse(htmlString as string, options as object);
  };

  return replaceHtmlTag(htmlString);
};

export default htmlToRadix;
