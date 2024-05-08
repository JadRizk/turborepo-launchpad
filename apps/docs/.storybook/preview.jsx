import 'ui/styles/globals.css';

export default {
  decorators: [Story => <Story />],
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: { expanded: true },
    layout: 'centered',
  },
};
