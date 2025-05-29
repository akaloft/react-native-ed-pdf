import Foundation
import PDFKit
import React

@objc(EdPdfViewerManager)
class EdPdfViewerManager: RCTViewManager {
  override func view() -> UIView! {
    return PdfViewerView()
  }

  override static func requiresMainQueueSetup() -> Bool {
    return true
  }
  
  @objc override func constantsToExport() -> [AnyHashable : Any]! {
    return [:]
  }
}

// Export the module
@objc(EdPdfViewerManagerBridge)
class EdPdfViewerManagerBridge: NSObject {
  @objc static func requiresMainQueueSetup() -> Bool {
    return true
  }
}