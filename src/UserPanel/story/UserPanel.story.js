import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, number } from '@storybook/addon-knobs';
import classNames from 'classnames';
import themeSelect from '../../utils/themeSelect';

// styles
import './style.scss';

import UserPanel from '..';

const stories = storiesOf('UserPanel', module);
stories.addDecorator(withKnobs);

stories.add('UserPanel', () => (
  <div className={classNames('user-panel-story', themeSelect())}>
    <UserPanel
      userName={text('User name', '')}
      balance={number('Balance', 0)}
      currencies={[
        { code: 'BTC', title: 'Bitcoin' },
        { code: 'GLT', title: 'Gelt' },
      ]}
      currencyRenderer={() => 1}
    />
  </div>
));
