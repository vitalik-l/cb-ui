import React from 'react';
import { Submit as CoreSubmit } from '@cb-general/core/Form';

// local files
import { Button } from '../Button';

export const Submit = (props: any) => <CoreSubmit component={Button} {...props} />;
