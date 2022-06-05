import React from 'react';
import {Image, StyleSheet} from 'react-native';

export const AppLogo = () => (
  <Image source={require('assets/logo.png')} style={styles.logo} />
);

const styles = StyleSheet.create({
  logo: {
    width: 160,
    height: 60,
    transform: [{translateX: -20}],
  },
});
