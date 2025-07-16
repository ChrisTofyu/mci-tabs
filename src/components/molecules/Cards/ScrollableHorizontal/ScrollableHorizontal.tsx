import React, {
  ReactElement,
  ReactNode,
  useEffect,
  useRef,
  useState,
} from 'react';
import Box from '@radix-styles/atoms/Box';
import Flex from '@radix-styles/atoms/Flex';
import Text from '@radix-styles/atoms/Text';
import Button from '@radix-styles/atoms/Button';
import ScrollArea from '@radix-styles/atoms/ScrollArea';
import { classNames } from '@utils/common/classNames';
import { AnalyticsHandler } from '@utils/Analytics';

import style from './ScrollableHorizontal.module.scss';

/**
 * @interface
 * The Scrollable Horizontal Card props type of {@link ScrollableHorizontal}
 */
export interface ScrollableHorizontalProps {
  /**
   * Length of items
   */
  itemsLength: number;

  /**
   * Heading/title displayed above or within the list.
   */
  heading: string;

  /**
   * Determines whether to show the description.
   * If `true`, the `description` will be visible.
   */
  showDescription?: boolean;

  /**
   * Description text for the list.
   * Used when `showDescription` is `true`.
   */
  description?: string;

  /**
   * Defines the visual mode/theme.
   */
  mode?: 'primary' | 'inverse';

  /**
   * Optional CSS class names for additional styling.
   */
  classname?: string;
  /**
   * Children as jsx, react component will show inside the modal
   * @property
   */
  children: ReactNode;
  /**
   * Unique name to assign and support the scrolling behaviour
   * @property
   */
  name: string;
}

/**
 *
 * A horizontally scrollable list that displays a set of items with optional descriptions.
 * It includes support for different sizes and modes, along with configurable styling.
 *
 * @group Molecules
 * @category Component
 *
 * @param {ScrollableHorizontal} props - The Scrollable Horizontal props
 * @returns {ReactElement} - Scrollable HorizontalComponent
 *
 */
export const ScrollableHorizontal = ({
  itemsLength,
  heading,
  description,
  classname,
  mode = 'primary',
  showDescription = true,
  children,
  name,
}: ScrollableHorizontalProps): ReactElement => {
  const [active, setActive] = useState<number>(1);
  const [hideBtn, setHideBtn] = useState<boolean>(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const { trackClick } = AnalyticsHandler();

  // Calculating the ignorable indices
  const calcIgnorableIndex = () => {
    const containerWidth = scrollContainerRef?.current?.clientWidth;
    if (containerWidth) {
      const firstChildElement = scrollContainerRef?.current?.querySelector(
        `#${name}-1`
      );
      const childWidth = firstChildElement?.clientWidth;
      if (childWidth) {
        const gapBetweenCards = 12;

        const cardCount = Math.floor(containerWidth / childWidth);
        const remainingWidth = containerWidth % childWidth;

        const totalGapWidth = cardCount * gapBetweenCards;

        if (remainingWidth > totalGapWidth) {
          const usableWidth = containerWidth - totalGapWidth;
          const visibleCardCount = Math.floor(usableWidth / childWidth);

          return visibleCardCount;
        }
        const reducedGapWidth = (cardCount - 1) * gapBetweenCards;
        const usableWidth = containerWidth - reducedGapWidth;
        const visibleCardCount = Math.floor(usableWidth / childWidth);

        return visibleCardCount;
      }
    }

    return 0;
  };

  // The function to get the next value
  const next = () => {
    const ignorableIndex = calcIgnorableIndex();
    const activeIndex =
      active === itemsLength - (ignorableIndex - 1) || active === itemsLength
        ? 1
        : active + 1;
    return activeIndex;
  };

  // The function to get the previous value
  const previous = () => {
    const ignorableIndex = calcIgnorableIndex();
    if (active === 1) {
      return itemsLength;
    } else if (active === itemsLength) {
      return itemsLength - ignorableIndex;
    }
    return active - 1;
  };

  // Handler Function of Next button
  const handleNext = () => {
    const newIndex = next();
    setActive(() => newIndex);
    trackClick({
      target: '',
      location: 'horizontal scroller',
      name: heading,
      type: 'button',
      contentTypeOrPosition: 'next',
    });
  };

  // Handler Function of Previous button
  const handlePrevious = () => {
    const newIndex = previous();
    setActive(() => newIndex);
    trackClick({
      target: '',
      location: 'horizontal scroller',
      name: heading,
      type: 'button',
      contentTypeOrPosition: 'previous',
    });
  };

  // Scrolling the current view into target view
  const scrollToActive = (index: number) => {
    // Scroll to the target card inside the container
    document.getElementById(`${name}-${index}`)?.scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
      inline: 'start',
    });
  };

  // Triggering the scrollToActive when on Mounting and after Updating the active
  useEffect(() => {
    scrollToActive(active);
  }, [active]);

  //To hide the prev and next button
  useEffect(() => {
    setTimeout(() => {
      if (scrollContainerRef?.current) {
        const elements = scrollContainerRef?.current.children;
        for (const element of elements) {
          if (element.getAttribute('data-state')) {
            setHideBtn(true);
          }
        }
      }
    }, 250);
  });

  // Enabling ResizeObserver to update the view to the initial position
  useEffect(() => {
    const resizeObserver = new ResizeObserver(() => {
      setActive(1);
    });

    if (scrollContainerRef.current) {
      resizeObserver.observe(scrollContainerRef.current);
    }

    return () => {
      if (scrollContainerRef.current) {
        resizeObserver.unobserve(scrollContainerRef.current);
      }
    };
  }, []);

  // Concatinating the size, mode and additional class name
  const concatinatedClasses = classNames(
    style.container,
    classname,
    style[mode]
  );

  // Defining button mode
  const buttonMode = mode === 'primary' ? 'inverse' : 'secondary';

  return (
    <Box className={concatinatedClasses}>
      <Box className={style.header}>
        <Flex direction="column" className={style.contentHeader}>
          <Text as="p" className={style.heading}>
            {heading}
          </Text>
          {showDescription && description && (
            <Text as="p" className={style.description}>
              {description}
            </Text>
          )}
        </Flex>
        {hideBtn && (
          <Flex className={classNames(style.navButtons)}>
            <Button
              text=""
              rounded
              size="md"
              icon="icon-previous"
              ariaLabelName="Previous Button"
              mode={buttonMode}
              className={style.btn}
              onClick={handlePrevious}
            />
            <Button
              text=""
              rounded
              size="md"
              icon="icon-next"
              ariaLabelName="Next Button"
              mode={buttonMode}
              className={style.btn}
              onClick={handleNext}
            />
          </Flex>
        )}
      </Box>
      <ScrollArea classname={style.body} ref={scrollContainerRef}>
        <Flex className={style.contentContainer}>{children}</Flex>
      </ScrollArea>
    </Box>
  );
};

export default ScrollableHorizontal;
