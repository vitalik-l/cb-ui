import React from 'react';
import { storiesOf, action, linkTo } from '@kadira/storybook';
import { withKnobs, text, boolean, number, select } from '@kadira/storybook-addon-knobs';

const stories = storiesOf('Button', module);
stories.addDecorator(withKnobs);

// styles
import './style.scss';
import '../styles/style.scss';

import Button from '../';

stories.add('default', () => (
    <Button />
));


