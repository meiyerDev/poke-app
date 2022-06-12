import React from 'react';
import {FlatList, StyleSheet} from 'react-native';
import {IPokemonDetail} from 'interfaces';
import {PokemonTypeBadge} from './PokemonTypeBadge';

type Props = {
  types: IPokemonDetail['types'];
};

export const ListPokemonType = ({types}: Props) => {
  return (
    <FlatList
      data={types}
      keyExtractor={item => 'type-' + item}
      renderItem={({item}) => <PokemonTypeBadge type={item} />}
      horizontal={true}
      contentContainerStyle={styles.container}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
  },
});
