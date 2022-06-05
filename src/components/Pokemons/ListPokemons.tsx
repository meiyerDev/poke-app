import React from 'react';
import {FlatList, StyleSheet} from 'react-native';
import {usePokemon} from 'hooks/use-pokemon';
import {BoxPokemon} from './BoxPokemon';

export const ListPokemons = () => {
  const {pokemons, getPokemons, getNextPage, loading} = usePokemon();

  return (
    <FlatList
      data={pokemons}
      initialNumToRender={20}
      refreshing={loading}
      keyExtractor={item => item.id.toString()}
      renderItem={({item}) => <BoxPokemon item={item} />}
      onEndReachedThreshold={0.5}
      onRefresh={getPokemons}
      onEndReached={getNextPage}
      numColumns={2}
      horizontal={false}
      columnWrapperStyle={styles.container}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'space-around',
  },
});
