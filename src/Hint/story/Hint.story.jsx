import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import {
  withKnobs, text, boolean, number, select,
} from '@storybook/addon-knobs';

// styles
import './style.scss';
import '../styles/default.scss';

import Hint from '..';

const stories = storiesOf('Hint', module);
stories.addDecorator(withKnobs);

stories.add('default', () => (
  <div className="story-Hint--default">
    <div>
      <Hint
        show
        arrowSide={select('side of arrow', ['left', 'top', 'right', 'bottom'], 'right')}
        arrowAlign={select('align arrow', ['start', 'center', 'end'], 'center')}
        renderTo={false}
        title="Select Risk"
        text="Amount Here!"
      />
    </div>
  </div>
));
