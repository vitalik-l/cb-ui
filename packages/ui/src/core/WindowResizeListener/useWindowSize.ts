import { useContext } from 'react';
import Context from './Context';

export const useWindowSize = () => useContext(Context);
