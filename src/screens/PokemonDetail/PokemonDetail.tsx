import React, {useEffect, useMemo} from 'react';
import {Text} from 'react-native';
import {PokemonDetailStackParamList} from 'interfaces';
import {usePokemon} from 'hooks';

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

  return <Text>{pokemon.name}</Text>;
};
