import {IPokemon} from 'interfaces';
import {createContext} from 'react';

export interface IPokemonContext {
  pokemons: IPokemon[];
  pokemonsVisited: Required<IPokemon>[];
  pokemonSelected: Required<IPokemon> | null;
  loading: boolean;
  getPokemons: () => Promise<void>;
  getNextPage: () => Promise<void>;
  getPokemon: (isOrName: string | number) => Promise<void>;
}

export const PokemonContext = createContext({} as IPokemonContext);
