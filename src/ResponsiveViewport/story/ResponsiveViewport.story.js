import React from 'react';
import { storiesOf } from '@storybook/react';
import {
  withKnobs, object
} from '@storybook/addon-knobs';

import ResponsiveViewport from '..';
import useViewport from '../useViewport';

const stories = storiesOf('ResponsiveViewport', module);
stories.addDecorator(withKnobs);

function App() {
  const { viewportWidth, viewportHeight } = useViewport();

  return (
    <div style={{
      background: 'yellow',
      width: viewportWidth,
      height: viewportHeight,
      margin: '0 auto',
      transition: 'all 0.5s',
    }}
    />
  );
}

stories.add('default', () => {
  return (
    <ResponsiveViewport
      minRatio={4 / 3}
      maxRatio={21 / 9}
      horizontal={object('horizontal')}
      vertical={object('vertical')}
      timeout={0}
    >
      <App/>
    </ResponsiveViewport>
  );
});