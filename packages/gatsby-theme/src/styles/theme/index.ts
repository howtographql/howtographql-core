import { ThemeInterface } from './ThemeInterface';

// Guide
// [C] means `Component`
// --> Comments marked with //// are top level categories
// --> No tag comments (//) are sub categories
// --> Inline comments are for description

// Q: What to not put here?
// A: Don't put a variable here, if it is only valid to be with
//    a specific component, like `buttonHeight` should be stored beside
//    the `Button` component since it's not useful if that button is not
//    present.

export interface Shadows {
  small: string;
  large: string;
}

const shadows: Shadows = {
  small: '0px 2px 4px rgba(38, 38, 38, 0.15)',
  large: '0px 4px 8px rgba(38, 38, 38, 0.15);',
};

export interface ZIndex {
  mobileStepper: number;
  appBar: number;
  drawer: number;
  modal: number;
  snackbar: number;
  tooltip: number;
}

const zIndex: ZIndex = {
  mobileStepper: 1000,
  appBar: 1100,
  drawer: 1200,
  modal: 1300,
  snackbar: 1400,
  tooltip: 1500,
};

export interface Colors {
  primary: string;
  primaryDark1: string;
  primaryLight1: string;
  secondary: string;
  secondaryDark1: string;
  secondaryLight1: string;
  info: string;
  infoLight1: string;
  infoDark1: string;
  lightGray: string;
  white: string;
}

export const darkColors: Colors = {
  //// Colors
  primary: '#e00082',
  primaryDark1: '#a4036f',
  primaryLight1: '#EB7BBC',
  secondary: '#172a3a',
  secondaryDark1: 'rgb(0, 0, 0)',
  secondaryLight1: 'rgba(23, 42, 58, .5)',
  info: '#2a7ed2',
  infoLight1: '#C2DCF2',
  infoDark1: '#2a7ed2',
  lightGray: 'rgb(244, 244, 244)',
  white: '#fff',
};

export const lightColors: Colors = {
  //// Colors
  primary: '#e00082',
  primaryDark1: '#082333',
  primaryLight1: '#EB7BBC',
  secondary: '#082333',
  secondaryDark1: '#082333',
  secondaryLight1: '#082333',
  info: '#0F7AD8',
  infoLight1: '#459BF2',
  infoDark1: '#2a7ed2',
  lightGray: '#f9f9f9',
  white: '#fff',
};

export interface Sizes {
  breakpoints: string[];
  // Radius
  radii: number[];
  // [C] Container
  middleContainerWidth: number;
  middleContainerNarrowWidth: number;
  // [C] Nav
  navHeight: number;
  brandHeight: number;
  // Spaces
  space: number[];

  // Font Family Stacks
  fontStackMono: string;
  fontSizes: number[];
  fontWeights: number[];
}

export const sizes: Sizes = {
  ///// Sizes
  breakpoints: ['40em', '52em', '64em'],
  // Radius
  radii: [4, 6, 8],
  // [C] Container
  middleContainerWidth: 1200,
  middleContainerNarrowWidth: 1100,
  // [C] Nav
  navHeight: 64,
  brandHeight: 40,
  // Spaces
  space: [
    // margin and padding
    0,
    4,
    8,
    16,
    32,
    64,
    128,
    256,
  ],
  // Font
  fontSizes: [12, 14, 16, 20, 28, 32, 48, 64],
  fontWeights: [300, 400, 600, 700],
  fontStackMono:
    "SFMono-Regular, 'Roboto Mono', Consolas, 'Liberation Mono', Menlo, Courier, monospace",
};

export const theme: ThemeInterface = {
  mode: 'dark',
  colors: darkColors,
  shadows,
  ...sizes,
  ...zIndex,
};

export type SpaceSizes =
  | 0
  | 4
  | 8
  | 12
  | 16
  | 21
  | 24
  | 32
  | 40
  | 48
  | 56
  | 64
  | 72
  | 80
  | 96
  | 100
  | 116
  | 132
  | 144;
