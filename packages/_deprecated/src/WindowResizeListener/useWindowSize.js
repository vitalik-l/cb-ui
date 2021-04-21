import { useContext } from 'react';
import Context from './Context';

function useWindowSize() {
  return useContext(Context);
}

export default useWindowSize;
