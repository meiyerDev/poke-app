import React, {useEffect, useMemo} from 'react';
import {PokemonDetailStackParamList} from 'interfaces';
import {Box, BoxImage} from 'components/Box';
import {usePokemon} from 'hooks';
import {StyleSheet, View, Text} from 'react-native';
import {camelCase, makePokemonId} from 'utils';

export const PokemonDetail = ({
  route: {
    params: {pokemon: initialPokemon},
  },
}: PokemonDetailStackParamList) => {
  const {getPokemon, pokemonSelected} = usePokemon();

  const pokemon = useMemo(
    () => pokemonSelected ?? initialPokemon,
    [pokemonSelected, initialPokemon],
  );

  useEffect(() => {
    getPokemon(pokemon.id);
  }, [getPokemon, pokemon.id]);

  return (
    <View style={styles.container}>
      <View style={styles.containerImage}>
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
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
  },
  containerTitle: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  containerImage: {
    paddingHorizontal: 20,
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
