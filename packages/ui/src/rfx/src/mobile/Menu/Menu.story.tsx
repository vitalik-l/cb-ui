import React from 'react';
import { Story } from '@storybook/react';

// local files
import { createStory } from '../../../story';
import { Menu, MenuSeparator, MenuItemButton } from './index';
import { ButtonGroup } from '../../../../core/src/ButtonGroup';

const story = createStory({
  title: 'mobile/Menu',
  component: Menu,
  style: {
    width: '20rem',
    minHeight: '20rem',
  },
});

export const MenuTemplate: Story = (args) => {
  const [value, setValue] = React.useState('');

  const onChange = (value) => {
    if (value) setValue(value);
  };

  return (
    <Menu {...args}>
      <ButtonGroup value={value} onChange={onChange} autoValue={false}>
        <MenuItemButton value="trading">Trading</MenuItemButton>
        <MenuSeparator />
        <MenuItemButton className="text-yellow">Logout</MenuItemButton>
      </ButtonGroup>
    </Menu>
  );
};
MenuTemplate.storyName = 'Menu';

export default story;
