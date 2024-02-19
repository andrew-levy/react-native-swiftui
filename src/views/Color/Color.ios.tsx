import { requireNativeViewManager } from 'expo-modules-core';
import React from 'react';
import { processColor } from 'react-native';
import { UIColor } from '../../utils/colors';
import { mapToNativeModifiers } from '../../utils/modifiers';
import {
  ColorProps,
  ColorSubComponentProps,
  ColorView,
  NativeColorProps,
} from './types';

const NativeColor: React.ComponentType<NativeColorProps> =
  requireNativeViewManager('Color');

const getColor = (
  colorValue: ColorProps['color'],
  colorScheme: 'light' | 'dark' = 'light'
) => {
  if (typeof colorValue === 'string')
    return UIColor[colorScheme][colorValue] || colorValue;
  return `rgb(${colorValue.red || 0}, ${colorValue.green || 0}, ${
    colorValue.blue || 0
  })` as UIColor;
};

const ColorSubComponent = ({ color, ...props }: ColorSubComponentProps) => {
  return <Color color={color} {...props} />;
};

export const Color: ColorView = ({ color, ...modifiers }: ColorProps) => {
  const colorValue = processColor(getColor(color));
  const mods = mapToNativeModifiers(modifiers);
  const frame = mods.find((mod) => 'frame' in mod);
  return (
    <NativeColor
      modifiers={mapToNativeModifiers(modifiers)}
      style={{
        width: frame?.frame?.width || 30,
        height: frame?.frame?.height || 30,
      }}
      color={colorValue}
    />
  );
};

Color.black = (props) => <ColorSubComponent color="black" {...props} />;
Color.blue = (props) => <ColorSubComponent color="blue" {...props} />;
Color.brown = (props) => <ColorSubComponent color="brown" {...props} />;
Color.clear = (props) => <ColorSubComponent color="clear" {...props} />;
Color.cyan = (props) => <ColorSubComponent color="cyan" {...props} />;
Color.gray = (props) => <ColorSubComponent color="gray" {...props} />;
Color.green = (props) => <ColorSubComponent color="green" {...props} />;
Color.indigo = (props) => <ColorSubComponent color="indigo" {...props} />;
Color.mint = (props) => <ColorSubComponent color="mint" {...props} />;
Color.orange = (props) => <ColorSubComponent color="orange" {...props} />;
Color.pink = (props) => <ColorSubComponent color="pink" {...props} />;
Color.purple = (props) => <ColorSubComponent color="purple" {...props} />;
Color.red = (props) => <ColorSubComponent color="red" {...props} />;
Color.teal = (props) => <ColorSubComponent color="teal" {...props} />;
Color.white = (props) => <ColorSubComponent color="white" {...props} />;
Color.yellow = (props) => <ColorSubComponent color="yellow" {...props} />;
Color.accentColor = (props) => (
  <ColorSubComponent color="accentColor" {...props} />
);
Color.primary = (props) => <ColorSubComponent color="primary" {...props} />;
Color.secondary = (props) => <ColorSubComponent color="secondary" {...props} />;