import React from 'react';
import { Story } from '@storybook/react';

// local files
import { createStory } from '../createStory';
import {Form, FormField, InlineFields, useSubmit, Submit, validator, required} from './';

const story = createStory({
  title: 'Form',
  component: Form,
});

const onSubmit = (values: any) => {
  console.log('submit', values);
};

export const Default: Story = (args) => (
  <Form onSubmit={onSubmit} {...args}>
    <FormField name="indicator" label="Indicator:" component="select">
      <option>Indicator 1</option>
      <option>Indicator 2</option>
      <option>Indicator 3</option>
    </FormField>
    <FormField name="period" label="Period:" type="number" placeholder="placeholder" />
    <FormField name="base" label="Base:" component="select">
      <option>Indicator 1</option>
      <option>Indicator 2</option>
      <option>Indicator 3</option>
    </FormField>
    <FormField name="type" label="Type:" component="select">
      <option>Indicator 1</option>
      <option>Indicator 2</option>
      <option>Indicator 3</option>
    </FormField>
    <button type="submit">Submit</button>
  </Form>
);
Default.args = {
  layout: 'inline',
};

export const InlineColumns = () => {
  const formRef = React.useRef();
  const submit = useSubmit(formRef);

  return (
    <div>
      <Form onSubmit={onSubmit} ref={formRef}>
        <InlineFields>
          <FormField name="indicator" label="Indicator:" component="select">
            <option>Indicator 1</option>
            <option>Indicator 2</option>
            <option>Indicator 3</option>
          </FormField>
          <FormField name="period" label="Period*:" type="number" placeholder="placeholder" validate={validator(required, 'value is required')} />
        </InlineFields>
        <InlineFields>
          <FormField name="base" label="Base:" component="select">
            <option>Indicator 1</option>
            <option>Indicator 2</option>
            <option>Indicator 3</option>
          </FormField>
          <FormField name="type" label="Type:" component="select">
            <option>Indicator 1</option>
            <option>Indicator 2</option>
            <option>Indicator 3</option>
          </FormField>
        </InlineFields>
        <div>
          <Submit>Submit</Submit>
        </div>
      </Form>
      <button onClick={submit}>Submit outside</button>
    </div>
  );
};

export default story;
