import React, {FC, useCallback, useEffect, useReducer} from 'react';
import {IPokemon} from 'interfaces/pokemon';
import {PokemonContext, pokemonReducer, PokemonActions} from '.';
import {PokemonService} from 'services';

export interface IPokemonState {
  pokemons: IPokemon[];
  loading: boolean;
  meta: {
    nextPage: null | string;
  };
}

const POKEMON_INITIAL_STATE: IPokemonState = {
  pokemons: [],
  loading: false,
  meta: {
    nextPage: null,
  },
};

export const PokemonProvider: FC = ({children}) => {
  const [state, dispatch] = useReducer(pokemonReducer, POKEMON_INITIAL_STATE);

  const getPokemons = useCallback(async () => {
    try {
      const {
        meta: {nextPage},
        results,
      } = await PokemonService.get();
      dispatch({
        type: PokemonActions.setAll,
        payload: {pokemons: results, nextPage},
      });
    } catch (e) {}
  }, []);

  const getNextPage = async () => {
    if (!state.meta.nextPage) {
      return;
    }
    try {
      const {
        meta: {nextPage},
        results,
      } = await PokemonService.get(state.meta.nextPage);
      dispatch({
        type: PokemonActions.setMore,
        payload: {pokemons: results, nextPage},
      });
    } catch (e) {}
  };

  useEffect(() => {
    getPokemons();
  }, [getPokemons]);

  return (
    <PokemonContext.Provider value={{...state, getPokemons, getNextPage}}>
      {children}
    </PokemonContext.Provider>
  );
};
