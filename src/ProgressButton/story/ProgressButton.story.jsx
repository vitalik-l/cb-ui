import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, boolean, number, select } from '@storybook/addon-knobs';

const stories = storiesOf('ProgressButton', module);
stories.addDecorator(withKnobs);

// styles
import '../styles/default.scss';

import ProgressButton from '../';

stories.add('ProgressButton', () => {
    return (
        <ProgressButton
            label={text('label', 'early exit')}
            progress={number('progress', 50)}
        />
    )
});
