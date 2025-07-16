import React from 'react';
import { render } from '@testing-library/react';
import GlobeHero from './GlobeHero';

import GlobeHeroImage from '@assets/images/GlobeHero.svg';

describe('Globe Hero Organism', () => {
  it('Globe Hero Organism should render successfully', () => {
    const { baseElement } = render(
      <GlobeHero
        title="7.6 Million"
        subTitle="People Reached Globally"
        description="Your support is transforming lives around the world."
        progressValue={33}
        globeHeroImage={GlobeHeroImage}
        goalLabel="Our 2025 Goal="
        goalValue="Reach 7 Million Lives"
        progressLabel="Overall Progress"
        lives="3.01 million lives"
      />
    );
    expect(baseElement).toMatchSnapshot();
  });
});
