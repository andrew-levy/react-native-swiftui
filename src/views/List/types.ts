import { ReactElement } from 'react';
import { StyleProp, ViewStyle } from 'react-native';
import { Modifiers, NativeModifiersProp } from '../../utils/modifiers';

export type NativeListProps = {
  children?: React.ReactNode;
  modifiers?: NativeModifiersProp;
  header?: string;
  footer?: string;
  style?: StyleProp<ViewStyle>;
};

export type ListProps = {
  style?: StyleProp<ViewStyle>;
  children?: React.ReactNode | ReactElement[];
  header?: string;
  footer?: string;
} & Modifiers;
