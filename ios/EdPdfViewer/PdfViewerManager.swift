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
}