import React from 'react';
import { Story } from '@storybook/react';

// local files
import { ButtonBase } from '../ButtonBase';
import { ButtonGroup } from './ButtonGroup';
import { index } from '../../story/createStory';

const story = index({
  title: 'ButtonGroup',
  component: ButtonGroup,
});

const Template = () => {
  const [value, setValue] = React.useState();

  return (
    <ButtonGroup value={value} onChange={setValue}>
      <ButtonBase>One</ButtonBase>
      <ButtonBase>Two</ButtonBase>
      <ButtonBase>Three</ButtonBase>
    </ButtonGroup>
  );
};

export const Default: Story = Template.bind({});
Default.storyName = 'ButtonGroup';

export default story;
