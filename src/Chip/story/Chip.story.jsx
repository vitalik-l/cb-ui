import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, boolean, number, select } from '@storybook/addon-knobs';

const stories = storiesOf('Chip', module);
stories.addDecorator(withKnobs);

// styles
import '../styles/default.scss';

import Chip from '../';

const VALUES = [1, 5, 10, 25, 100, 500, 1000, 5000, 10000, 25000, 100000, 500000];

stories.add('default', () => (
    <Chip value={select('value', VALUES, 1)}/>
));

