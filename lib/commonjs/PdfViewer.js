"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PdfViewer = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactNative = require("react-native");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const LINKING_ERROR = `The package 'react-native-ed-pdf' doesn't seem to be linked. Make sure: \n\n` + _reactNative.Platform.select({
  ios: "- You have run 'pod install'\n",
  default: ''
}) + '- You rebuilt the app after installing the package\n' + '- You are not using Expo Go\n';

// Component registration için Old Architecture desteği
const ComponentName = 'EdPdfViewer';
const NativePdfViewer = _reactNative.UIManager.getViewManagerConfig(ComponentName) != null ? (0, _reactNative.requireNativeComponent)(ComponentName) : () => {
  throw new Error(LINKING_ERROR);
};
const PdfViewer = props => {
  return /*#__PURE__*/_react.default.createElement(NativePdfViewer, _extends({}, props, {
    // Old Architecture için event mapping
    onLoadComplete: props.onLoadComplete,
    onError: props.onError,
    onDownloadComplete: props.onDownloadComplete
  }));
};
exports.PdfViewer = PdfViewer;
//# sourceMappingURL=PdfViewer.js.map