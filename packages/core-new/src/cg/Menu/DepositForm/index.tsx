import React from 'react';

// local files
import { FormField, SelectField, TextField } from '../../Form';
import { InputButton } from '../../Input';
import { Button } from '../../Button';
import { ArrowIcon } from '../../icons';
import styles from './index.module.scss';

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
        button={<InputButton>copy</InputButton>}
      />
      <div className={styles.qr} />
      <div className="text-gray size_1_2">
        Please note: You may receive your funds and deposit bonus in parts over 3 confirmations.
      </div>
      <div className="d-flex center size_1_8 font-bold">
        <span className="text-green text-uppercase">TOP UP FREE</span>
        <span>FunGelt (FGLT)</span>
      </div>
      <div>
        <Button color="green" className="w-100" large labelCenter icon={<ArrowIcon />}>
          Top up Now
        </Button>
      </div>
    </form>
  );
};
