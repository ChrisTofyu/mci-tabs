import React from 'react';

import { render } from '@testing-library/react';
import { childProfiles } from './ChildProfile.stories';

import ChildProfile, { Gender } from './ChildProfile';

describe('ChildProfile', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <ChildProfile
        country={childProfiles[0].country}
        age={childProfiles[0].age}
        gender={childProfiles[0].gender as unknown as Gender}
        childImage={childProfiles[0].src}
        name={childProfiles[0].name}
        details="My name is Ashraful Siam. I live with my parents. I have 2 brothers and one sister. I am in Grade 4. I am currently enrolled in primary school and my favourite subject is my national language. I like to play cricket. I am in good health."
        videoSrc="https://www.youtube.com/embed/J2ogs029GVg?si=GRnGAS3WvToc-CXL"
        descriptions={[
          'Despite the recent strengthening of child protection laws, children in Bolivia continue to face abuse and exploitation. Domestic violence and school bullying are widespread in the country. Women and girls are especially at risk of violence and sexual assault.',
          'Bolivia has the seventh highest income inequality in the world and nearly half of Bolivians live in poverty. More than one million children work instead of going to school and are often exploited. An estimated one quarter of Bolivian children under the age of five suffer from stunting.',
          'In Bolivia, 1 in 3 children are engaged in child labor. Child labor is most prevalent in rural areas, where children work in agriculture, mining, and domestic service. Children are also exploited in the commercial.',
          'Bolivia has the highest rate of child labor in South America. Child labor is most prevalent in rural areas, where children work in agriculture, mining, and domestic service. Children are also exploited in the commercial.',
        ]}
        onDonateClick={jest.fn()}
      />
    );
    expect(baseElement).toMatchSnapshot();
  });
});
