import React from 'react';
import ArticlesHero from './ArticlesHero';
import { render } from '@testing-library/react';

describe('Article', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <ArticlesHero
        imagePosition="top"
        imageUrl="https://stg-beta.worldvision.ca/adobe/dynamicmedia/deliver/dm-aid--3a8bc598-805b-426b-aad6-d88cfe303ebb/childsponsorship.jpeg"
        imageAltText="dummy alt"
        imageFallback=""
        articleTitle="An education interrupted: A Venezuelan’s story of escaping oppression"
        articleDescription="In 2023, we helped 16.5+ million of the world’s most vulnerable children and families overcome poverty."
        authorName="Melanie Ramos"
        authoredDate="2025-01-11"
        className=""
      />
    );
    expect(baseElement).toMatchSnapshot();
  });
});
