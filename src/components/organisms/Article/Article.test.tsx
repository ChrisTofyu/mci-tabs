import React from 'react';
import { render } from '@testing-library/react';
import Article from './Article';
import { articleStroyData as article } from './Article.stories';

describe('Article Organism', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <Article
        article={article}
        asset={{
          prefix: '',
        }}
      />
    );
    expect(baseElement).toMatchSnapshot();
  });
});
