import { useContext } from 'react';
import { FormContext } from './FormContext';

export const isFinalForm = () => useContext(FormContext);