import React from 'react';
import { Story } from '@storybook/react';
import { Form } from '@cb-general/core/Form';

// local files
import { createStory } from '../createStory';
import { TextField, NumberField, SelectField, SwitchField, Submit } from './';
import {required, validator} from '../../core/Form';

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
    <TextField name="text" label="TextField*" placeholder="placeholder" validate={validator(required, 'field is required')}/>
    <NumberField name="number" label="NumberField" />
    <SwitchField name="switch" label="SwitchField" />
    <Submit>Submit</Submit>
  </Form>
);
Default.storyName = 'Form';
Default.args = {
  layout: 'inline',
};

export default story;
