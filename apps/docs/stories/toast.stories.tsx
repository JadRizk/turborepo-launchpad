import type { Meta, StoryObj } from '@storybook/react';
import type { FC } from 'react';
import type { ToastProps } from 'ui';
import { Button, Toast, Toaster, useToast } from 'ui';

export default {
  title: 'Components/Toast',
  component: Toast,
  parameters: {
    layout: 'centered',
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

type ToastStory = StoryObj<typeof Toast>;

const DefaultToast: FC<ToastProps> = ({ title, variant }) => {
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
