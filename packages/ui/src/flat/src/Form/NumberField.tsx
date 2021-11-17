import React from 'react';
import { TextField } from './TextField';

export const NumberField = (props: React.ComponentProps<typeof TextField>) => (
  <TextField type="number" {...props} />
);
