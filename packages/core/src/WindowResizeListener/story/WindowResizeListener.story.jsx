import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';

import WindowResizeListener from '../index';
import useWindowSize from '../useWindowSize';

const stories = storiesOf('WindowResizeListener', module);
stories.addDecorator(withKnobs);

function App() {
  const [windowWidth, windowHeight] = useWindowSize();

  return (
    <div
      style={{
        background: 'yellow',
        width: windowWidth,
        height: windowHeight,
        margin: '0 auto',
        transition: 'all 0.5s',
      }}
    />
  );
}

stories.add('default', () => (
  <WindowResizeListener timeout={0}>
    <App />
  </WindowResizeListener>
));
