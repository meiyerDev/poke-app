import React from 'react';
import {StyleSheet, View} from 'react-native';
import {SvgUri} from 'react-native-svg';

type Props = {
  uri: string;
  width?: number;
  height?: number;
};

export const BoxImage = ({uri, width = 90, height = 90}: Props) => {
  return (
    <View style={styles.container}>
      <SvgUri uri={uri} width={width} height={height} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    bottom: '10%',
    alignSelf: 'center',
  },
});
