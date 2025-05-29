Pod::Spec.new do |s|
  s.name         = "react-native-ed-pdf"
  s.version      = "0.1.0"
  s.summary      = "React Native PDF viewer using PDFKit (iOS) and PdfRenderer (Android)"
  s.authors      = { "Efe Derilgen" => "efederilgen@gmail.com" }
  s.homepage     = "https://github.com/akaloft/react-native-ed-pdf"
  s.license      = "MIT"

  s.platform     = :ios, "11.0"
  s.source       = { :git => "https://github.com/akaloft/react-native-ed-pdf.git", :tag => "#{s.version}" }

  s.source_files  = "ios/**/*.{h,m,swift}"
  s.requires_arc  = true

  s.dependency "React-Core"
end