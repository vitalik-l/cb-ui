import React from 'react';
import { Submit as CoreSubmit } from '@cb-general/core/Form';
import { Button } from '../Button';

export const Submit = (props: any) => <CoreSubmit {...props} component={Button} />