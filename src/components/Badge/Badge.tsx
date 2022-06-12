import React, {FC} from 'react';
import {ColorValue, StyleSheet, View} from 'react-native';

type Props = {
  bgColor: ColorValue;
};

export const Badge: FC<Props> = ({children, bgColor}) => {
  return (
    <View style={[styles.container, {backgroundColor: bgColor}]}>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    minWidth: '40%',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
});
