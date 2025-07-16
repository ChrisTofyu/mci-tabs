import type { Preview } from '@storybook/react';

import './preview.scss';
import '../src/index.scss';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    options: {
      storySort: {
        method: 'alphabetical',
        locales: 'en-US',
      },
    },
  },
};

export default preview;
