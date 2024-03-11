import {fontPixel, pixelSizeHorizontal, pixelSizeVertical} from './normalize';

export const lightTheme = {
  colors: {
    typography: '#000000',
    background: '#ffffff',
  },
  size: {
    sm: fontPixel(12),
    md: fontPixel(14),
    base: fontPixel(16),
    lg: fontPixel(20),
    xl: fontPixel(24),
  },
  spaceX: {
    sm: pixelSizeHorizontal(2),
    md: pixelSizeHorizontal(4),
    lg: pixelSizeHorizontal(8),
    xl: pixelSizeHorizontal(12),
  },
  spaceY: {
    sm: pixelSizeVertical(2),
    md: pixelSizeVertical(4),
    lg: pixelSizeVertical(8),
    xl: pixelSizeVertical(12),
  },
} as const;

export const darkTheme = {
  colors: {
    typography: '#ffffff',
    background: '#000000',
  },
  size: {
    sm: fontPixel(12),
    md: fontPixel(14),
    base: fontPixel(16),
    lg: fontPixel(20),
    xl: fontPixel(24),
  },
  spaceX: {
    sm: pixelSizeHorizontal(2),
    md: pixelSizeHorizontal(4),
    lg: pixelSizeHorizontal(8),
    xl: pixelSizeHorizontal(12),
  },
  spaceY: {
    sm: pixelSizeVertical(2),
    md: pixelSizeVertical(4),
    lg: pixelSizeVertical(8),
    xl: pixelSizeVertical(12),
  },
} as const;
