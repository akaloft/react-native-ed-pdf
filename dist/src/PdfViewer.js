import React from 'react';
import { requireNativeComponent } from 'react-native';
const NativePdfViewer = requireNativeComponent('EdPdfViewer');
export const PdfViewer = (props) => {
    return React.createElement(NativePdfViewer, { ...props });
};
