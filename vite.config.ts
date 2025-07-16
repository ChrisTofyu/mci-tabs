import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@utils': path.resolve(__dirname, 'src/utils'),
      '@assets': path.resolve(__dirname, 'src/assets'),
      '@internal/types': path.resolve(__dirname, 'src/types'),
      '@components/atoms': path.resolve(__dirname, 'src/components/atoms'),
      '@components/molecules': path.resolve(
        __dirname,
        'src/components/molecules'
      ),
      '@components/organisms': path.resolve(
        __dirname,
        'src/components/organisms'
      ),
      '@radix-styles/atoms': path.resolve(__dirname, 'src/radix/atoms'),
      '@radix-styles/molecules': path.resolve(__dirname, 'src/radix/molecules'),
      '@radix-styles/organisms': path.resolve(__dirname, 'src/radix/organisms'),
    },
  },
});
