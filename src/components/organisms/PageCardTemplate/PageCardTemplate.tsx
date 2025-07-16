import React, { ReactElement } from 'react';
import CardContainer from '@components/molecules/CardContainer';
import { getStylesAsCssProperties } from '@utils/common/styles';
import { classNames } from '@utils/common/classNames';
import { Theme } from '@radix-ui/themes';

import styles from './PageCardTemplate.module.scss';
/**
 * @interface
 * The Page Template with Card props type of {@link PageCardTemplate}.
 */
export interface PageCardTemplateProps {
  /**
   * Children as jsx, react component will show inside the modal
   * @property
   */
  children: React.ReactNode;
  /**
   * Background Image source
   * @property
   */
  backgroundImageUrl?: string;
  /**
   * An optional class to support the dynamic styles of the Page Template
   * @property
   */
  className?: string;
  /**
   * An optional class to support the dynamic styles of the card container
   * @property
   */
  containerClassName?: string;
  /**
   * An optional class to support the dynamic styles of content's of the card container
   * @property
   */
  contentClassName?: string;
}

/**
 * The Page Card Template component can include an image or not
 * and comes with a responsive card container
 *
 * @group Organisms
 * @category Component
 *
 * @param {PageCardTemplateProps} props - The Page Template props
 * @returns {ReactElement} - PageCardTemplate Component
 */

export const PageCardTemplate = ({
  children,
  backgroundImageUrl,
  className,
  containerClassName,
  contentClassName,
}: PageCardTemplateProps): ReactElement => (
  <Theme>
    <div className={classNames(styles.container, className)}>
      <div
        className={styles.imageContainer}
        style={getStylesAsCssProperties({
          '--background-image': `url('${backgroundImageUrl}')`,
        })}
      >
        <div className={styles.frame}>
          <div className={styles.formContainer}>
            <CardContainer
              className={containerClassName}
              contentClassName={contentClassName}
            >
              {children}
            </CardContainer>
          </div>
        </div>
      </div>
    </div>
  </Theme>
);

export default PageCardTemplate;
