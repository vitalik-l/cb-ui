import React from 'react';

export type TabProps = {
  selected?: boolean;
  color?: string;
  onChange?: (value: any) => void;
  variant?: string;
  value?: any;
  className?: string;
  label?: React.ReactNode;
  onClick?: any;
};
