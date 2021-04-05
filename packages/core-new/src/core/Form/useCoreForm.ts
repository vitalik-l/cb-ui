import { useContext } from 'react';
import { FormContext } from './FormContext';

export const useCoreForm = () => useContext(FormContext);
