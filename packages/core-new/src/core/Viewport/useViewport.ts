import React from 'react';
// local files
import { ViewportContext } from './ViewportContext';

export const useViewport = () => React.useContext(ViewportContext);
