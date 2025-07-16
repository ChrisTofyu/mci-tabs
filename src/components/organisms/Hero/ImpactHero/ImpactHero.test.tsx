import React from 'react';
import { render } from '@testing-library/react';
import ImpactHero from './ImpactHero';

import ImpactHeroImage from '@assets/images/ImpactHero.svg';

describe('Impact Hero Organism', () => {
  it('Impact Hero Organism should render successfully', () => {
    const { baseElement } = render(
      <ImpactHero
        title="1"
        subTitle="person reached globally"
        description="You’re not just donating—you’re transforming lives."
        ImpactHeroImage={ImpactHeroImage}
        bottomDesc="Did you know: for every $50-$100 donated, a new life is reached!"
      />
    );
    expect(baseElement).toMatchSnapshot();
  });
});
