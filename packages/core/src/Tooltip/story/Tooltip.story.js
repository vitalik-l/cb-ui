import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';

// styles
import './style.scss';

import TestTooltip from './TestTooltip';

const stories = storiesOf('Tooltip', module);
stories.addDecorator(withKnobs);

stories.add('default', () => <TestTooltip />);
