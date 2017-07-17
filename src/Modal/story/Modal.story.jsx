import React from 'react';
import { storiesOf, action, linkTo } from '@kadira/storybook';
import { withKnobs, text, boolean, number, select } from '@kadira/storybook-addon-knobs';

const stories = storiesOf('Modal', module);
stories.addDecorator(withKnobs);

// styles
import './style.scss';
import '../styles/default.scss';

import Modal from '../';
import TestModal from './TestModal';

stories.add('default', () => (
    <TestModal/>
));


