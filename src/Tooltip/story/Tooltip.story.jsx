import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, boolean, number, select } from '@storybook/addon-knobs';

const stories = storiesOf('Tooltip', module);
stories.addDecorator(withKnobs);

// styles
// import '../styles/default.scss';

import TestTooltip from './TestTooltip';

stories.add('default', () => (
    <TestTooltip />
));