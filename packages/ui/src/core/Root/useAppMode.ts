import React from 'react';

// local files
import { AppModeContext } from './AppModeContext';

export const useAppMode = () => React.useContext(AppModeContext);
