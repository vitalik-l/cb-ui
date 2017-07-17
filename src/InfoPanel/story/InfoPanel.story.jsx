import React from 'react';
import { storiesOf, action, linkTo } from '@kadira/storybook';
import { withKnobs, text, boolean, number, select } from '@kadira/storybook-addon-knobs';

const stories = storiesOf('InfoPanel', module);
stories.addDecorator(withKnobs);

import './style.scss';
import '../styles/default.scss';
import InfoPanel, {InfoPanelItem} from '../';

stories.add('By default should be centered to parent element', () => (
    <div className="info-panel-parent">
        <InfoPanel>
            <InfoPanelItem title="ORDER" value="123"/>
            <InfoPanelItem title="WIN" value="$100"/>
        </InfoPanel>
    </div>
));

stories.add('should be under parent element', () => (
    <div className="info-panel-parent">
        <InfoPanel display="under">
            <InfoPanelItem title="ORDER" value="123"/>
            <InfoPanelItem title="WIN" value="$100"/>
        </InfoPanel>
    </div>
));

