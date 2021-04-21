import React from 'react';
import { Story } from '@storybook/react';

// local files
import { index } from '../../story/createStory';
import { Root } from '../Root';
import { Viewport } from './index';

const story = index({
  title: 'Viewport',
  component: Viewport,
  style: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export const Default: Story = (args) => (
  <Root>
    <Viewport
      minRatio={21 / 9}
      maxRatio={4 / 3}
      baseWidth={800}
      baseHeight={600}
      baseFontSize={16}
      style={{ background: 'black', color: 'white' }}
      {...args}
    >
      FONT size
    </Viewport>
  </Root>
);
Default.storyName = 'Viewport';

export default story;
