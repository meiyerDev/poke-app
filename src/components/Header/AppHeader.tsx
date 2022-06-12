import React from 'react';
import {View, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/EvilIcons';
import {AppLogo} from 'components';
import {InputSearch} from 'components/Input';
import {usePokemon} from 'hooks';
import {useNavigation} from '@react-navigation/native';

export const AppHeader = () => {
  const navigation = useNavigation();
  const {pokemonSelected} = usePokemon();

  return (
    <View style={styles.container}>
      <AppLogo />
      <View style={styles.containerSearch}>
        {pokemonSelected && (
          <Icon
            style={styles.icon}
            name="chevron-left"
            size={50}
            onPress={() => navigation.goBack()}
          />
        )}
        <InputSearch />
        {pokemonSelected && (
          <Icon style={styles.icon} name="share-apple" size={40} />
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    paddingBottom: 10,
    alignItems: 'center',
  },
  containerSearch: {
    paddingHorizontal: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    transform: [{translateY: 6}],
  },
});
