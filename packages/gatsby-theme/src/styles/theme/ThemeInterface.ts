import { Colors, Sizes, ZIndex, Shadows } from './index';

export interface ThemeInterface extends Sizes, ZIndex {
  mode: 'light' | 'dark';
  colors: Colors;
  shadows: Shadows;
}
