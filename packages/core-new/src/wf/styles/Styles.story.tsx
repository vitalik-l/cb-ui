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
  <div>
    <div>
      <h3 className="text-white">Colors</h3>
      <div className="text-green">text-green</div>
      <div className="text-red">text-red</div>
      <div className="text-yellow">text-yellow</div>
      <div className="text-orange">text-orange</div>
    </div>
    <div>
      <h3 className="text-white">Animations</h3>
      <div className="animate-in-trade text-green">animate-in-trade</div>
    </div>
  </div>
);
Default.storyName = 'Styles';

export default story;
