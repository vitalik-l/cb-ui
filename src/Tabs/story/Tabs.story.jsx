import React from 'react';
import { storiesOf, action, linkTo } from '@kadira/storybook';
import { withKnobs, text, boolean, number, select } from '@kadira/storybook-addon-knobs';

// if (process.env.NODE_ENV !== 'production') {
//     const {whyDidYouUpdate} = require('why-did-you-update');
//     whyDidYouUpdate(React, {exclude: /children/});
// }

const stories = storiesOf('Tabs', module);
stories.addDecorator(withKnobs);

// styles
import '../styles/default.scss';

import Tabs, {Tab} from '../';

import Test from './Test';

stories.add('default', () => (
    <Test/>
));