import React, {useEffect} from 'react';
import {ListPokemons} from 'components';
import {usePokemon} from 'hooks';

export const PokemonList = () => {
  const {pokemons, getPokemons} = usePokemon();

  useEffect(() => {
    if (!pokemons.length) {
      getPokemons();
    }
  }, [pokemons, getPokemons]);

  return <ListPokemons />;
};
