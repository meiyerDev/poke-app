/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {AppHeader} from 'components';
import {PokemonProvider} from 'contexts/pokemon';

const App = () => {
  return (
    <SafeAreaView style={styles.backgroundStyle}>
      <PokemonProvider>
        <AppHeader />
      </PokemonProvider>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  backgroundStyle: {
    backgroundColor: 'white',
    flex: 1,
  },
  containerApp: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    paddingHorizontal: '2.5%',
    paddingTop: '5%',
  },
});

export default App;
