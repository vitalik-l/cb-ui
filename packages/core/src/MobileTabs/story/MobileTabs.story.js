import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs';
import classNames from 'classnames';

// styles
import './styles.scss';
import Tabs from '../index';
import { Tab } from '../Tab';

const stories = storiesOf('MobileTabs', module);
stories.addDecorator(withKnobs);

stories.add('default', () => {
  const [value, setValue] = React.useState(0);

  return (
    <div className="MobileTabs-story MobileTabs-story--galileo">
      <Tabs value={value} onChange={setValue}>
        <Tab value={0} label="Tab 1" />
        <Tab value={1} label="Tab 2" />
        <Tab value={2} label="Tab 3" />
        <Tab value={3} label="Tab 4" />
        <Tab value={4} label="Tab 5" />
        <Tab value={5} label="Tab 6" />
      </Tabs>
    </div>
  );
});
