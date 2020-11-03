import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs } from '@storybook/addon-knobs';
import classNames from 'classnames';

import ClickAwayListener from '..';

const stories = storiesOf('ClickAwayListener', module);
stories.addDecorator(withKnobs);

stories.add('default', () => (
  <div className={classNames('story-ClickAwayListener')}>
    <ClickAwayListener onClickAway={action('click away')}>
      <div>See action by clicking away</div>
    </ClickAwayListener>
  </div>
));
