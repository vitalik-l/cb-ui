import React from 'react';
import { translate } from './translation';

export const useTranslation = (strings, state) => {
  return React.useMemo(() => {
    const result = {};
    Object.keys(strings).forEach((stringKey) => {
      result[stringKey] = translate(strings[stringKey], state);
    });
    return result;
  }, [state, strings]);
};
