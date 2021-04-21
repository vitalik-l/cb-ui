import { useContext } from 'react';
import ViewportContext from './ViewportContext';

function useViewport() {
  return useContext(ViewportContext);
}

export default useViewport;
