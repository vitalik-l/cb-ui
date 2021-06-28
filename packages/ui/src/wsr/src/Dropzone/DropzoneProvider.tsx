import React from 'react';

// local files
import { DropzoneContext } from './DropzoneContext';
import { BetObject } from './types';

type Props = {
  children?: React.ReactNode;
  getBetNumbersFn?: (params: BetObject) => Array<number>;
};

export const DropzoneProvider = (props: Props) => {
  const { children, getBetNumbersFn } = props;
  const [selectedNumbers, setSelectedNumbers] = React.useState<Array<number>>([]);
  const chipsStackRefs = React.useRef([]);

  const selectNumbers = React.useCallback(
    (params?: BetObject) => {
      if (!params) {
        setSelectedNumbers([]);
        return;
      }
      if (getBetNumbersFn) {
        setSelectedNumbers(getBetNumbersFn(params));
      }
    },
    [getBetNumbersFn],
  );

  return (
    <DropzoneContext.Provider
      value={{ selectedNumbers, selectNumbers, chipsStackRefs }}
      children={children}
    />
  );
};
