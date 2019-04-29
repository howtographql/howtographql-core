import { Colors, Sizes, Shape, ZIndex } from './index';

export interface ThemeInterface {
  mode: 'light' | 'dark';
  colors: Colors;
  sizes: Sizes;
  shape: Shape;
  shadows: any;
  zIndex: ZIndex;
}
