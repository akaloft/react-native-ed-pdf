#import <React/RCTViewManager.h>

@interface RCT_EXTERN_MODULE(EdPdfViewerManager, RCTViewManager)

RCT_EXPORT_VIEW_PROPERTY(source, NSDictionary)
RCT_EXPORT_VIEW_PROPERTY(onLoadComplete, RCTBubblingEventBlock)
RCT_EXPORT_VIEW_PROPERTY(onError, RCTBubblingEventBlock)
RCT_EXPORT_VIEW_PROPERTY(onDownloadComplete, RCTBubblingEventBlock)

@end 