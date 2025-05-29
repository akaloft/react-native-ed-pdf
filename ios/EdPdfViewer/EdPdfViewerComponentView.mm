#ifdef RCT_NEW_ARCH_ENABLED
#import "EdPdfViewerComponentView.h"

#import <react/renderer/components/RNEdPdfViewerSpec/ComponentDescriptors.h>
#import <react/renderer/components/RNEdPdfViewerSpec/EventEmitters.h>
#import <react/renderer/components/RNEdPdfViewerSpec/Props.h>
#import <react/renderer/components/RNEdPdfViewerSpec/RCTComponentViewHelpers.h>

#import "RCTFabricComponentsPlugins.h"
#import <React/RCTConversions.h>
#import <PDFKit/PDFKit.h>

using namespace facebook::react;

@interface EdPdfViewerComponentView () <RCTEdPdfViewerViewProtocol>
@end

@implementation EdPdfViewerComponentView {
  PDFView *_pdfView;
}

+ (ComponentDescriptorProvider)componentDescriptorProvider
{
  return concreteComponentDescriptorProvider<EdPdfViewerComponentDescriptor>();
}

- (instancetype)initWithFrame:(CGRect)frame
{
  if (self = [super initWithFrame:frame]) {
    static const auto defaultProps = std::make_shared<const EdPdfViewerProps>();
    _props = defaultProps;
    
    _pdfView = [[PDFView alloc] init];
    _pdfView.autoScales = YES;
    [self addSubview:_pdfView];
  }
  
  return self;
}

- (void)updateProps:(Props::Shared const &)props oldProps:(Props::Shared const &)oldProps
{
  const auto &oldViewProps = *std::static_pointer_cast<EdPdfViewerProps const>(_props);
  const auto &newViewProps = *std::static_pointer_cast<EdPdfViewerProps const>(props);
  
  if (oldViewProps.source.uri != newViewProps.source.uri) {
    NSString *uri = [NSString stringWithUTF8String:newViewProps.source.uri.c_str()];
    [self loadPdfFromUrl:uri];
  }
  
  [super updateProps:props oldProps:oldProps];
}

- (void)layoutSubviews
{
  [super layoutSubviews];
  _pdfView.frame = self.bounds;
}

- (void)loadPdfFromUrl:(NSString *)urlString
{
  NSURL *url = [NSURL URLWithString:urlString];
  if (!url) return;
  
  dispatch_async(dispatch_get_global_queue(DISPATCH_QUEUE_PRIORITY_DEFAULT, 0), ^{
    PDFDocument *document = [[PDFDocument alloc] initWithURL:url];
    
    dispatch_async(dispatch_get_main_queue(), ^{
      if (document) {
        self->_pdfView.document = document;
        
        if (self->_eventEmitter) {
          auto edPdfViewerEventEmitter = std::static_pointer_cast<EdPdfViewerEventEmitter const>(self->_eventEmitter);
          EdPdfViewerEventEmitter::OnLoadComplete event;
          event.pageCount = (int)document.pageCount;
          edPdfViewerEventEmitter->onLoadComplete(event);
        }
      } else {
        if (self->_eventEmitter) {
          auto edPdfViewerEventEmitter = std::static_pointer_cast<EdPdfViewerEventEmitter const>(self->_eventEmitter);
          EdPdfViewerEventEmitter::OnError event;
          event.error = "Failed to load PDF";
          edPdfViewerEventEmitter->onError(event);
        }
      }
    });
  });
}

Class<RCTComponentViewProtocol> EdPdfViewerCls(void)
{
  return EdPdfViewerComponentView.class;
}

@end

#endif /* RCT_NEW_ARCH_ENABLED */ 