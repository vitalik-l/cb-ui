import React from 'react';
import { BetObject } from './types';

export const DropzoneContext = React.createContext<{
  selectedNumbers: Array<number>;
  selectNumbers: (params?: BetObject) => void;
}>({
  selectedNumbers: [],
  selectNumbers: () => {},
});
