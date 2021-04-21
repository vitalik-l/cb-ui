import React from 'react';
import { Story } from '@storybook/react';

// local files
import { index } from '../../story/createStory';
import { Radio } from './index';
import styles from './RadioStory.module.scss';

const story = index({
  title: 'Radio',
  component: Radio,
});

export const Template: Story = (args) => {
  const [value, setValue] = React.useState('value1');

  const onChange = (event: any) => {
    setValue(event.target.value);
  };

  return (
    <form>
      <Radio
        {...args}
        classes={styles}
        name="radio"
        value="value1"
        checked={value === 'value1'}
        onChange={onChange}
        icon={<div className={styles.icon} />}
        checkedIcon={<div className={styles.checkedIcon} />}
      >
        Radio 1
      </Radio>
      <Radio
        {...args}
        classes={styles}
        name="radio"
        value="value2"
        checked={value === 'value2'}
        onChange={onChange}
        icon={<div className={styles.icon} />}
        checkedIcon={<div className={styles.checkedIcon} />}
      >
        Radio 2
      </Radio>
    </form>
  );
};
Template.storyName = 'Radio';

export default story;
