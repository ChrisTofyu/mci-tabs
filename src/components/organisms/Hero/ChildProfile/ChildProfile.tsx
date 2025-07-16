import React, { MouseEventHandler, ReactElement, useState } from 'react';

import Button from '@radix-styles/atoms/Button';
import VideoPlayer from '@components/atoms/VideoPlayer';
import BookIcon from '@assets/icons/core/Book.svg';
import Icons, { Icon } from '@components/atoms/Icons';
import ReadMore from '@components/molecules/ReadMore';
import {
  ButtonEventCallback,
  ButtonMouseEventType,
} from '@internal/types/common/button';

import { Children } from '../../../molecules/Filter';
import ProfileFilter from '../../../molecules/ProfileFilter';
import {
  ageFilterOptions,
  countryFilterOptions,
  genderFilterOptions,
} from '../../../molecules/Filter/constants';

import styles from './ChildProfile.module.scss';

export type Gender = 'boy' | 'girl';

export interface ChildDetailsProps {
  /**
   * Display the child image, if exists
   * @property
   */
  childImage?: string;
  /**
   * Name of the child
   * @property
   */
  name?: string;
  /**
   * Details of the child
   * @property
   */
  details: string;
  /**
   * Video of the child
   * @property
   */
  videoSrc: string;
  /**
   * Age of the child
   * @property
   */
  age?: number;
  /**
   * Country Name of the child
   * @property
   */
  country?: string;
  /**
   * Gender of the child
   * @property
   */
  gender?: Gender;
  /**
   * More information about the child
   */
  descriptions: string[];
  /**
   * Button Name to sponsor the child
   * @property
   */
  sponsorButtonName?: string;
  /**
   * Prefix for the sponsor button text, if needed.
   * It will construct the button text as `${buttonPrefixName} ${name}`
   * @property
   *
   * @default 'Sponsor'
   */
  buttonPrefixName?: string;
  /**
   * Greetings for the child
   * @property
   *
   * @default 'Meet'
   */
  greetings?: string;
  /**
   * Suffix for the age label
   * @property
   *
   * @default 'years old'
   */
  ageLabelSuffix?: string;
  /**
   * Label to describe the aid category of the child and country
   * @property
   *
   * @default 'needs in'
   */
  aidCategoryLabel?: string;
  /**
   * Selected, Available/Filtered profile data to display
   */
  childrenProfiles?: Children[];
  /**
   * Title for the filter component
   * @property
   *
   * @default 'Find another match'
   */
  filterTitle?: string;
  /**
   * Description for the filter component
   * @property
   *
   * @default '1,504 children are waiting to be sponsored'
   */
  filterDescription?: string;
  /**
   * Function to show another match
   * @property
   */
  showAnotherMatch?: ButtonEventCallback;
  /**
   * Donate button click function
   * @property
   */
  onDonateClick: ButtonEventCallback;
}

export const ChildProfile = ({
  childImage,
  videoSrc,
  name,
  details,
  age,
  country,
  gender,
  descriptions,
  sponsorButtonName,
  buttonPrefixName = 'Sponsor',
  greetings = 'Meet',
  ageLabelSuffix = 'years old',
  aidCategoryLabel = 'needs in',
  childrenProfiles: filteredData = [],
  filterTitle = 'Find another match',
  filterDescription = '{1,504} children are waiting to be sponsored',
  showAnotherMatch,
  onDonateClick,
}: ChildDetailsProps): ReactElement => {
  const [loading, setLoading] = useState(false);
  const buttonName = sponsorButtonName ?? `${buttonPrefixName}${' '}${name}`;
  const Age = `${age} ${ageLabelSuffix}`;
  const titleCountryInfo = `${name}'s ${aidCategoryLabel} ${country}`;
  const genderSource =
    gender === 'boy' ? 'icon-gender-boy' : 'icon-gender-girl';
  const filterDataLength = filteredData.length;

  const showAnotherMatchHandler: MouseEventHandler<HTMLButtonElement> = (
    event: ButtonMouseEventType
  ) => {
    if (showAnotherMatch) {
      showAnotherMatch?.(event);
    } else {
      setLoading(prev => !prev);
    }
  };

  const getCountryFlagName = (country: string) => {
    return country.toLowerCase().replace(/\s+/g, '-').trim();
  };

  return (
    <>
      <div className={styles.container}>
        <div className={styles.childDetails}>
          <div className={styles.imageContainer}>
            <div className={styles.greetings}>
              <p>{greetings}</p>
              <span className={styles.name}>{name}</span>
            </div>
            <VideoPlayer
              width="537"
              height="537"
              src={videoSrc}
              thumbnail={childImage}
              videoThumbnailContainerClassName={styles.videoThumbnailContainer}
              videoPlayerContainerClassName={styles.videoPlayerContainer}
              containerClassName={styles.videoContainer}
            />
          </div>
          <div className={styles.details}>
            <div className={styles.personalDetails}>
              <div className={styles.names}>
                <p>{greetings}</p>
                <span className={styles.name}>{name}</span>
                <div>
                  <span className={styles.country}>
                    <Icon
                      name={'icon-' + getCountryFlagName(country as string)}
                      size="24"
                      style={{ margin: 0 }}
                    />
                    <span>{country}</span>
                  </span>
                  <span className={styles.gender}>
                    <Icons
                      name={genderSource}
                      size="24"
                      style={{ margin: 0 }}
                    ></Icons>
                    <span className={styles.genderName}>{gender}</span>
                  </span>
                  <span className={styles.age}>
                    <img alt="icon" className={styles.ageIcon} src={BookIcon} />
                    <span>{Age}</span>
                  </span>
                </div>
              </div>
              <div className={styles.about}>
                <ReadMore
                  contents={[details ?? '']}
                  maxLines={3}
                  contentClassName={styles.content}
                  align="center"
                  expandButtonLabel="Show more"
                  collapseButtonLabel="Show less"
                />
              </div>
              <Button
                type="button"
                text={buttonName}
                className={styles.sponsorButton}
                onClick={onDonateClick}
              />
              {filterDataLength === 0 && (
                <Button
                  size="xl"
                  mode="secondary"
                  text="Find another child"
                  loading={loading}
                  onClick={showAnotherMatchHandler}
                  className={styles.findAnother}
                />
              )}
            </div>
            {filterDataLength !== 0 && (
              <div className={styles.filter}>
                <ProfileFilter
                  data={filteredData}
                  title={filterTitle}
                  description={filterDescription}
                  country={countryFilterOptions}
                  gender={genderFilterOptions}
                  age={ageFilterOptions}
                />
              </div>
            )}
          </div>
        </div>
        {descriptions ? (
          <div className={styles.countryInfo}>
            <h2 className={styles.title}>{titleCountryInfo}</h2>
            <span className={styles.info}>
              <ReadMore
                contents={descriptions}
                maxLines={3}
                expandButtonLabel="Show more"
                collapseButtonLabel="Show less"
              />
            </span>
          </div>
        ) : (
          ''
        )}
      </div>
    </>
  );
};

export default ChildProfile;
