import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, boolean, number, select } from '@storybook/addon-knobs';

const stories = storiesOf('BestViewNotify', module);
stories.addDecorator(withKnobs);

// styles
// import './style.scss';
import '../styles/default.scss';

import BestViewNotify from '../';

stories.add('default', () => (
    <BestViewNotify />
));


