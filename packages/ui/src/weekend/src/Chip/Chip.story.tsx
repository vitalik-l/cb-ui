import React from 'react';
import { Story } from '@storybook/react';

// local files
import { createStory } from '../../story';
import { Chip } from './Chip';

const story = createStory({
  title: 'Chip',
  component: Chip,
  argTypes: {
    value: { control: 'text' },
  },
});

const Template = (args: any) => <Chip {...args} />;

export const Default: Story = Template.bind({});
Default.storyName = 'Chip';

export default story;
