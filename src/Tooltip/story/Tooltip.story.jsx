import React from 'react';
import { storiesOf, action, linkTo } from '@kadira/storybook';
import { withKnobs, text, boolean, number, select } from '@kadira/storybook-addon-knobs';

const stories = storiesOf('Tooltip', module);
stories.addDecorator(withKnobs);

// styles
// import '../styles/default.scss';

import TestTooltip from './TestTooltip';

stories.add('default', () => (
    <TestTooltip />
));