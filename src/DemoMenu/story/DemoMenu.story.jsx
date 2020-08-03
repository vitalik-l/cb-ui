import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import {
  withKnobs, boolean,
} from '@storybook/addon-knobs';
import classNames from 'classnames';
import themeSelect from '../../utils/themeSelect.js';

// styles
import './style.scss';

import DemoMenu from '..';

const stories = storiesOf('DemoMenu', module);
stories.addDecorator(withKnobs);

stories.add('DemoMenu', () => (
  <div className={classNames('demo-menu-story', themeSelect())}>
    <DemoMenu
      open={boolean('open', false)}
      onRequestHide={action('onRequestHide')}
      games={[
        { game: 'weekendbinary', url: 'http://${LOCAL_HOST}:8085' },
        { game: 'roulettefx', url: 'http://${LOCAL_HOST}:8086' },
        { game: 'wallstbaccarat', url: 'http://${LOCAL_HOST}:8084' },
        { game: 'wallstroulette', url: 'http://${LOCAL_HOST}:8083' },
        { game: 'weekendforex', url: 'http://${LOCAL_HOST}:8082' },
        { game: 'wallstblackjack', url: 'http://${LOCAL_HOST}:8082' },
      ]}
    />
  </div>
));
