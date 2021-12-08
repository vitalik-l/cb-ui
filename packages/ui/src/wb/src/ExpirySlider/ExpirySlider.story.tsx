import React from 'react';
import { Story } from '@storybook/react';
import { createStory } from '../../story';
import { ExpirySlider, ExpirySliderItem } from './index';

const story = createStory({
  title: 'ExpirySlider',
  component: ExpirySlider,
});

export const Template: Story = (args) => {
  const [value, setValue] = React.useState();
  return (
    <ExpirySlider {...args} value={value} onChange={setValue}>
      <ExpirySliderItem>
        15
        <br />
        sec
      </ExpirySliderItem>
      <ExpirySliderItem>
        30
        <br />
        sec
      </ExpirySliderItem>
      <ExpirySliderItem>
        60
        <br />
        sec
      </ExpirySliderItem>
      <ExpirySliderItem>
        900
        <br />
        sec
      </ExpirySliderItem>
    </ExpirySlider>
  );
};

Template.storyName = 'ExpirySlider';

export default story;
