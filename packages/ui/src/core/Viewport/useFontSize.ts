import React from 'react';

// local files
import { FontSizeContext } from './FontSizeContext';

export const useFontSize = () => React.useContext(FontSizeContext);
