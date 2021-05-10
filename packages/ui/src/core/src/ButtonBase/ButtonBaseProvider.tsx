import React from 'react';
import { ButtonBase } from './ButtonBase';

type ContextType = React.ComponentProps<typeof ButtonBase>;

export const ButtonBaseContext = React.createContext<Partial<ContextType>>({});
export const useButtonBase = () => React.useContext(ButtonBaseContext);

export const ButtonBaseProvider = ({ children, ...restProps }: any) => {
  return <ButtonBaseContext.Provider value={restProps}>{children}</ButtonBaseContext.Provider>;
};
