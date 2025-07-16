import React, { useState, useEffect, useRef } from 'react';
import Box from '@radix-styles/atoms/Box';
import { classNames } from '@utils/common/classNames';
import { getStylesAsCssProperties } from '@utils/common/styles';

import styles from './Truncate.module.scss';

const countLines = (element: HTMLElement, clientHeight: number): number => {
  if (!element) {
    return 0;
  }

  const computedStyle = window.getComputedStyle(element);
  const fontSize = parseFloat(computedStyle.fontSize);
  const lineHeight = computedStyle.lineHeight;

  console.log('lineHeight', lineHeight);
  const calculatedLineHeight =
    lineHeight === 'normal' || lineHeight === 'inherit'
      ? fontSize * 1.2 // Default line-height is often 1.2 * fontSize
      : parseFloat(lineHeight);

  if (!calculatedLineHeight || calculatedLineHeight === 0) {
    return 0;
  }

  return Math.floor(clientHeight / calculatedLineHeight);
};

export type TruncateProps = {
  children: React.ReactNode;
  backgroundColor?: string;
  width?: string;
  height?: string;
  className?: string;
};

export const Truncate = ({
  children,
  backgroundColor = 'white',
  className,
  width,
  height,
}: TruncateProps) => {
  const [isOverflowing, setIsOverflowing] = useState<boolean>(false);
  const [lineLimit, setLineLimit] = useState<number>(0);
  const contentRef = useRef<HTMLDivElement>(null);

  // const showEllipsis = isOverflowing ? styles.showEllipsis : undefined;
  const classes = classNames(className, styles.container);
  const style = getStylesAsCssProperties({
    '--truncateBackgroundColor': backgroundColor,
    '--truncateLineLimit': lineLimit,
  });

  const checkOverflow = () => {
    if (contentRef.current) {
      setIsOverflowing(
        contentRef.current.scrollHeight > contentRef.current.clientHeight
      );
    }
  };

  useEffect(() => {
    window.addEventListener('resize', checkOverflow);

    return () => {
      window.removeEventListener('resize', checkOverflow);
    };
  }, []);

  useEffect(() => {
    setTimeout(() => checkOverflow(), 0);
  }, [children]);

  useEffect(() => {
    if (contentRef.current && isOverflowing) {
      const element = contentRef.current as HTMLElement;

      if (element) {
        setTimeout(() => {
          let totalHeight = 0;
          let clientHeight = element.clientHeight || element.offsetHeight;
          let childNodes = element.childNodes[0].childNodes;
          if (childNodes[0]?.nodeType === Node.TEXT_NODE) {
            childNodes = element.childNodes;
          }
          const position = Array.from(childNodes).reduce(
            (totalLines, child) => {
              const childElement = child as HTMLElement;
              if (
                childElement?.nodeType === Node.ELEMENT_NODE &&
                clientHeight > totalHeight
              ) {
                const { tagName } = childElement as HTMLElement;
                if (tagName?.toUpperCase() !== 'BR') {
                  const accumativeHeight =
                    totalHeight + childElement.clientHeight;
                  let line = 0;
                  if (clientHeight > accumativeHeight) {
                    line = countLines(childElement, childElement.clientHeight);
                  } else {
                    const height = Math.abs(clientHeight - totalHeight);
                    line = countLines(childElement, height);
                  }
                  console.log(element, clientHeight, line);
                  totalHeight = accumativeHeight;
                  return totalLines + line;
                }
              }
              return totalLines;
            },
            0
          );

          if (position) {
            console.log('Last displayed clipped text position:', position);
            setLineLimit(position);
          } else {
            console.log('No visible text or element is not clipped.');
          }
        }, 2);
      }
    }
  }, [isOverflowing]);

  return (
    <Box
      as="div"
      width={width}
      height={height}
      className={classes}
      style={style}
      asChild
    >
      <div ref={contentRef}>
        <Box className="truncateContent">{children}</Box>
      </div>
    </Box>
  );
};

export default Truncate;
