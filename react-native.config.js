module.exports = {
  dependencies: {
    'react-native-ed-pdf': {
      root: __dirname,
      platforms: {
        android: {
          sourceDir: '../node_modules/react-native-ed-pdf/android/',
          packageImportPath: 'import io.invertase.firebase.ReactNativeFirebasePackage;',
          packageImportPath: 'import com.edpdfviewer.PdfViewerPackage;'
        },
        ios: {
          project: 'react-native-ed-pdf.podspec'
        }
      }
    },
  },
};