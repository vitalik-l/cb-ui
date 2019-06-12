import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, boolean, number, select } from '@storybook/addon-knobs';

const stories = storiesOf('Chip', module);
stories.addDecorator(withKnobs);

// styles
import '../styles/default.scss';

import Chip from '../';

stories.add('default', () => (
    <Chip
        value={number('value', 1)}
        onAnimationEnd={action('onAnimationEnd')}
        color={text('color')}
    />
));

