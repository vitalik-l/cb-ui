import React from 'react';
import { Story } from '@storybook/react';

// local files
import { index } from '../../story/createStory';
import { Popper } from './index';

const story = index({
  title: 'Popper',
  component: Popper,
  style: {
    margin: '10em',
  },
  argTypes: {
    placement: {
      control: {
        type: 'select',
        options: [
          'bottom-start',
          'bottom',
          'bottom-end',
          'top-start',
          'top',
          'top-end',
          'left-start',
          'left',
          'left-end',
          'right-start',
          'right',
          'right-end',
        ],
      },
    },
  },
  args: {
    placement: 'bottom',
  },
});

export const Template: Story = (args) => {
  const [anchorEl, setAnchorEl] = React.useState();

  const onClick = (event: any) => {
    setAnchorEl(anchorEl ? null : event.target);
  };

  return (
    <div>
      <button onClick={onClick}>Toggle Popper</button>
      <Popper {...args} anchorEl={anchorEl} open={!!anchorEl}>
        <div>Popper content</div>
      </Popper>
    </div>
  );
};
Template.storyName = 'Popper';

export const Scale: Story = (args) => {
  const [anchorEl, setAnchorEl] = React.useState();

  const onClick = (event: any) => {
    setAnchorEl(anchorEl ? null : event.target);
  };

  return (
    <div style={{
      transform: 'scale(0.8)',
    }}>
      <button onClick={onClick}>Toggle Popper</button>
      <Popper {...args} anchorEl={anchorEl} open={!!anchorEl}>
        <div>Popper content</div>
      </Popper>
    </div>
  );
}

export default story;
