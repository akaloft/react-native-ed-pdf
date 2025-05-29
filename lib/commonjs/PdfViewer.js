"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PdfViewer = void 0;
var _react = _interopRequireDefault(require("react"));
var _EdPdfViewerNativeComponent = _interopRequireDefault(require("./EdPdfViewerNativeComponent"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const PdfViewer = props => {
  return /*#__PURE__*/_react.default.createElement(_EdPdfViewerNativeComponent.default, _extends({}, props, {
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
exports.PdfViewer = PdfViewer;
//# sourceMappingURL=PdfViewer.js.map