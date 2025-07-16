import React from 'react';
import { render } from '@testing-library/react';
import MediaCardTemplate from './MediaCardTemplate';

describe('Media Card', () => {
  it('Video Media Card should render successfully', () => {
    const { baseElement } = render(
      <MediaCardTemplate
        date="Mar 4, 2025"
        mediaType="video"
        id="sample-123"
        videoSrc="https://www.youtube.com/embed/J2ogs029GVg?si=GRnGAS3WvToc-CXL"
        subHead="Proin congue lorem sit amet augue feugiat, eu placerat odio interdum. Mauris tincidunt arcu ut justo sollicitudin, eget volutpat magna ultrices. Nam tempus dapibus vehicula. Morbi blandit molestie metus vitae rhoncus. In in turpis sed ante euismod congue. Duis eu risus a nisl dapibus ultricies. Sed ultrices auctor lorem a finibus."
        thumbnail="https://images.pexels.com/photos/2113709/pexels-photo-2113709.jpeg"
        title="Video: Burundi schools serve up success one plate at a time"
      />
    );
    expect(baseElement).toMatchSnapshot();
  });

  it('Image Media Card should render successfully', () => {
    const { baseElement } = render(
      <MediaCardTemplate
        mediaType="image"
        date="Mar 4, 2025"
        id="sample-456"
        imageSrc="https://images.pexels.com/photos/2113709/pexels-photo-2113709.jpeg"
        subHead="Proin congue lorem sit amet augue feugiat, eu placerat odio interdum. Mauris tincidunt arcu ut justo sollicitudin, eget volutpat magna ultrices. Nam tempus dapibus vehicula. Morbi blandit molestie metus vitae rhoncus. In in turpis sed ante euismod congue. Duis eu risus a nisl dapibus ultricies. Sed ultrices auctor lorem a finibus."
        title="Video: Burundi schools serve up success one plate at a time"
      />
    );
    expect(baseElement).toMatchSnapshot();
  });

  it('Article Card should render successfully', () => {
    const { baseElement } = render(
      <MediaCardTemplate
        mediaType="image"
        date="Mar 4, 2025"
        id="sample-678"
        imageSrc="https://images.pexels.com/photos/2113709/pexels-photo-2113709.jpeg"
        subHead="Proin congue lorem sit amet augue feugiat, eu placerat odio interdum. Mauris tincidunt arcu ut justo sollicitudin, eget volutpat magna ultrices. Nam tempus dapibus vehicula. Morbi blandit molestie metus vitae rhoncus. In in turpis sed ante euismod congue. Duis eu risus a nisl dapibus ultricies. Sed ultrices auctor lorem a finibus."
        title="Video: Burundi schools serve up success one plate at a time"
        isArticle
        size="2"
        imgAspectRatio="1:1"
      />
    );
    expect(baseElement).toMatchSnapshot();
  });
});
