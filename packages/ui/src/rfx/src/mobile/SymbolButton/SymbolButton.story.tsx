import React from 'react';
import { Story } from '@storybook/react';

// local files
import { createStory } from '../../../story';
import { SymbolButton } from './index';

const story = createStory({
  title: 'mobile/SymbolButton',
  component: SymbolButton,
});

export const Template: Story = (args) => <SymbolButton {...args}>RED/BLACK</SymbolButton>;
Template.storyName = 'SymbolButton';

export default story;
