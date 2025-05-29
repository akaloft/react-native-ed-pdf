import PDFKit
import UIKit
import React

class PdfViewerView: UIView {
  private let pdfView = PDFView()
  
  @objc var onLoadComplete: RCTBubblingEventBlock?
  @objc var onError: RCTBubblingEventBlock?
  @objc var onDownloadComplete: RCTBubblingEventBlock?

  override init(frame: CGRect) {
    super.init(frame: frame)
    setupPdfView()
  }

  required init?(coder: NSCoder) {
    super.init(coder: coder)
    setupPdfView()
  }

  private func setupPdfView() {
    pdfView.autoScales = true
    addSubview(pdfView)
    pdfView.translatesAutoresizingMaskIntoConstraints = false
    NSLayoutConstraint.activate([
      pdfView.topAnchor.constraint(equalTo: topAnchor),
      pdfView.bottomAnchor.constraint(equalTo: bottomAnchor),
      pdfView.leadingAnchor.constraint(equalTo: leadingAnchor),
      pdfView.trailingAnchor.constraint(equalTo: trailingAnchor),
    ])
  }

  @objc var source: NSDictionary? {
    didSet {
      if let urlStr = source?["uri"] as? String, let url = URL(string: urlStr) {
        loadPdf(from: url)
      }
    }
  }
  
  private func loadPdf(from url: URL) {
    DispatchQueue.global().async { [weak self] in
      if let document = PDFDocument(url: url) {
        DispatchQueue.main.async {
          self?.pdfView.document = document
          self?.onLoadComplete?(["pageCount": document.pageCount])
        }
      } else {
        DispatchQueue.main.async {
          self?.onError?(["error": "Failed to load PDF"])
        }
      }
    }
  }
}