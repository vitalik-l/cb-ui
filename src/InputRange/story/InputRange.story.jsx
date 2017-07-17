import React from 'react';
import { storiesOf, action, linkTo } from '@kadira/storybook';
import { withKnobs, text, boolean, number, select } from '@kadira/storybook-addon-knobs';

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


