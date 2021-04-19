import React from 'react';
import { Story } from '@storybook/react';

// local files
import { createStory } from '../createStory';
import { Countdown } from './Countdown';

const story = createStory({
  title: 'Countdown',
  component: Countdown,
  argTypes: {
    value: { control: 'text' },
  },
  args: {
    value: '60',
  },
});

const Template = (args: any) => (
  <div style={{ width: '10em' }}>
    <Countdown {...args} />
  </div>
);

export const Default: Story = Template.bind({});
Default.storyName = 'Countdown';

export default story;
