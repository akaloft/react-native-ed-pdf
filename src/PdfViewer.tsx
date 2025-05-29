import React from 'react';
import type { ViewProps } from 'react-native';
import { requireNativeComponent, UIManager, Platform, NativeModules } from 'react-native';
import type { PdfViewerProps } from './types';

const LINKING_ERROR =
  `The package 'react-native-ed-pdf' doesn't seem to be linked. Make sure: \n\n` +
  Platform.select({ ios: "- You have run 'pod install'\n", default: '' }) +
  '- You rebuilt the app after installing the package\n' +
  '- You are not using Expo Go\n';

// Component registration için Old Architecture desteği
const ComponentName = 'EdPdfViewer';

const NativePdfViewer = 
  UIManager.getViewManagerConfig(ComponentName) != null
    ? requireNativeComponent<PdfViewerProps>(ComponentName)
    : () => {
        throw new Error(LINKING_ERROR);
      };

export const PdfViewer = (props: PdfViewerProps & ViewProps) => {
  return (
    <NativePdfViewer 
      {...props}
      // Old Architecture için event mapping
      onLoadComplete={props.onLoadComplete}
      onError={props.onError}
      onDownloadComplete={props.onDownloadComplete}
    />
  );
};