import React from 'react';
import { Story } from '@storybook/react';

// local files
import { createStory } from '../../story';
import { ChipsStack } from './index';
import { Chip } from '../Chip';

const story = createStory({
  title: 'ChipsStack',
  component: ChipsStack,
  style: {
    marginTop: '5em',
    marginLeft: '5em',
  },
});

export const Template: Story = (args) => {
  const chipsStackRef: any = React.useRef();

  const onAnimationEnd = () => {
    console.log('animated', chipsStackRef.current.animated);
  };

  return (
    <div>
      <ChipsStack {...args} ref={chipsStackRef} onAnimationEnd={onAnimationEnd}>
        <Chip value={1} />
        <Chip value={5} />
        <Chip value={10} />
      </ChipsStack>
      <Chip
        value={100}
        id="chipsAnimationTarget"
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
        }}
      />
    </div>
  );
};
Template.storyName = 'ChipsStack';

export const AnimateMount = Template.bind({});
AnimateMount.args = {
  animate: 'target',
}

export default story;
