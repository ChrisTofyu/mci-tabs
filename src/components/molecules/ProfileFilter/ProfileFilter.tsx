import React, { useEffect, useState } from 'react';

import Filter, {
  Age,
  Children,
  Country,
  Gender,
} from '@components/molecules/Filter';
import ImageCarousel, { SlideProp } from '@components/molecules/ImageCarousel';

import styles from './ProfileFilter.module.scss';

const initializeProfile = (
  activeProfile?: SlideProp,
  profiles?: SlideProp[]
) => {
  const filteredList = profiles ?? [];
  return activeProfile ? [activeProfile, ...filteredList] : [...filteredList];
};

export interface ProfileFilterProps {
  /**
   * Children profile informations to inject the filter
   * @property
   */
  data: Array<Children>;
  /**
   * Country Collection to set the filter selection
   * @property
   */
  country: Array<Country>;
  /**
   * Gender collection to set the filter selection
   * @property
   */
  gender: Array<Gender>;
  /**
   * Age list for filter selection
   * @property
   */
  age: Array<Age>;
  /**
   * Title for filter component
   * @property
   */
  title: string;
  /**
   * Description for filter component
   */
  description: string;
  /**
   * Selected profile to display
   * @property
   */
  selectedProfile?: SlideProp;
  /**
   * Name of the filter
   */
  filterButtonName?: string;
}

export const ProfileFilter = ({
  data,
  country,
  gender,
  age,
  title,
  filterButtonName = 'Filter',
  description,
  selectedProfile = {
    src: 'https://images.pexels.com/photos/2113709/pexels-photo-2113709.jpeg',
    tooltip: '',
    tooltipTitle: '',
  },
}: ProfileFilterProps) => {
  const [items, setItems] = useState<SlideProp[]>(() =>
    initializeProfile(selectedProfile)
  );

  useEffect(() => {
    initializeProfile(selectedProfile, items);
  }, [selectedProfile]);

  const handlerFilter = (data: Children[]) =>
    setItems(data?.map(({ src }) => ({ src })));

  return (
    <div className={styles.tinyContainer}>
      <div className={styles.mainContainer}>
        <div className={styles.header}>
          <p className={styles.childFilter}>{description}</p>
          <Filter
            filterButtonName={filterButtonName}
            applyFilter={handlerFilter}
            data={data}
            countryFilterOptions={country}
            genderFilterOptions={gender}
            ageFilterOptions={age}
            title={title}
            description={description}
          />
        </div>
        <div className={styles.slider}>
          {data.length === 0 ? (
            <span className={styles.emptyMsg}>No Profile Matched</span>
          ) : (
            <ImageCarousel slides={data} mode="thumbnail" />
          )}
        </div>
      </div>
    </div>
  );
};

export default ProfileFilter;
