import PDFKit
import UIKit

class PdfViewerView: UIView {
  private let pdfView = PDFView()

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
      guard let uri = source?["uri"] as? String,
            let url = URL(string: uri) else {
        return
      }

      let session = URLSession.shared
      let task = session.downloadTask(with: url) { [weak self] localURL, _, error in
        guard let self = self, let localURL = localURL, error == nil else {
          return
        }

        DispatchQueue.main.async {
          self.pdfView.document = PDFDocument(url: localURL)
        }
      }

      task.resume()
    }
  }
}