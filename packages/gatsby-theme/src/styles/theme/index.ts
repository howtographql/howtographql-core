import shadows from '../shadows';
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

export interface Shape {
  borderRadius: number;
}

const shape: Shape = {
  borderRadius: 4,
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
  blue: string;
  blueLight1: string;
  blueDark1: string;
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
  blue: '#2a7ed2',
  blueLight1: '#C2DCF2',
  blueDark1: '#2a7ed2',
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
  blue: '#0F7AD8',
  blueLight1: '#459BF2',
  blueDark1: '#2a7ed2',
  lightGray: '#f9f9f9',
  white: '#fff',
};

export interface Sizes {
  sizeHeroTitle: number;
  sizeHeroSubtitle: number;
  sizeSectionTitle: number;
  sizeSectionSubtitle: number;
  sizeFeatureTitle: number;
  sizeFeatureDesc: number;
  sizeBullet: number;
  sizeParagraphTitle: number;
  sizeParagraph: number;
  sizeActions: number /* Buttons, links, nav items, etc */;
  sizeActionsSmall: number;
  sizeCode: number;
  // Radius
  radius: number;
  radiusBig: number;
  radiusSmall: number;
  // [C] Container
  middleContainerWidth: number;
  middleContainerNarrowWidth: number;
  // [C] Nav
  navHeight: number;
  brandHeight: number;
  // Spaces
  space8: number;
  space12: number;
  space16: number;
  space24: number;
  space32: number;
  space40: number;
  space64: number;
  space128: number;
  // Z Index
  diagonalBgZIndex: number;
  getStartedCardZIndex: number;
  worldMapZIndex: number;
  overlayZIndex: number;

  // Font Family Stacks
  fontStackMono: string;
}

export const sizes: Sizes = {
  ///// Sizes
  // Font Sizes
  sizeHeroTitle: 48,
  sizeHeroSubtitle: 24,
  sizeSectionTitle: 32,
  sizeSectionSubtitle: 20,
  sizeFeatureTitle: 28,
  sizeFeatureDesc: 16,
  sizeBullet: 16,
  sizeParagraphTitle: 20,
  sizeParagraph: 16,
  sizeActions: 16 /* Buttons, links, nav items, etc */,
  sizeActionsSmall: 14,
  sizeCode: 12,
  // Radius
  radius: 6,
  radiusBig: 8,
  radiusSmall: 4,
  // [C] Container
  middleContainerWidth: 1200,
  middleContainerNarrowWidth: 1100,
  // [C] Nav
  navHeight: 64,
  brandHeight: 40,
  // Spaces
  space8: 8,
  space12: 12,
  space16: 16,
  space24: 24,
  space32: 32,
  space40: 40,
  space64: 64,
  space128: 128,
  // Z Index
  diagonalBgZIndex: 1,
  getStartedCardZIndex: 5,
  worldMapZIndex: 1,
  overlayZIndex: 100,

  // Font Family Stacks
  fontStackMono:
    "SFMono-Regular, 'Roboto Mono', Consolas, 'Liberation Mono', Menlo, Courier, monospace",
};

export const theme: ThemeInterface = {
  mode: 'dark',
  colors: darkColors,
  sizes,
  shape,
  shadows,
  zIndex,
};
