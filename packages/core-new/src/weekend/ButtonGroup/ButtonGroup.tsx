import React from 'react';
import { ButtonGroupProps, ButtonGroup as CoreButtonGroup } from '@cb-general/core/ButtonGroup';

// local files
import classes from '../styles/classes.module.scss';
import './ButtonGroup.scss';

export const ButtonGroup = (props: ButtonGroupProps) => {
  return <CoreButtonGroup classNamePrefix={classes.ButtonGroup} {...props} />;
};
