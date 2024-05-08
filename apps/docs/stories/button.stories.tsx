import type { Meta, StoryObj } from '@storybook/react';
import { Button } from 'ui';

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    variant: {
      control: 'select',
      options: [
        'default',
        'destructive',
        'outline',
        'secondary',
        'ghost',
        'link',
      ],
    },
    size: {
      control: 'select',
      options: ['default', 'sm', 'lg', 'icon'],
      defaultValue: 'default',
    },
    asChild: {
      control: 'boolean',
    },
  },
} as Meta<typeof Button>;

type Story = StoryObj<React.ComponentProps<typeof Button>>;

export const Basic: Story = {
  render: args => <Button {...args} />,
  parameters: {
    docs: {
      story: { autoplay: true },
    },
  },
};

Basic.args = {
  children: 'Default Button',
  variant: 'default',
  size: 'default',
  asChild: false,
  loading: false,
};
