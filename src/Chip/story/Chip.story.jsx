import React from 'react';
import { storiesOf, action, linkTo } from '@kadira/storybook';
import { withKnobs, text, boolean, number, select } from '@kadira/storybook-addon-knobs';

const stories = storiesOf('Chip', module);
stories.addDecorator(withKnobs);

// styles
import './style.scss';
import '../styles/default.scss';

import Chip from '../';

const VALUES = [1, 5, 10, 25, 100, 500, 1000, 5000, 10000, 25000, 100000];

stories.add('default', () => (
    <Chip value={select('value', VALUES, 1)}/>
));

