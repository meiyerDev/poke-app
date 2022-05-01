import {IPokemon} from 'interfaces/pokemon';
import {IPokemonState} from '.';

export enum PokemonActions {
  setAll = '[PokemonActions] - Set all pokemons',
  setMore = '[PokemonActions] - Set more pokemons',
  loading = '[PokemonActions] - Set loading',
}

type IAction =
  | {
      type: PokemonActions.setAll;
      payload: {pokemons: IPokemon[]; nextPage: string};
    }
  | {type: PokemonActions.loading}
  | {
      type: PokemonActions.setMore;
      payload: {pokemons: IPokemon[]; nextPage: string};
    };

export const pokemonReducer = (
  state: IPokemonState,
  action: IAction,
): IPokemonState => {
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
        pokemons: action.payload.pokemons,
        meta: {
          ...state.meta,
          nextPage: action.payload.nextPage,
        },
      };
    case PokemonActions.setMore:
      return {
        ...state,
        loading: false,
        pokemons: [...state.pokemons, ...action.payload.pokemons],
        meta: {
          ...state.meta,
          nextPage: action.payload.nextPage,
        },
      };
    default:
      return state;
  }
};
