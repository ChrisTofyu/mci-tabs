import React from 'react';

import { render } from '@testing-library/react';
import Modal from './Modal';

describe('Modal', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <Modal buttonName="Filter Button">
        <>
          <h1>Title</h1>
          <p>Content</p>
        </>
      </Modal>
    );
    expect(baseElement).toMatchSnapshot();
  });
});
