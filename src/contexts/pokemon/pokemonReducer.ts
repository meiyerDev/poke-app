import {IPokemon} from 'interfaces/pokemon';
import {IPokemonState} from '.';

export enum PokemonActions {
  setAll = '[PokemonActions] - Set all pokemons',
  loading = '[PokemonActions] - Set loading',
}

type IAction =
  | {type: PokemonActions.setAll; payload: IPokemon[]}
  | {type: PokemonActions.loading};

export const pokemonReducer = (state: IPokemonState, action: IAction) => {
  switch (action.type) {
    case PokemonActions.loading:
      return {
        ...state,
        loading: true,
      };
    case PokemonActions.setAll:
      return {
        ...state,
        loading: false,
        pokemons: action.payload,
      };
    default:
      return state;
  }
};
