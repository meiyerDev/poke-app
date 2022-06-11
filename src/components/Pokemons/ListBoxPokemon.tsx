import React, {useState} from 'react';
import {TouchableWithoutFeedback, View, StyleSheet} from 'react-native';
import {Box, BoxTitle, BoxImage} from 'components/Box';
import {IPokemon} from 'interfaces';
import {useNavigation} from '@react-navigation/native';
import {camelCase, makePokemonId} from 'utils';

type Props = {
  item: IPokemon;
};

export const ListBoxPokemon = ({item}: Props) => {
  const [isPress, setIsPress] = useState(false);

  const navigation = useNavigation();

  const onPress = () => {
    navigation.navigate('Pokedex', {
      screen: 'PokemonDetail',
      params: {pokemon: item},
    });
  };

  return (
    <TouchableWithoutFeedback
      onPressIn={() => setIsPress(true)}
      onPressOut={() => setIsPress(false)}
      onPress={onPress}>
      <View style={styles.container}>
        <Box isActive={isPress}>
          <BoxImage uri={item.front_default} />
          <BoxTitle
            titleLeft={makePokemonId(item.id)}
            titleRight={camelCase(item.name)}
          />
        </Box>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
