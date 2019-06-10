import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, boolean, number, select } from '@storybook/addon-knobs';
import themeSelect from '../../utils/themeSelect.js';
import classNames from 'classnames';

const stories = storiesOf('EEButton', module);
stories.addDecorator(withKnobs);

// styles
import './style.scss';

import EEButton from '../EEButton';

stories.add('EEButton', () => {
    return (
        <div className={classNames('ee-button-story', themeSelect())}>
            <EEButton
                onClick={action('onClick')}
                value={number('value')}
                progress={number('progress')}
                orderIsClosed={boolean('is order closed')}
                percentValue={number('percent value')}
            />
        </div>
    )
});
