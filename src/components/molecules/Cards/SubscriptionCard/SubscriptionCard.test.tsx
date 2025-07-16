import React from 'react';
import { render } from '@testing-library/react';
import SubscriptionCard from './SubscriptionCard';

describe('Subscription Card', () => {
  it('Should Child Sponsorship Variant render successfully', () => {
    const { baseElement } = render(
      <SubscriptionCard
        alt="Child avatar unavailable"
        cardType="childSponsorship"
        dateOfBirth="Oct 15, 2016"
        description="Sponsored since 2025"
        location="Guatemala"
        src="/src/assets/images/childImage.svg"
        title="Bryner James"
      />
    );
    expect(baseElement).toMatchSnapshot();
  });

  it('Should Sponsor a child Variant render successfully', () => {
    const { baseElement } = render(
      <SubscriptionCard
        cardType="sponsorChild"
        title="Bryner James"
        description="Sponsored since 2025"
        onCardClick={() => console.log('clicked')}
      />
    );
    expect(baseElement).toMatchSnapshot();
  });
});
