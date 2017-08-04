import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, boolean, number, select } from '@storybook/addon-knobs';

const stories = storiesOf('Tabs', module);
stories.addDecorator(withKnobs);

// styles
import '../styles/default.scss';

import Tabs, {Tab} from '../';

import Test from './Test';

stories.add('default', () => (
    <Test />
));