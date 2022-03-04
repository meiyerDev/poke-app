import React from 'react';
import {View, StyleSheet} from 'react-native';
import {AppLogo} from 'components';
import {InputSearch} from 'components/Input';

export const AppHeader = () => {
  return (
    <View style={styles.container}>
      <AppLogo />
      <InputSearch />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // backgroundColor: 'red',
    alignItems: 'center',
    paddingTop: 40,
    paddingBottom: 10,
  },
});

export default AppHeader;
