import React from 'react';
import { render } from '@testing-library/react';
import Text from '@radix-styles/atoms/Text';
import SmallCard from './SmallCard';

describe('Small Card', () => {
  it('Should Primary mode with size 1 render successfully', () => {
    const { baseElement } = render(
      <SmallCard size="1" mode="primary">
        <Text>
          {
            'World Vision Canada is a Christian relief, development, and advocacy organization working to create lasting change in the lives of children and families. (To accommodate up to five lines of text).'
          }
        </Text>
      </SmallCard>
    );
    expect(baseElement).toMatchSnapshot();
  });

  it('Should inverse mode with Size 2 render successfully', () => {
    const { baseElement } = render(
      <SmallCard size="2" mode="inverse">
        <Text>
          {
            'World Vision Canada is a Christian relief, development, and advocacy organization working to create lasting change in the lives of children and families. (To accommodate up to five lines of text).'
          }
        </Text>
      </SmallCard>
    );
    expect(baseElement).toMatchSnapshot();
  });
});
