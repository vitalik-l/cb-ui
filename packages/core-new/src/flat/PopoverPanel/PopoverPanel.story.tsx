import React from 'react';
import { Story } from '@storybook/react';

// local files
import { createStory } from '../createStory';
import { PopoverPanel } from './index';

const story = createStory({
  title: 'PopoverPanel',
  component: PopoverPanel,
  argTypes: {
    classes: { control: { type: null } },
  }
});

export const Template: Story = ({classes, ...args}) => {
  const [open, setOpen] = React.useState(false);

  return (
    <div>
      <button onClick={() => setOpen(true)}>Open</button>
      {open &&
        <PopoverPanel {...args} onClose={() => setOpen(false)} style={{marginTop: '4rem'}}>
          Popover content
        </PopoverPanel>
      }
    </div>
  )
};
Template.storyName = 'PopoverPanel';

export default story;
