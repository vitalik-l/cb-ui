import React from 'react';
import { Story } from '@storybook/react';
import { ButtonBase } from '@cb-general/core/ButtonBase';
import { ButtonGroup } from '@cb-general/core/ButtonGroup';

// local files
import { createStory } from '../createStory';

const story = createStory({
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
