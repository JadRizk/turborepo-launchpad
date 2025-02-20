import type { Meta, StoryObj } from '@storybook/react';
import { Button } from 'ui';

const meta = {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    variant: {
      control: { type: 'select' },
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
      control: { type: 'select' },
      options: ['default', 'sm', 'lg', 'icon'],
    },
    asChild: {
      control: { type: 'boolean' },
    },
  },
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'A versatile button component with various styles and sizes.',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    children: 'Button',
    variant: 'default',
    size: 'default',
  },
  parameters: {
    docs: {
      description: {
        story: 'The default button style with standard size and appearance.',
      },
    },
  },
};

export const Variants: Story = {
  render: args => (
    <div className='inline-flex flex-wrap justify-center gap-4'>
      <Button {...args} variant='default'>
        Default
      </Button>
      <Button {...args} variant='destructive'>
        Destructive
      </Button>
      <Button {...args} variant='outline'>
        Outline
      </Button>
      <Button {...args} variant='secondary'>
        Secondary
      </Button>
      <Button {...args} variant='ghost'>
        Ghost
      </Button>
      <Button {...args} variant='link'>
        Link
      </Button>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Showcases all available button variants: default, destructive, outline, secondary, ghost, and link.',
      },
    },
  },
};

export const Sizes: Story = {
  render: args => (
    <div className='flex flex-wrap items-center justify-center gap-4'>
      <Button {...args} size='sm'>
        Small
      </Button>
      <Button {...args} size='default'>
        Default
      </Button>
      <Button {...args} size='lg'>
        Large
      </Button>
      <Button {...args} size='icon'>
        🔔
      </Button>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Demonstrates the different button sizes: small, default, large, and icon.',
      },
    },
  },
};
