import React from 'react';
import { render } from '@testing-library/react';
import CardContainer from './CardContainer';

describe('Card Container', () => {
  it('Should render successfully', () => {
    const { baseElement } = render(<CardContainer>{'Hi'}</CardContainer>);
    expect(baseElement).toMatchSnapshot();
  });
});
