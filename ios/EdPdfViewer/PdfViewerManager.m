#import <React/RCTBridgeModule.h>
#import <React/RCTViewManager.h>
#import <React/RCTUIManager.h>

#if __has_include(<React/RCTBridgeModule.h>)
  #import <React/RCTBridgeModule.h>
#elif __has_include("RCTBridgeModule.h")
  #import "RCTBridgeModule.h"
#endif

@interface RCT_EXTERN_MODULE(EdPdfViewerManager, RCTViewManager)

RCT_EXPORT_VIEW_PROPERTY(source, NSDictionary)
RCT_EXPORT_VIEW_PROPERTY(onLoadComplete, RCTBubblingEventBlock)
RCT_EXPORT_VIEW_PROPERTY(onError, RCTBubblingEventBlock)
RCT_EXPORT_VIEW_PROPERTY(onDownloadComplete, RCTBubblingEventBlock)

@end 