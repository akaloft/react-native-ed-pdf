# React Native EdPDF Viewer

React Native 0.79+ ile uyumlu PDF görüntüleme kütüphanesi.

## Kurulum

```bash
npm install react-native-ed-pdf
# veya
yarn add react-native-ed-pdf

# iOS için
cd ios && pod install
```

## Kullanım

```tsx
import { PdfViewer } from 'react-native-ed-pdf';

<PdfViewer
  source={{uri: 'https://example.com/document.pdf'}}
  style={{flex: 1}}
  onLoadComplete={pages => console.log(`Loaded ${pages} pages`)}
  onError={err => console.error(err)}
  onDownloadComplete={path => console.log('Saved at', path)}
/>
```

## React Native 0.79+ için Özel Kurulum

### iOS Kurulum

1. **Proje ana dizininde terminal açın ve çalıştırın:**
   ```bash
   cd ios
   pod install
   ```

2. **Eğer build hatası alıyorsanız:**
   ```bash
   cd ios
   rm -rf Pods
   pod deintegrate
   pod install
   ```

3. **iOS build için:**
   ```bash
   npx react-native run-ios
   ```

### Android Kurulum

```bash
npx react-native run-android
```

## Sorun Giderme

### "View config not found" Hatası

Eğer bu hatayı alıyorsanız:

1. **Metro cache temizleme:**
   ```bash
   npx react-native start --reset-cache
   ```

2. **Node modules yeniden yükleme:**
   ```bash
   rm -rf node_modules
   npm install
   # veya
   yarn install
   ```

3. **iOS için:**
   ```bash
   cd ios
   rm -rf Pods Podfile.lock
   pod install
   ```

4. **Android için:**
   ```bash
   cd android
   ./gradlew clean
   cd ..
   npx react-native run-android
   ```

### iOS Build Hataları

iOS'te React headers bulunamıyorsa:

1. **Xcode'da podspec kontrol edin**
2. **React-Core dependency'si otomatik yüklenmelidir**
3. **Manual linking gerekiyorsa MainApplication'da:**

```objc
// iOS/AppDelegate.m içinde gerekli değil - otomatik discovery
```

### Android Build Hataları

1. **android/settings.gradle'da kontrol edin:**
   ```gradle
   include ':react-native-ed-pdf'
   project(':react-native-ed-pdf').projectDir = new File(rootProject.projectDir, '../node_modules/react-native-ed-pdf/android')
   ```

2. **android/app/build.gradle:**
   ```gradle
   dependencies {
       implementation project(':react-native-ed-pdf')
   }
   ```

## API

### Props

- `source`: `{uri: string}` - PDF URL'si
- `style`: `ViewStyle` - Stil özellikleri
- `onLoadComplete`: `(pageCount: number) => void` - Yükleme tamamlandığında
- `onError`: `(error: string) => void` - Hata durumunda
- `onDownloadComplete`: `(path: string) => void` - İndirme tamamlandığında

## Desteklenen Versiyonlar

- React Native 0.71+
- iOS 11.0+
- Android API 21+

## Both Architectures Support

Bu kütüphane hem Old Architecture hem de New Architecture (Fabric) destekler.

## License

MIT
