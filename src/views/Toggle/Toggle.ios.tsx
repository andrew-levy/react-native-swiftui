import { requireNativeViewManager } from 'expo-modules-core';
import React from 'react';
import { getValueOrBinding } from '../../utils/binding';
import { mapToNativeModifiers } from '../../utils/modifiers';
import { NativeToggleProps, ToggleProps } from './types';

const NativeToggle: React.ComponentType<NativeToggleProps> =
  requireNativeViewManager('Toggle');

export function Toggle({
  isOn,
  onChange,
  style,
  label,
  ...modifiers
}: ToggleProps) {
  return (
    <NativeToggle
      isOn={getValueOrBinding(isOn)}
      label={label}
      modifiers={mapToNativeModifiers(modifiers)}
      style={{
        width: 50,
        height: 30,
        ...(style as object),
      }}
      onValueChange={(e) => {
        if (typeof isOn === 'object' && 'setValue' in isOn) {
          isOn.setValue(e.nativeEvent.value);
        }
        onChange?.(e.nativeEvent.value);
      }}
    />
  );
}

Toggle.displayName = 'SwiftUIToggle';