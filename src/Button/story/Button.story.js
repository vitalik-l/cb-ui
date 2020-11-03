import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs } from '@storybook/addon-knobs';
import classNames from 'classnames';
import themeSelect from '../../utils/themeSelect';

import Button from '..';
import './style.scss';

const stories = storiesOf('Button', module);
stories.addDecorator(withKnobs);

stories.add('default', () => (
  <div className={classNames('story-Button', themeSelect())}>
    <Button onClick={action('onClick')}>Default</Button>
  </div>
));

stories.add('div', () => (
  <div className={classNames('story-Button', themeSelect())}>
    <Button element="div" onClick={action('onClick')}>
      This is a div button
    </Button>
  </div>
));
