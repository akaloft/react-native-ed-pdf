import React from 'react';
import { requireNativeComponent, ViewProps } from 'react-native';
import type { PdfViewerProps } from './types';

const NativePdfViewer = requireNativeComponent<PdfViewerProps>('EdPdfViewer');

export const PdfViewer = (props: PdfViewerProps & ViewProps) => {
  return <NativePdfViewer {...props} />;
};