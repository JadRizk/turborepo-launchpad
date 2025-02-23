import type { Meta, StoryObj } from '@storybook/react';
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogClose,
  Button,
} from 'ui';

const meta: Meta = {
  title: 'Components/Dialog',
  component: Dialog,
  argTypes: {
    open: { control: 'boolean' },
  },
};

export default meta;

type Story = StoryObj;

export const Default: Story = {
  render: args => (
    <Dialog {...args}>
      <DialogTrigger asChild>
        <Button>Open Dialog</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Dialog Title</DialogTitle>
          <DialogDescription>
            This is a description of the dialog. It provides context and
            details.
          </DialogDescription>
        </DialogHeader>
        <div className='flex justify-end space-x-2'>
          <DialogClose asChild>
            <Button variant='outline'>Cancel</Button>
          </DialogClose>
          <Button>Confirm</Button>
        </div>
      </DialogContent>
    </Dialog>
  ),
};
