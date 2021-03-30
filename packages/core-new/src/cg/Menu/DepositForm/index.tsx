import React from 'react';

// local files
import {FormField, SelectField} from '../../Form';

export const DepositForm = () => {
  return (
    <form>
      <SelectField label="Choose currency:" fullWidth>
        <option>Bitcoin</option>
        <option>Ether</option>
      </SelectField>
      <FormField
        label="This code is you personal payment address"
        fullWidth
      />
    </form>
  );
};