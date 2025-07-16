import React, { ReactElement, useEffect, useRef, useState } from 'react';
import Flex from '@radix-styles/atoms/Flex';
import Link from '@radix-styles/atoms/Link';

const DEFAULT_LINE_HEIGHT = 24;

/**
 * @interface
 *
 * The ReadMore props type of {@link ReadMore}
 */
export interface ReadMoreProps {
  /**
   * The contents of the component
   * @property
   */
  contents: string[];
  /**
   * The maximum number of lines to show
   * @property
   * @default 3
   */
  maxLines?: number;
  /**
   * The class name of the content component
   */
  contentClassName?: string;
  /**
   * The alignment of the content
   * @property
   * @default 'left'
   */
  align?: string;
  /**
   * The label of the expand button
   * @default 'Read more'
   * @property
   */
  expandButtonLabel?: string;
  /**
   * The label of the collapse button
   * @default 'Read less'
   * @property
   */
  collapseButtonLabel?: string;
}

/**
 * ReadMore component is to show/hide the content based on the input.
 *
 * @group Atoms
 * @category Component
 *
 * @param {ReadMoreProps} props - The ReadMore props
 * @returns {ReactElement} - ReadMore Component
 *
 */
export const ReadMore = ({
  contents,
  maxLines = 3,
  align = 'left',
  contentClassName,
  expandButtonLabel = 'Read more',
  collapseButtonLabel = 'Read less',
}: ReadMoreProps): ReactElement => {
  const [isExpanded, setIsExpanded] = useState(false);
  const toggleReadMore = () => setIsExpanded(prevState => !prevState);

  const contentRef = useRef<HTMLDivElement>(null);
  const [showReadMore, setShowReadMore] = useState(false);
  const [lineHeight, setLineHeight] = useState(DEFAULT_LINE_HEIGHT);

  const buttonName = isExpanded ? collapseButtonLabel : expandButtonLabel;
  const maxHeight = lineHeight * maxLines;

  const calculateVisibility = () => {
    if (contentRef.current) {
      const actualHeight = contentRef.current.scrollHeight;
      if (actualHeight <= maxHeight) {
        setShowReadMore(false);
        setIsExpanded(true);
      } else {
        setShowReadMore(true);
        setIsExpanded(false);
      }
    }
  };

  useEffect(() => {
    if (contentRef?.current) {
      const lineHeights = contentRef.current.style.lineHeight;
      setLineHeight(Number(lineHeights) || DEFAULT_LINE_HEIGHT);
      calculateVisibility();
    }
  }, [contents, maxLines]);

  useEffect(() => {
    calculateVisibility();
    window.addEventListener('resize', calculateVisibility);
    return () => {
      window.removeEventListener('resize', calculateVisibility);
    };
  }, []);

  return (
    <div>
      <div
        className={contentClassName}
        ref={contentRef}
        style={{
          maxHeight: isExpanded ? 'none' : `${maxHeight}px`,
          overflow: 'hidden',
          transition: 'max-height 0.3s ease',
          WebkitLineClamp: !isExpanded ? maxLines : 'none',
          display: !isExpanded ? '-webkit-box' : 'block',
          WebkitBoxOrient: !isExpanded ? 'vertical' : 'unset',
        }}
      >
        {contents}
      </div>
      {showReadMore && (
        <Flex style={{ justifyContent: align }}>
          <Link onClick={toggleReadMore}>{buttonName}</Link>
        </Flex>
      )}
    </div>
  );
};

export default ReadMore;
