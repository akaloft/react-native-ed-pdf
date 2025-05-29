function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import React from 'react';
import { requireNativeComponent, UIManager, Platform } from 'react-native';
const LINKING_ERROR = `The package 'react-native-ed-pdf' doesn't seem to be linked. Make sure: \n\n` + Platform.select({
  ios: "- You have run 'pod install'\n",
  default: ''
}) + '- You rebuilt the app after installing the package\n' + '- You are not using Expo Go\n';

// Component registration için Old Architecture desteği
const ComponentName = 'EdPdfViewer';
const NativePdfViewer = UIManager.getViewManagerConfig(ComponentName) != null ? requireNativeComponent(ComponentName) : () => {
  throw new Error(LINKING_ERROR);
};
export const PdfViewer = props => {
  return /*#__PURE__*/React.createElement(NativePdfViewer, _extends({}, props, {
    // Old Architecture için event mapping
    onLoadComplete: props.onLoadComplete,
    onError: props.onError,
    onDownloadComplete: props.onDownloadComplete
  }));
};
//# sourceMappingURL=PdfViewer.js.map