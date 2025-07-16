import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Theme } from '@radix-ui/themes';
import '@radix-ui/themes/styles.css';
import '@world-vision/wv360-core-library/dist/index.css';
import '@world-vision/wv360-core-library/dist/icons.css';

const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(
  <Theme>
    <App />
  </Theme>
);
