import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, boolean, number, select } from '@storybook/addon-knobs';
import themeSelect from '../../utils/themeSelect.js';
import classNames from 'classnames';

const stories = storiesOf('UserPanel', module);
stories.addDecorator(withKnobs);

// styles
import './style.scss';

import UserPanel from '../';

stories.add('UserPanel', () => {
    return (
        <div className={classNames('user-panel-story', themeSelect())}>
            <UserPanel
                userName={text('User name', '')}
                balance={number('Balance', 0)}
                currencies={[{code: 'BTC', title: 'Bitcoin'}, {code: 'GLT', title: 'Gelt'}]}
                currencyRenderer={() => 1}
            />
        </div>
    )
});
