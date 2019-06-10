import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, boolean, number, select } from '@storybook/addon-knobs';

const stories = storiesOf('NetPL', module);
stories.addDecorator(withKnobs);

// styles
import './style.scss';

import NetPL from '../NetPL';

stories.add('NetPL', () => {
    return (
        <div className="net-pl-story">
            <NetPL
                currency={{code: 'USD'}}
                value={[
                    {profit: 10, currency: 'USD', profitToPayoutRatio: 50},
                    {profit: 20, currency: 'BTC', profitToPayoutRatio: -40}
                ]}
            />
        </div>
    )
});
