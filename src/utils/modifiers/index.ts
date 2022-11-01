import { StyleProp, ViewStyle } from 'react-native';
import type { UIColor } from '../colors';
import { Border } from '../border';
import { Frame, ShapeFrame } from '../frame';
import { Padding } from '../padding';
import { Shadow } from '../shadow';
import { Rotation } from '../transform';
import { Alert } from '../alert';
import { Fonts, FontWeights } from '../fonts';
import { ReactNode } from 'react';

export type Modifiers = {
  alert?: Alert;
  backgroundColor?: UIColor;
  padding?: Padding;
  cornerRadius?: number;
  rotationEffect?: Rotation;
  scaleEffect?: number;
  shadow?: Shadow;
  border?: Border;
  opacity?: number;
  frame?: Frame;
  zIndex?: number;
  preferredColorScheme?: 'light' | 'dark';
  style?: StyleProp<ViewStyle>;
  onAppear?: () => void;
  onDisappear?: () => void;
};

export type TextModifiers = {
  font?: keyof typeof Fonts;
  fontWeight?: keyof typeof FontWeights;
  fontSize?: number;
  foregroundColor?: UIColor;
  customFont?: string;
  bold?: boolean;
  italic?: boolean;
  strikethrough?:
    | boolean
    | { color?: UIColor; pattern?: 'solid' | 'dot' | 'dash' };
  underline?: boolean | { color?: UIColor; pattern?: 'solid' | 'dot' | 'dash' };
};

export type ShapeModifiers = Omit<Modifiers, 'backgroundColor' | 'frame'> & {
  fill?: UIColor;
  frame: ShapeFrame;
};

export type WithChildren<T> = T & {
  children?: ReactNode;
};
