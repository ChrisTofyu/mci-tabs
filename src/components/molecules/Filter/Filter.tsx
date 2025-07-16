import React, { useState } from 'react';

import Button from '@radix-styles/atoms/Button';
import Modal from '@radix-styles/molecules/Modal';
import { Select } from '@radix-ui/themes';
import Flex from '@radix-styles/atoms/Flex';

import styles from './Filter.module.scss';

export interface Country {
  /**
   * Name of the country
   * @property
   */
  name: string;
  /**
   * Country code
   * @property
   */
  code: string;
}

export interface Gender {
  /**
   * Gender Name
   * @property
   */
  name: string;
  /**
   * Gender Code
   * @property
   */
  code: string;
}

export interface Age {
  /**
   * Age Name
   * @property
   */
  name: string;
  /**
   * Age Code
   * @property
   */
  code: string;
}

export interface FilterDataProps {
  /**
   * Name of the child
   * @property
   */
  country: string;
  /**
   * Gender of the child
   */
  gender: string;
  /**
   * Age of the child
   * @property
   */
  age: string;
}

export interface Children extends Omit<FilterDataProps, 'age'> {
  /**
   * Name of the child
   * @property
   */
  name: string;
  /**
   * Age of the child
   * @property
   */
  age: number;
  /**
   * Image of the child
   * @property
   */
  src: string;
}

export interface FilterProps {
  /**
   * Filtered data to display the children profile
   * @property
   */
  data: Array<Children>;
  /**
   * Country list to the filters
   * @property
   */
  countryFilterOptions: Array<Country>;
  /**
   * Placeholder for country dropdown options
   * @property
   */
  countryPlaceholder?: string;
  /**
   * Gender list to the filters
   * @property
   * @default 'Any Country'
   */
  genderFilterOptions: Array<Gender>;
  /**
   * Placeholder for gender dropdown options
   * @property
   * @default 'Any Gender'
   */
  genderPlaceholder?: string;
  /**
   * Age list to the filter
   * @property
   */
  ageFilterOptions: Array<Age>;
  /**
   * Placeholder for age dropdown options
   * @property
   * @default 'Any Age'
   */
  agePlaceholder?: string;
  /**
   * Title of the filter
   * @property
   */
  title: string;
  /**
   * Description of the filter
   * @property
   */
  description: string;
  /**
   * Name of the search button
   * @property
   * @default 'Search'
   */
  searchButtonName?: string;
  /**
   * Name of the clear button
   * @property
   * @default 'Clear Filters'
   */
  clearButtonName?: string;
  /**
   * Name of the filter button
   * @property
   * @default 'Filter'
   */
  filterButtonName?: string;
  /**
   * Method to apply the new filter
   * @property
   */
  applyFilter: (data: Children[]) => void;
}

export const Filter = ({
  data,
  countryFilterOptions,
  genderFilterOptions,
  ageFilterOptions,
  title,
  description,
  filterButtonName = 'Filter',
  applyFilter,
  countryPlaceholder = 'Any Country',
  genderPlaceholder = 'Any Gender',
  agePlaceholder = 'Any Age',
  searchButtonName = 'Search',
  clearButtonName = 'Clear Filters',
}: Readonly<FilterProps>): React.ReactElement => {
  const initialState = {
    country: '',
    gender: '',
    age: '',
  };
  const [showFilter, setShowFilter] = useState(false);
  const [filterCount, setFilterCount] = useState(0);
  const [filter, setFilter] = useState(initialState);

  const updateFilterCriterion = (field: string, value: string | number) => {
    const updatedFilter = {
      ...filter,
      [field]: value,
    };
    setFilter(updatedFilter);
  };

  const countValues = (data: FilterDataProps): number => {
    return Object.values(data).filter(
      value => value !== null && value !== undefined && value !== ''
    ).length;
  };

  const searchFilter = () => {
    const isAgeInRange = (age: number, range: string) => {
      if (!range) return true;
      const [min, max] = range.split('-').map(Number);
      return age >= min && age <= max;
    };

    setFilterCount(countValues(filter));

    const filteredData = data?.filter(item => {
      return (
        (filter?.gender === '' ||
          item.gender.toLowerCase().includes(filter?.gender.toLowerCase())) &&
        isAgeInRange(item.age, filter?.age) &&
        (filter?.country === '' ||
          item.country.toLowerCase().includes(filter?.country.toLowerCase()))
      );
    });

    applyFilter(filteredData);
    setShowFilter(false);
  };

  const closeFilter = () => setShowFilter(false);

  const buttonName =
    filterCount !== 0
      ? `${filterButtonName}-(${filterCount})`
      : filterButtonName;
  return (
    <Modal
      buttonName={buttonName}
      open={showFilter}
      setOpen={setShowFilter}
      className={styles.filterButton}
    >
      <div className={styles.filterContainer}>
        <div className={styles.header}>
          <p className={styles.crossIcon}>
            <Button
              size="sm"
              mode="transparent"
              ariaLabelName="Close Icon"
              icon="icon-close"
              onClick={closeFilter}
            />
          </p>
          <h3 className={styles.title}>{title}</h3>
          <p className={styles.description}>{description}</p>
        </div>
        <Flex direction="column" gap="8px" display="flex">
          <Select.Root
            value={filter.country}
            onValueChange={value => updateFilterCriterion('country', value)}
          >
            <Select.Trigger
              className={styles.selectTrigger}
              placeholder={filter.country ? filter.country : countryPlaceholder}
            />
            <Select.Content className={styles.selectContent} position="popper">
              <Select.Group>
                <Select.Label>{countryPlaceholder}</Select.Label>
                {countryFilterOptions.map(option => (
                  <Select.Item key={option.code} value={option.name}>
                    {option.name}
                  </Select.Item>
                ))}
              </Select.Group>
            </Select.Content>
          </Select.Root>

          <Select.Root
            value={filter.gender}
            onValueChange={value => updateFilterCriterion('gender', value)}
          >
            <Select.Trigger
              className={styles.selectTrigger}
              placeholder={filter.gender ? filter.gender : genderPlaceholder}
            />
            <Select.Content className={styles.selectContent} position="popper">
              <Select.Group>
                <Select.Label>{genderPlaceholder}</Select.Label>
                {genderFilterOptions.map(option => (
                  <Select.Item key={option.code} value={option.name}>
                    {option.name}
                  </Select.Item>
                ))}
              </Select.Group>
            </Select.Content>
          </Select.Root>

          <Select.Root
            value={filter.age}
            onValueChange={value => updateFilterCriterion('age', value)}
          >
            <Select.Trigger
              className={styles.selectTrigger}
              placeholder={filter.age ? filter.age : agePlaceholder}
            />
            <Select.Content className={styles.selectContent} position="popper">
              <Select.Group>
                <Select.Label>{agePlaceholder}</Select.Label>
                {ageFilterOptions.map(option => (
                  <Select.Item key={option.code} value={option.name}>
                    {option.name}
                  </Select.Item>
                ))}
              </Select.Group>
            </Select.Content>
          </Select.Root>
        </Flex>
        <div className={styles.actionContainer}>
          <Button
            mode="primary"
            className={styles.searchFilter}
            onClick={searchFilter}
            text={searchButtonName}
          />
          <Button
            mode="secondary"
            className={styles.clearFilter}
            onClick={() => setFilter(initialState)}
            text={clearButtonName}
          />
        </div>
      </div>
    </Modal>
  );
};

export default Filter;
