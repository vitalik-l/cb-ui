import React from 'react';
import { Story } from '@storybook/react';

// local files
import { createStory } from '../createStory';
import { Overlay } from './index';

const story = createStory({
  title: 'Overlay',
  component: Overlay,
});

export const Template: Story = () => {
  const [open, setOpen] = React.useState(false);

  return (
    <div>
      <button onClick={() => setOpen(true)}>Show</button>
      {open && (
        <Overlay onClick={() => setOpen(false)}>
          Overlay opened
        </Overlay>
      )}
    </div>
  );
};
Template.storyName = 'Overlay';

export default story;
