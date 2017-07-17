import React from 'react';
import { storiesOf, action, linkTo } from '@kadira/storybook';
import { withKnobs, text, boolean, number, select } from '@kadira/storybook-addon-knobs';

// if (process.env.NODE_ENV !== 'production') {
//     const {whyDidYouUpdate} = require('why-did-you-update');
//     whyDidYouUpdate(React, {exclude: /children/});
// }


const stories = storiesOf('Radiogroup', module);
stories.addDecorator(withKnobs);

// styles
import './style.scss';

import Radiogroup, {RadiogroupButton} from '../';
import Test from './test/Test';

const theme = () => select('Theme', ['wf', 'wb-mobile', 'wb-mobile-tabs'], 'wb-mobile');

stories.add('default', () => (
    <span className={theme()}>
        <Test />
    </span>
));

stories.add('active value', () => (
    <span className={theme()}>
        <Radiogroup value={select('value',[1,2,3], 1)}>
            <RadiogroupButton value={1} onClick={action('onClick')}>1</RadiogroupButton>
            <RadiogroupButton value={2}>2</RadiogroupButton>
            <RadiogroupButton value={3}>3</RadiogroupButton>
        </Radiogroup>
    </span>
));

stories.add('onChange', () => (
    <span className={theme()}>
        <Radiogroup value={select('value',[1,2,3], 1)} onChange={action('onChange')}>
            <RadiogroupButton value={1} onClick={action('onClick')}>1</RadiogroupButton>
            <RadiogroupButton value={2}>2</RadiogroupButton>
            <RadiogroupButton value={3}>3</RadiogroupButton>
        </Radiogroup>
    </span>
));
