import React from 'react';
import { Story } from '@storybook/react';

// local files
import { createStory } from '../createStory';
import { ExampleComponent } from './index';

const story = createStory({
  title: 'ExampleComponent',
  component: ExampleComponent,
});

// remove next comment
// eslint-disable-next-line
const Template: Story = (args) => <ExampleComponent {...args} />;

// uncomment next line
// export const Default: Story = Template.bind({});

// add this if one child component
// Template.storyName = 'ExampleComponent';

export default story;
