# react-native-ed-pdf

A lightweight, cross-platform PDF viewer for React Native using the New Architecture (Fabric + TurboModules).

## Installation
```sh
yarn add react-native-ed-pdf
```

## Usage
```tsx
import { PdfViewer } from 'react-native-ed-pdf';

<PdfViewer
  source={{ uri: 'https://example.com/sample.pdf' }}
  style={{ flex: 1 }}
  onLoadComplete={(pages) => console.log(`Loaded ${pages} pages`)}
  onError={(err) => console.error(err)}
  onDownloadComplete={(path) => console.log('Saved at', path)}
/>
```

## iOS & Android Setup
TBD — native implementation pending
