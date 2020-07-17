import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, boolean, number, select } from '@storybook/addon-knobs';

const stories = storiesOf('Icons', module);
stories.addDecorator(withKnobs);

// styles
import '../styles/default.scss';

import {TrendDownIcon, TrendUpIcon, InfoIcon} from '../';

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
				<tr>
					<td>
						InfoIcon
					</td>
					<td>
						<InfoIcon />
					</td>
				</tr>
            </table>
        </div>
    )
});
