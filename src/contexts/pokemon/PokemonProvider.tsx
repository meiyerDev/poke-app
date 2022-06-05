import React, {FC, useCallback, useReducer} from 'react';
import {IPokemon} from 'interfaces';
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

  const getPokemons = useCallback(() => {
    return PokemonService.get().then(({meta: {nextPage}, results}) => {
      dispatch({
        type: PokemonActions.setAll,
        payload: {pokemons: results, nextPage},
      });
    });
  }, []);

  const getNextPage = async () => {
    if (!state.meta.nextPage) {
      return;
    }

    return PokemonService.get(state.meta.nextPage).then(
      ({meta: {nextPage}, results}) => {
        dispatch({
          type: PokemonActions.setMore,
          payload: {pokemons: results, nextPage},
        });
      },
    );
  };

  return (
    <PokemonContext.Provider value={{...state, getPokemons, getNextPage}}>
      {children}
    </PokemonContext.Provider>
  );
};
