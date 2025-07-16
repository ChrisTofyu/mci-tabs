import React from 'react';
import { render } from '@testing-library/react';
import List, { ListProps } from './List';

const mockData = [
  {
    name: 'Raw Hope monthly pledge',
    amount: 59.0,
    date: 'Dec 28, 2023',
  },
  {
    name: 'Water Appeal Christmas Donation',
    amount: 49.0,
    date: 'Nov 28, 2023',
  },
  {
    name: 'Monthly gift',
    amount: 59.0,
    date: 'Aug 28, 2023',
  },
  {
    name: 'One time gift',
    amount: 120.0,
    date: 'Aug 28, 2023',
  },
];
const keyMapper: ListProps['keyMapper'] = {
  title: 'name',
  subTitle: 'date',
  endContent: 'amount',
};
describe('List Component', () => {
  it('renders list items based on data', () => {
    const { baseElement } = render(
      <List size="small" data={mockData} keyMapper={keyMapper} />
    );
    expect(baseElement).toMatchSnapshot();
  });
});
