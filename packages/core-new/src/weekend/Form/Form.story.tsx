import React from 'react';
import { Story } from '@storybook/react';
import { Form } from '@cb-general/core/Form';

// local files
import { createStory } from '../createStory';
import { TextField, NumberField, SelectField, SwitchField } from './';
import { Button } from '../Button';

const story = createStory({
  title: 'Form',
  component: Form,
});

const onSubmit = (values: any) => {
  console.log('submit', values);
};

export const Default: Story = (args) => (
  <Form onSubmit={onSubmit} {...args}>
    <SelectField name="select" label="SelectField">
      <option>Option 1</option>
      <option>Option 2</option>
      <option>Option 3</option>
    </SelectField>
    <TextField name="text" label="TextField" placeholder="placeholder" />
    <NumberField name="number" label="NumberField" />
    <SwitchField name="switch" label="SwitchField" />
    <Button type="submit">Submit</Button>
  </Form>
);
Default.storyName = 'Form';
Default.args = {
  layout: 'inline',
};

export default story;
