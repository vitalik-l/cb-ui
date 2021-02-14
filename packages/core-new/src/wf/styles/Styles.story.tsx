import React from 'react';
import { Story } from '@storybook/react';

// local files
import { createStory } from '../createStory';

const story = createStory({
  title: 'Styles',
  style: false,
});

// uncomment next line
export const Default: Story = () => (
  <>
    <h3 className="text-white">colors</h3>
    <div className="text-green">text-green</div>
    <div className="text-red">text-red</div>
  </>
);
Default.storyName = 'Styles';

export default story;
