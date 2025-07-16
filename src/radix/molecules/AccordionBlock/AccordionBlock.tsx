import React, { ReactNode } from 'react';
import Accordion, { AccordionProps } from '@radix-styles/atoms/Accordion';
import Heading from '@radix-styles/atoms/Heading';
import { truncateByCharacterCount } from '@utils/common/truncateByCharacterCount';
import { classNames, getModuleClasses } from '@utils/common/classNames';
import { getStylesAsCssProperties } from '@utils/common/styles';

import styles from './AccordionBlock.module.scss';

/**
 * @interface
 * The AccordionBlock props type of {@link AccordionBlock}
 */
export type AccordionBlockProps = AccordionProps & {
  /**
   * Title fro the AccordionBlock
   */
  title?: ReactNode;
  /**
   * class name for the AccordionBlock wrapper
   */
  accordionBlockClassName?: string;
  /**
   * To set background color for the AccordionBlock
   */
  accordionBlockBackgroundColor?: string;
};

/**
 *
 * AccordionBlock component.
 *
 * @group Molecules
 * @category Component
 *
 * @param {AccordionBlockProps} props - The AccordionBlock props
 * @returns {ReactElement} - AccordionBlock Component
 *
 */
export const AccordionBlock = ({
  className,
  items,
  collapsible = true,
  type = 'multiple',
  defaultValue,
  title,
  accordionBlockClassName,
  accordionBlockBackgroundColor = '#F4F5F7',
  backgroundColor = '#fff',
}: AccordionBlockProps) => {
  const classes = getModuleClasses(accordionBlockClassName?.trim(), styles);
  const wrapperClass = classNames(
    styles.accordionBlockContainer,
    'accordionBlockContainer',
    classes
  );

  if (items?.length <= 0) {
    return null;
  }

  return (
    <div
      className={wrapperClass}
      style={getStylesAsCssProperties({
        '--accordionBlockBackgroundColor': accordionBlockBackgroundColor,
      })}
    >
      <div
        className={classNames(
          styles.accordionBlockInner,
          'accordionBlockInner'
        )}
      >
        {title ? (
          <div
            className={classNames(
              styles.accordionBlockInnerTitleWrapper,
              'accordionBlockInnerTitleWrapper'
            )}
          >
            <Heading
              className={classNames(
                styles.accordionBlockInnerTitle,
                'accordionBlockInnerTitle'
              )}
              size={{ initial: '5', sm: '6', md: '8' }}
              weight="bold"
              align="center"
            >
              {truncateByCharacterCount(title, 60)}
            </Heading>
          </div>
        ) : null}
        <div
          className={classNames(
            styles.accordionGroupWrapper,
            'accordionGroupWrapper'
          )}
          style={getStylesAsCssProperties({
            '--backgroundColor': backgroundColor,
          })}
        >
          <Accordion
            items={items}
            className={className}
            collapsible={collapsible}
            type={type}
            defaultValue={defaultValue}
          />
        </div>
      </div>
    </div>
  );
};

export default AccordionBlock;
