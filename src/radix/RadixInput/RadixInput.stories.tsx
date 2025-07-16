import "./RadixInput.scss"; // Ensure styles are imported for the story
import FormDemo from "./RadixInput";
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: "Components/FormDemo",
  component: FormDemo,
  parameters: {
    layout: "centered", // Center the component in the Storybook preview
  },
} satisfies Meta<typeof FormDemo>;

export default meta;
type Story = StoryObj<typeof meta>;
export const Text: Story = {
  args: {
	size: 'xl',
  },
}; 

