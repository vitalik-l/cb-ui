import React from 'react';
import { Story } from '@storybook/react';
import { createStory } from '../../story';

const story = createStory({
  title: 'Styles',
  style: false,
});

// uncomment next line
export const Default: Story = () => (
  <div>
    <div>
      <h3>Colors</h3>
      <div className="text-white">text-white</div>
      <div className="text-black">text-black</div>
    </div>
    <div>
      <h3>Sizes</h3>
      <div className="d-flex">
        <div>
          <b>rem</b>
          <div className="size-1">size-1</div>
          <div className="size-2">size-2</div>
          <div className="size-3">size-3</div>
        </div>
        <div className="ml-5">
          <b>em</b>
          <div className="size-1em">size-1em</div>
          <div className="size-2em">size-2em</div>
          <div className="size-3em">size-3em</div>
        </div>
      </div>
    </div>
  </div>
);
Default.storyName = 'Styles';

export default story;
