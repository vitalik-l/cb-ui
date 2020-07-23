import Context from './Context';
import {useContext} from 'react';

function useWindowSize() {
	return useContext(Context);
}

export default useWindowSize;