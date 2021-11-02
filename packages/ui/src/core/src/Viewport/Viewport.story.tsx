import React from 'react';
import { Story } from '@storybook/react';
import { createStory } from '../../story';
import { Root } from '../Root';
import { Viewport } from './index';
import styles from './ViewportStory.module.scss';

const story = createStory({
  title: 'Viewport',
  component: Viewport,
  style: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export const Default: Story = (args) => (
  <Root className={styles.root}>
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

export const Breakpoint: Story = Default.bind({});
Breakpoint.args = {
  breakpoint: (width: number) => {
    if (width < 300) {
      console.log('breakpoint');
      return 5;
    }
  },
};

export default story;
