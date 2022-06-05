import React from 'react';
import {StyleSheet, View} from 'react-native';
import {SvgUri} from 'react-native-svg';

export const BoxImage = ({uri}: {uri: string}) => {
  return (
    <View style={styles.container}>
      <SvgUri uri={uri} width={90} height={90} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    bottom: '10%',
    alignSelf: 'center',
  },
  image: {
    maxWidth: 90,
    maxHeight: 90,
  },
});
