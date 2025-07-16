import React, { useEffect, useState } from 'react';
import { Meta, StoryObj } from '@storybook/react';
import Icons from '@components/atoms/Icons';

const Assets = () => {
  const [assetFiles, setAssetFiles] = useState<
    {
      name: string | undefined;
      folder: string | undefined;
      path: string | undefined;
    }[]
  >([]);
  const format = (name?: string) =>
    name?.replace(/([a-z0-9])([A-Z])/g, '$1-$2')?.toLowerCase() ?? '';
  useEffect(() => {
    const fetchAssets = () => {
      try {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        const modules = import.meta.glob('../../../assets/icons/**/*', {
          eager: true,
          query: '?url',
          import: 'default',
        }); // This method leverages Vite's built-in glob import functionality.
        const files = Object.keys(modules).map(key => {
          const values = key.split('/');
          const name = values.pop()?.trim()?.split('.')[0];
          const folder = values.pop();
          const path = modules[key] as string | undefined;
          return { name, folder, path };
        });

        setAssetFiles(files);
      } catch (error) {
        console.error('Error fetching assets:', error);
      }
    };

    fetchAssets();
  }, []);

  return (
    <div>
      <h2>Icons:</h2>
      <ul
        style={{
          listStyle: 'none',
          padding: '0',
          display: 'flex',
          gap: '20px',
          flexWrap: 'wrap',
        }}
      >
        {assetFiles.map(({ path, name }) => {
          const iconName = 'icon-' + format(name);
          return (
            <li
              key={path}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <a
                href={path}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  color: 'black',
                }}
              >
                <Icons name={iconName} size="40" />
              </a>
              <span>{iconName}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

const meta = {
  title: 'Library/Atoms/Icons',
  component: Assets,
  parameters: {
    layout: 'center',
  },
  decorators: [Story => <Story />],
} satisfies Meta<typeof Assets>;

export default meta;

type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const IconsPreview: Story = {
  args: {},
};
