import React from 'react';
import {Image, ImageSourcePropType, StyleSheet} from 'react-native';

export const BoxImage = ({source}: {source: ImageSourcePropType}) => {
  return <Image source={source} style={[styles.container, styles.image]} />;
};

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    bottom: '15%',
    alignSelf: 'center',
  },
  image: {
    maxWidth: 90,
    maxHeight: 90,
  },
});

export default BoxImage;
