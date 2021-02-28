import { useContext } from 'react';
import { FormContext } from './FormContext';

export const useIsFinalForm = () => useContext(FormContext);
