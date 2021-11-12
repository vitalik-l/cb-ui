import React from 'react';
import { ClickAwayListener } from '@cb-general/core/ClickAwayListener';
import { Story } from '@storybook/react';
import { createStory } from '../../story';
import { PopoverPanel } from './index';

const story = createStory({
  title: 'PopoverPanel',
  component: PopoverPanel,
  argTypes: {
    classes: { control: { type: null } },
  },
});

export const Template: Story = ({ classes, ...args }) => {
  const [open, setOpen] = React.useState(false);

  return (
    <div>
      <button onClick={() => setOpen(true)}>Open</button>
      {open && (
        <ClickAwayListener onClickAway={() => setOpen(false)}>
          <PopoverPanel {...args} style={{ marginTop: '4rem' }}>
            Popover content
          </PopoverPanel>
        </ClickAwayListener>
      )}
    </div>
  );
};
Template.storyName = 'PopoverPanel';

export default story;
