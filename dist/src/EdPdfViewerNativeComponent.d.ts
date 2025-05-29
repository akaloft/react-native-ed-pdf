import type { ViewProps, HostComponent } from 'react-native';
import type { Int32, BubblingEventHandler } from 'react-native/Libraries/Types/CodegenTypes';
export interface PdfSource {
    uri: string;
}
export interface OnLoadCompleteEvent {
    pageCount: Int32;
}
export interface OnErrorEvent {
    error: string;
}
export interface OnDownloadCompleteEvent {
    localPath: string;
}
export interface NativeProps extends ViewProps {
    source?: PdfSource;
    onLoadComplete?: BubblingEventHandler<OnLoadCompleteEvent>;
    onError?: BubblingEventHandler<OnErrorEvent>;
    onDownloadComplete?: BubblingEventHandler<OnDownloadCompleteEvent>;
}
declare const _default: HostComponent<NativeProps>;
export default _default;
//# sourceMappingURL=EdPdfViewerNativeComponent.d.ts.map