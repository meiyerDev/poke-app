import React, {useEffect, useMemo} from 'react';
import {PokemonDetailStackParamList} from 'interfaces';
import {Box, BoxImage} from 'components/Box';
import {usePokemon} from 'hooks';
import {StyleSheet, View, Text} from 'react-native';
import {camelCase, makePokemonId} from 'utils';
import {ListPokemonStat, ListPokemonType} from 'components';

export const PokemonDetail = ({
  route: {
    params: {pokemon: initialPokemon},
  },
}: PokemonDetailStackParamList) => {
  const {getPokemon, pokemonSelected, resetPokemonSelected} = usePokemon();

  const pokemon = useMemo(
    () => pokemonSelected ?? initialPokemon,
    [pokemonSelected, initialPokemon],
  );

  useEffect(() => {
    getPokemon(initialPokemon.id);
    return () => {
      resetPokemonSelected();
    };
  }, [getPokemon, initialPokemon.id, resetPokemonSelected]);

  return (
    <View style={styles.container}>
      <View style={styles.containerContent}>
        <View style={styles.containerTitle}>
          <Text style={[styles.texts, styles.idPokemon]}>
            {makePokemonId(pokemon.id)}
          </Text>
          <Text style={styles.texts}>{camelCase(pokemon.name)}</Text>
        </View>
        <Box>
          <BoxImage uri={pokemon.front_default} width={200} height={200} />
        </Box>
      </View>

      {pokemon.details && (
        <>
          <View style={styles.containerContent}>
            <ListPokemonType types={pokemon.details.types} />
          </View>
          <View style={styles.containerInfo}>
            <ListPokemonStat stats={pokemon.details.stats} />
          </View>
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 10,
  },
  containerTitle: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  containerContent: {
    paddingHorizontal: 20,
  },
  containerInfo: {
    flex: 1,
    marginTop: 20,
    backgroundColor: '#F289FD',
    borderTopStartRadius: 50,
    borderTopEndRadius: 50,
    paddingTop: 32,
    paddingHorizontal: 40,
  },
  texts: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
  idPokemon: {
    color: '#E271FF',
  },
});
