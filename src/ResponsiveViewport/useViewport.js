import ViewportContext from './ViewportContext';
import {useContext} from 'react';

function useViewport() {
	return useContext(ViewportContext);
}

export default useViewport;