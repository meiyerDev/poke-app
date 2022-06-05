import {IPokemon} from 'interfaces';
import {createContext} from 'react';

export interface IPokemonContext {
  pokemons: IPokemon[];
  loading: boolean;
  getPokemons: () => Promise<void>;
  getNextPage: () => Promise<void>;
}

export const PokemonContext = createContext({} as IPokemonContext);
