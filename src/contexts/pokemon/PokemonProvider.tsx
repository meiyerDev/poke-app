import React, {FC, useCallback, useReducer} from 'react';
import {IPokemon} from 'interfaces';
import {PokemonContext, pokemonReducer, PokemonActions} from '.';
import {PokemonService} from 'services';

export interface IPokemonState {
  pokemons: IPokemon[];
  loading: boolean;
  pokemonsVisited: IPokemon[];
  pokemonSelected: IPokemon | null;
  meta: {
    nextPage: null | string;
  };
}

const POKEMON_INITIAL_STATE: IPokemonState = {
  pokemons: [],
  pokemonsVisited: [],
  pokemonSelected: null,
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

  const getPokemon = useCallback(
    (isOrName: string | number) => {
      const pokemonFounded = state.pokemonsVisited.find(
        pokemon => pokemon.id === isOrName || pokemon.name === isOrName,
      );

      if (pokemonFounded) {
        dispatch({
          type: PokemonActions.setSelected,
          payload: {pokemon: pokemonFounded},
        });
        return Promise.resolve();
      }

      return PokemonService.find(isOrName).then(response => {
        console.log(response);
      });
    },
    [state.pokemonsVisited],
  );

  return (
    <PokemonContext.Provider
      value={{...state, getPokemons, getNextPage, getPokemon}}>
      {children}
    </PokemonContext.Provider>
  );
};
