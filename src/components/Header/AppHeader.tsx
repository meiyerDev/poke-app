import React from 'react';
import {View, StyleSheet} from 'react-native';
import {AppLogo} from 'components';
import {InputSearch} from 'components/Input';

export const AppHeader = () => {
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <AppLogo />
      </View>
      <InputSearch />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    paddingBottom: 10,
  },
  logoContainer: {
    alignItems: 'center',
  },
});
