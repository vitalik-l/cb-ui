import React from 'react';

// local files
import {FormField, SelectField, TextField} from '../../Form';
import {InputButton} from '../../Input';

export const DepositForm = () => {
  return (
    <form>
      <SelectField label="Choose currency:" fullWidth>
        <option>Bitcoin</option>
        <option>Ether</option>
      </SelectField>
      <TextField
        label="This code is you personal payment address"
        fullWidth
        readOnly
        value="3A9jotZzYk8s6YV4YvPGXZvUnTb6tsUSJi"
        button={
          <InputButton>
            copy
          </InputButton>
        }
      />
      <div className="text-gray size_1_2">
        Please note: You may receive your funds and deposit bonus in parts over 3 confirmations.
      </div>
    </form>
  );
};