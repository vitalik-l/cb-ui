import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, boolean, number, select } from '@storybook/addon-knobs';

const stories = storiesOf('Icons', module);
stories.addDecorator(withKnobs);

// styles
import '../styles/default.scss';

import {TrendDownIcon, TrendUpIcon} from '../';

stories.add('Icons', () => {
    return (
        <div>
            <table>
                <tr>
                    <td>
                        TrendDownIcon
                    </td>
                    <td>
                        <TrendDownIcon />
                    </td>
                </tr>
                <tr>
                    <td>
                        TrendUpIcon
                    </td>
                    <td>
                        <TrendUpIcon />
                    </td>
                </tr>
            </table>
        </div>
    )
});
