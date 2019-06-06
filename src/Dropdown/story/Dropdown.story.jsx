import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, boolean, number, select } from '@storybook/addon-knobs';

const stories = storiesOf('Dropdown', module);
stories.addDecorator(withKnobs);

// styles
import './style.scss';

import DropdownTest1 from './DropdownTest1';

stories.add('Dropdown', () => {
    return (
        <div className="dropdown-story">
            <DropdownTest1 />
        </div>
    )
});
