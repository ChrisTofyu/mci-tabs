import React, { ComponentPropsWithoutRef, ReactNode } from 'react';
import { Accordion as RadixAccordion } from 'radix-ui';
import { classNames, getModuleClasses } from '@utils/common/classNames';
import { Icon } from '@components/atoms/Icons';
import { getStylesAsCssProperties } from '@utils/common/styles';
import { truncateByCharacterCount } from '@utils/common/truncateByCharacterCount';

import styles from './Accordion.module.scss';

/**
 * @interface
 * The Accordion props type of {@link Accordion}
 */
export type AccordionSingleItemProps = {
  /**
   * value for the Accordion
   */
  value: string;
  /**
   * title for the Accordion
   */
  title: React.ReactNode;
  /**
   * content for the Accordion
   */
  content: React.ReactNode;
};

export type AccordionProps = {
  /**
   * class name for the Accordion wrapper
   */
  className?: string;
  /**
   * Items to render in the accordion
   */
  items: AccordionSingleItemProps[];
  /**
   * How many item to be opened at once
   */
  type?: 'single' | 'multiple';
  /**
   * To define atleast one accordion to be open always, this wont work on multiple
   */
  collapsible?: boolean;
  /**
   * Default value for expanded items
   */
  defaultValue?: string | string[];
  /**
   * To set border radius to the accordion
   */
  applyRounded?: boolean;
  /**
   * To set padding to the accordion
   */
  applyPadding?: boolean;
  /**
   * To set background color for the accordion
   */
  backgroundColor?: string;
};

type CommonProps = {
  /**
   * Children to render in the accordion content
   */
  children: ReactNode;
  /**
   * class name for the Accordion content wrapper
   */
  className?: string;
};
type TriggerProps = ComponentPropsWithoutRef<typeof RadixAccordion.Trigger> &
  CommonProps;
type ContentProps = ComponentPropsWithoutRef<typeof RadixAccordion.Content> &
  CommonProps;

/**
 *
 * Accordion component.
 *
 * @group Atoms
 * @category Radix Component
 *
 * @param {AccordionProps} props - The Accordion props
 * @returns {ReactElement} - Accordion Component
 *
 */
const RadixAccordionTrigger = React.forwardRef<HTMLButtonElement, TriggerProps>(
  ({ children, className, ...props }, forwardedRef) => (
    <RadixAccordion.Header
      className={classNames(
        styles.accordionTitleWrapper,
        'accordionTitleWrapper',
        className
      )}
    >
      <RadixAccordion.Trigger
        className={classNames(styles.accordionTitle, 'accordionTitle')}
        {...props}
        ref={forwardedRef}
      >
        <span
          className={classNames(
            styles.accordionTitleName,
            'accordionTitleName'
          )}
        >
          {children}
        </span>
        <span
          className={classNames(
            styles.accordionToggleIconScetion,
            'accordionToggleIconScetion'
          )}
        >
          <Icon
            name="icon-chevron"
            className={classNames(
              styles.accordionToggleIcon,
              'accordionToggleIcon'
            )}
            backgroundSize="32px"
            size="16"
            color="#17191F"
            backgroundColor="#fff"
            rounded={true}
          ></Icon>
        </span>
      </RadixAccordion.Trigger>
    </RadixAccordion.Header>
  )
);
RadixAccordionTrigger.displayName = 'RadixAccordionTrigger';

const RadixAccordionContent = React.forwardRef<HTMLDivElement, ContentProps>(
  ({ children, className, ...props }, forwardedRef) => {
    return (
      <RadixAccordion.Content
        className={classNames(
          styles.accordionContentWrapper,
          'accordionContentWrapper',
          className
        )}
        {...props}
        ref={forwardedRef}
      >
        <div
          className={classNames(styles.accordionContent, 'accordionContent')}
        >
          {children}
        </div>
      </RadixAccordion.Content>
    );
  }
);
RadixAccordionContent.displayName = 'RadixAccordionContent';

type AccordionItemProps = {
  item: AccordionSingleItemProps;
  index: number;
  totalItems: number;
};
const AccordionItem = ({ item, index, totalItems }: AccordionItemProps) => (
  <>
    <RadixAccordion.Item key={item.value} value={item.value}>
      <RadixAccordionTrigger>
        {truncateByCharacterCount(item.title, 150)}
      </RadixAccordionTrigger>
      <RadixAccordionContent>
        {truncateByCharacterCount(item.content, 500)}
      </RadixAccordionContent>
    </RadixAccordion.Item>
    {index < totalItems && (
      <div className={classNames(styles.divider, 'divider')} />
    )}
  </>
);
AccordionItem.displayName = 'AccordionItem';

type ItemsProps = {
  items: AccordionSingleItemProps[];
  totalItems: number;
};
const Items = ({ items, totalItems }: ItemsProps) =>
  items.map((item, index) => (
    <AccordionItem
      key={item.value}
      item={item}
      index={index}
      totalItems={totalItems}
    />
  ));
AccordionItem.displayName = 'Items';

export const Accordion = ({
  className,
  items,
  collapsible = true,
  type = 'multiple',
  defaultValue,
  applyPadding,
  applyRounded,
  backgroundColor = '',
}: AccordionProps) => {
  const classes = getModuleClasses(className?.trim(), styles);
  const wrapperClass = classNames(
    styles.accordionContainer,
    'accordionContainer',
    applyPadding ? styles.accordionPadding : '',
    applyRounded ? styles.accordionPaddingRounded : '',
    classes
  );

  if (items?.length <= 0) {
    return null;
  }

  const firstValue = items[0]?.value;
  const defaultStringValue = (
    type === 'single' ? (defaultValue ?? firstValue) : ''
  ) as string;
  const defaultStringArrayValue = (
    type === 'multiple' ? (defaultValue ?? [firstValue]) : []
  ) as string[];
  const totalItems = items.length - 1;

  return (
    <div
      className={wrapperClass}
      style={getStylesAsCssProperties({ '--backgroundColor': backgroundColor })}
    >
      {type === 'single' ? (
        <RadixAccordion.Root
          type="single"
          collapsible={collapsible}
          defaultValue={defaultStringValue}
        >
          <Items items={items} totalItems={totalItems} />
        </RadixAccordion.Root>
      ) : (
        <RadixAccordion.Root
          type="multiple"
          defaultValue={defaultStringArrayValue}
        >
          <Items items={items} totalItems={totalItems} />
        </RadixAccordion.Root>
      )}
    </div>
  );
};

export default Accordion;
