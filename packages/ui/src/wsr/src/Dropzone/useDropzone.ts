import React from 'react';
import { DropzoneContext } from './DropzoneContext';

export const useDropzone = () => React.useContext(DropzoneContext);
