import React, {FC, useCallback, useReducer} from 'react';
import {IPokemon} from 'interfaces';
import {PokemonContext, pokemonReducer, PokemonActions} from '.';
import {PokemonService} from 'services';
import {createAddatedPokemonDetail} from 'adapters';
import {createAddatedPokemon} from '../../adapters/pokemon';

export interface IPokemonState {
  pokemons: IPokemon[];
  loading: boolean;
  pokemonsVisited: Required<IPokemon>[];
  pokemonSelected: Required<IPokemon> | null;
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
    (idOrName: string | number) => {
      const pokemonFounded = state.pokemonsVisited.find(
        pokemon => pokemon.id === idOrName || pokemon.name === idOrName,
      );

      if (pokemonFounded) {
        dispatch({
          type: PokemonActions.setSelected,
          payload: {pokemon: pokemonFounded},
        });
        return Promise.resolve();
      }

      return PokemonService.find(idOrName).then(response => {
        const pokemonDetail = createAddatedPokemonDetail(response);
        const pokemon =
          state.pokemons.find(
            poke => poke.id === idOrName || poke.name === idOrName,
          ) ??
          createAddatedPokemon({name: response.name, url: `/${response.id}/`});

        dispatch({
          type: PokemonActions.setFounded,
          payload: {pokemon: {...pokemon, details: pokemonDetail}},
        });
      });
    },
    [state.pokemonsVisited, state.pokemons],
  );

  const resetPokemonSelected = useCallback(() => {
    dispatch({
      type: PokemonActions.resetSelected,
    });
  }, []);

  return (
    <PokemonContext.Provider
      value={{
        ...state,
        getPokemons,
        getNextPage,
        getPokemon,
        resetPokemonSelected,
      }}>
      {children}
    </PokemonContext.Provider>
  );
};
