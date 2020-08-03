import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import {
  withKnobs, boolean, select,
} from '@storybook/addon-knobs';

// styles
import '../styles/default.scss';

import Drawer from '..';

const stories = storiesOf('Drawer', module);
stories.addDecorator(withKnobs);

stories.add('default', () => (
  <Drawer
    open={boolean('open', true)}
    onRequestHide={action('onRequestHide')}
    position={select('position', ['left', 'right'], 'left')}
  >
    <div>
      Drawer content
    </div>
  </Drawer>
));
