import type { Meta, StoryObj } from '@storybook/react';
import type { ToastProps } from 'ui';
import { Button, Toast, Toaster, useToast } from 'ui';
import type { FC } from 'react';
import React from 'react';

export default {
  title: 'Components/Toast',
  component: Toast,
  parameters: {
    layout: 'padded',
  },
  argTypes: {
    title: {
      control: 'text',
      defaultValue: 'This is a toast message',
    },
    variant: {
      control: 'select',
      options: ['default', 'destructive'],
      defaultValue: 'default',
    },
  },
} as Meta<typeof Toast>;

type ToastStory = StoryObj<React.ComponentProps<typeof Toast>>;

export const DefaultToast: FC<ToastProps> = ({ title, variant }) => {
  const { toast } = useToast();

  return (
    <div>
      <Button onClick={() => toast({ title, variant })} variant='outline'>
        Show toast
      </Button>
      <Toaster />
    </div>
  );
};
export const SingleToast: ToastStory = {
  name: 'SingleToast',
  args: { title: 'This is a toast message', variant: 'default' },
  render: args => <DefaultToast {...args} />,
};

SingleToast.args = {
  title: 'This is a toast message',
  variant: 'default',
};
