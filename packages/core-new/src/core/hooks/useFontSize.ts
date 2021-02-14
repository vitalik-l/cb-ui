import React from 'react';

// local files
import { FontSizeContext } from '../Viewport/FontSizeContext';

export const useFontSize = () => React.useContext(FontSizeContext);
