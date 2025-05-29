import { ViewStyle } from 'react-native';

export type PdfSource = {
  uri: string;
};

export interface PdfViewerProps {
  source: PdfSource;
  style?: ViewStyle;
  onLoadComplete?: (pageCount: number) => void;
  onError?: (error: string) => void;
  onDownloadComplete?: (localPath: string) => void;
}
