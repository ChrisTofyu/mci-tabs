import React, { ReactElement } from 'react';
import Flex from '@radix-styles/atoms/Flex';
import Text from '@radix-styles/atoms/Text';
import Link from '@radix-styles/atoms/Link';
import styles from './FormFooter.module.scss';

/**
 * @interface
 * The FormFooter props type of {@link FormFooter}.
 */
export interface FormFooterProps {
  /**
   * Content/question that will appear before the text link.
   * @property
   */
  content: string;
  /**
   * Text for the Hyperlink
   * @property
   */
  linkText: string;
  /**
   * Text content to display the description
   * @property
   */
  description?: string;
  /**
   * Hyperlink for the navigation
   * @property
   */
  href?: string;
  /**
   * Callback function triggered when the login link is clicked
  @property
  */
  linkClick?: () => void;
}

/**
 * FormFooter component
 *
 * @group Molecules
 * @category Component
 *
 * @param {FormFooterProps} props - The FormFooter props
 * @returns {ReactElement} - FormFooter Component
 */
export const FormFooter = ({
  content,
  linkText,
  description,
  href,
  linkClick,
}: FormFooterProps): ReactElement => {
  return (
    <Flex className={styles.formContainer}>
      <Flex className={styles.formFooterQuest}>
        <Text>{content}</Text>
        <Link onClick={linkClick} targetHref={href}>
          {linkText}
        </Link>
      </Flex>
      {description && (
        <Flex className={styles.description}>
          <Text className={styles.text}>{description}</Text>
        </Flex>
      )}
    </Flex>
  );
};

export default FormFooter;
