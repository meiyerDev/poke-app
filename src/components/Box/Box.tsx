import React, {FC, useMemo} from 'react';
import {StyleSheet, ViewStyle} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

type Props = {
  isActive?: boolean;
  style?: ViewStyle;
};

export const Box: FC<Props> = ({children, isActive, style}) => {
  const gradientColors = useMemo<string[]>(
    () =>
      isActive
        ? ['rgb(237, 185, 230)', 'rgb(226, 73, 255)']
        : ['rgb(255, 197, 249)', 'rgb(233, 97, 255)'],
    [isActive],
  );
  return (
    <LinearGradient
      start={{x: 0.25, y: 0.8}}
      end={{x: 0.65, y: 0}}
      colors={gradientColors}
      style={[styles.container, isActive && styles.containerActive, style]}>
      {children}
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 8,
    minHeight: 128,
    borderRadius: 24,
  },
  containerActive: {
    elevation: 6,
  },
});
