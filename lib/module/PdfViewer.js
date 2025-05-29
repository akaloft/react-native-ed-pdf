function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import React from 'react';
import EdPdfViewerNativeComponent from './EdPdfViewerNativeComponent';
export const PdfViewer = props => {
  return /*#__PURE__*/React.createElement(EdPdfViewerNativeComponent, _extends({}, props, {
    onLoadComplete: props.onLoadComplete ? event => {
      var _props$onLoadComplete;
      (_props$onLoadComplete = props.onLoadComplete) === null || _props$onLoadComplete === void 0 || _props$onLoadComplete.call(props, event.nativeEvent.pageCount);
    } : undefined,
    onError: props.onError ? event => {
      var _props$onError;
      (_props$onError = props.onError) === null || _props$onError === void 0 || _props$onError.call(props, event.nativeEvent.error);
    } : undefined,
    onDownloadComplete: props.onDownloadComplete ? event => {
      var _props$onDownloadComp;
      (_props$onDownloadComp = props.onDownloadComplete) === null || _props$onDownloadComp === void 0 || _props$onDownloadComp.call(props, event.nativeEvent.localPath);
    } : undefined
  }));
};
//# sourceMappingURL=PdfViewer.js.map