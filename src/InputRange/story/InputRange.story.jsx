import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, boolean, number, select } from '@storybook/addon-knobs';

const stories = storiesOf('InputRange', module);
stories.addDecorator(withKnobs);

// styles
import '../styles/default.scss';

import InputRange from '../';

stories.add('default', () => (
    <div style={{marginTop: 30}}>
        <InputRange value="50"/>
    </div>
));


