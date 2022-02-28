import React, { useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withRepeat,
  withSequence,
  withTiming,
} from 'react-native-reanimated';
import { useLifecycle } from '../../hooks/useLifecycle';
import { useColorScheme } from '../../hooks/useColorScheme';
import { getBorder } from '../../utils/border';
import { getCornerRadius } from '../../utils/cornerRadius';
import { getFrame } from '../../utils/frame';
import { Modifiers } from '../../utils/modifiers';
import { getPadding } from '../../utils/padding';
import { getShadow } from '../../utils/shadow';
import { getTransform } from '../../utils/transform';
import { UIColor, getColor } from '../../utils/colors';

type IndeterminateProps = Modifiers & {
  accentColor?: UIColor;
  scaleEffect?: number;
};

export const Indeterminate = ({
  backgroundColor,
  opacity,
  frame = { width: 20, height: 20 },
  cornerRadius,
  rotationEffect,
  scaleEffect,
  padding,
  border,
  shadow,
  zIndex,
  style,
  accentColor,
  onAppear,
  onDisappear,
}: IndeterminateProps) => {
  useLifecycle(onAppear, onDisappear);
  const shift = 6;
  const colorScheme = useColorScheme();

  return (
    <View
      style={[
        styles.container,
        {
          opacity,
          zIndex,
          backgroundColor: getColor(backgroundColor, colorScheme),
          ...getCornerRadius(cornerRadius),
          ...getShadow(shadow),
          ...getPadding(padding),
          ...getFrame(frame),
          ...getBorder(border),
          ...getTransform(scaleEffect, rotationEffect),
        },
        style,
      ]}
    >
      <Line
        degree="0deg"
        shift={-shift}
        delay={0}
        color={getColor(accentColor, colorScheme, 'systemGray')}
      />
      <Line
        degree="-45deg"
        shift={shift}
        delay={300}
        color={getColor(accentColor, colorScheme, 'systemGray')}
      />
      <Line
        degree="90deg"
        shift={shift}
        delay={600}
        color={getColor(accentColor, colorScheme, 'systemGray')}
      />
      <Line
        degree="45deg"
        shift={shift}
        delay={500}
        color={getColor(accentColor, colorScheme, 'systemGray')}
      />
      <Line
        degree="0deg"
        shift={shift}
        delay={400}
        color={getColor(accentColor, colorScheme, 'systemGray')}
      />
      <Line
        degree="-45deg"
        shift={-shift}
        delay={700}
        color={getColor(accentColor, colorScheme, 'systemGray')}
      />
      <Line
        degree="90deg"
        shift={-shift}
        delay={200}
        color={getColor(accentColor, colorScheme, 'systemGray')}
      />
      <Line
        degree="45deg"
        shift={-shift}
        delay={100}
        color={getColor(accentColor, colorScheme, 'systemGray')}
      />
    </View>
  );
};

const Line = ({
  degree,
  shift,
  delay,
  color,
}: {
  degree: string;
  shift: number;
  delay: number;
  color: string;
}) => {
  const opacity = useSharedValue(0.2);
  const animatedLineStyle = useAnimatedStyle(() => {
    return {
      opacity: opacity.value,
    };
  });
  useEffect(() => {
    opacity.value = withDelay(
      delay,
      withRepeat(
        withSequence(
          withTiming(1, { duration: 100 }),
          withTiming(0.2, { duration: 600 })
        ),
        -1
      )
    );
  }, []);

  return (
    <Animated.View
      style={[
        styles.line,
        animatedLineStyle,
        {
          backgroundColor: color,
          width: 2.5,
          height: 6,
          transform: [
            {
              rotate: degree,
            },
            {
              translateY: shift,
            },
          ],
        },
      ]}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  line: {
    position: 'absolute',
    borderRadius: 5,
    margin: 4,
  },
});
