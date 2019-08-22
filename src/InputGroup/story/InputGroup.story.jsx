import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, boolean, number, select } from '@storybook/addon-knobs';
import themeSelect from '../../utils/themeSelect.js';
import classNames from 'classnames';

const stories = storiesOf('InputGroup', module);
stories.addDecorator(withKnobs);

// styles
import './style.scss';

import InputGroup from '../';

stories.add('default', () => (
    <div className={classNames('input-group-story', themeSelect())}>
        <InputGroup label="Change Password">
            <input
                type="password"
                maxLength="16"
                name="newPassword"
                required
            />
        </InputGroup>
    </div>
));

stories.add('Two inputs', () => (
    <div className={classNames('input-group-story', themeSelect())}>
        <InputGroup label="Change Password">
            <input
                type="password"
                maxLength="16"
                name="newPassword"
                required
                label="Password"
            />
            <input
                type="text"
                maxLength="16"
                name="newPassword"
                required
                label="name"
                error="Invalid value"
            />
        </InputGroup>
    </div>
));


