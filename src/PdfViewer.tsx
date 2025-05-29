import React from 'react';
import type { ViewProps } from 'react-native';
import EdPdfViewerNativeComponent from './EdPdfViewerNativeComponent';
import type { PdfViewerProps } from './types';

export const PdfViewer = (props: PdfViewerProps & ViewProps) => {
  return (
    <EdPdfViewerNativeComponent
      {...props}
      onLoadComplete={props.onLoadComplete ? (event) => {
        props.onLoadComplete?.(event.nativeEvent.pageCount);
      } : undefined}
      onError={props.onError ? (event) => {
        props.onError?.(event.nativeEvent.error);
      } : undefined}
      onDownloadComplete={props.onDownloadComplete ? (event) => {
        props.onDownloadComplete?.(event.nativeEvent.localPath);
      } : undefined}
    />
  );
};