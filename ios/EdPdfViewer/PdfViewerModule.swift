import Foundation

@objc(EdPdfViewerModule)
class EdPdfViewerModule: NSObject {
  @objc static func requiresMainQueueSetup() -> Bool {
    return true
  }
}