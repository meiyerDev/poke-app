import {IPokemon} from 'interfaces';
import {IPokemonState} from './PokemonProvider';

export enum PokemonActions {
  setAll = '[PokemonActions] - Set all pokemons',
  setMore = '[PokemonActions] - Set more pokemons',
  setSelected = '[PokemonActions] - Set pokemon selected',
  setFounded = '[PokemonActions] - Set pokemon founded',
  resetSelected = '[PokemonActions] - Reset pokemon selected',
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
    }
  | {
      type: PokemonActions.setSelected;
      payload: {pokemon: Required<IPokemon>};
    }
  | {
      type: PokemonActions.setFounded;
      payload: {pokemon: Required<IPokemon>};
    }
  | {
      type: PokemonActions.resetSelected;
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
    case PokemonActions.setSelected:
      return {
        ...state,
        pokemonSelected: action.payload.pokemon,
      };
    case PokemonActions.setFounded:
      const pokemonFounded = action.payload.pokemon;
      const isVisited = state.pokemonsVisited.find(
        pokemon => pokemon.id === pokemonFounded.id,
      );

      return {
        ...state,
        pokemonSelected: pokemonFounded,
        pokemonsVisited: isVisited
          ? state.pokemonsVisited
          : [...state.pokemonsVisited, pokemonFounded],
      };
    case PokemonActions.resetSelected:
      return {
        ...state,
        pokemonSelected: null,
      };
    default:
      return state;
  }
};
