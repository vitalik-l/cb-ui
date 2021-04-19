import React from 'react';

// local files
import { createStory } from '../createStory';
import { WindowResizeListener } from './WindowResizeListener';
import { useWindowSize } from './useWindowSize';

const story = createStory({
  title: 'WindowResizeListener',
  component: WindowResizeListener,
});

const ChildComponent = () => {
  const [windowWidth, windowHeight] = useWindowSize();

  return (
    <div
      style={{
        width: windowWidth,
        height: windowHeight,
        margin: '0 auto',
      }}
    >
      innerWidth: {windowWidth}
      <br />
      innerHeight: {windowHeight}
    </div>
  );
};

export const Template = (args: any) => (
  <WindowResizeListener {...args}>
    <ChildComponent />
  </WindowResizeListener>
);
Template.storyName = 'WindowResizeListener';

export default story;
