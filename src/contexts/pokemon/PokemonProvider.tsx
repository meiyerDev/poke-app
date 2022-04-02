import React, {FC, useReducer} from 'react';
import {IPokemon} from 'interfaces/pokemon';
import {PokemonContext, pokemonReducer, PokemonActions} from '.';

export interface IPokemonState {
  pokemons: IPokemon[];
  loading: boolean;
}

const POKEMON_INITIAL_STATE: IPokemonState = {
  pokemons: [],
  loading: false,
};

export const PokemonProvider: FC = ({children}) => {
  const [state, dispatch] = useReducer(pokemonReducer, POKEMON_INITIAL_STATE);

  const getPokemons = async () => {
    dispatch({type: PokemonActions.setAll, payload: []});
  };

  return (
    <PokemonContext.Provider value={{...state, getPokemons}}>
      {children}
    </PokemonContext.Provider>
  );
};
