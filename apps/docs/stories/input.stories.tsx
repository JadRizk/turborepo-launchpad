import type { Meta, StoryObj } from '@storybook/react';
import type { InputProps } from 'ui';
import { Input } from 'ui';

const meta: Meta<InputProps> = {
  title: 'Components/Input',
  component: Input,
  args: {
    type: 'text',
    placeholder: 'Enter text...',
    invalid: false,
  },
} satisfies Meta<typeof Input>;

export default meta;

type Story = StoryObj<InputProps>;

export const Default: Story = {};

export const Invalid: Story = {
  args: {
    invalid: true,
    placeholder: 'Invalid input',
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    placeholder: 'Disabled input',
  },
};
