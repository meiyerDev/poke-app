import {IPokemon} from 'interfaces/pokemon';
import {createContext} from 'react';

export interface IPokemonContext {
  pokemons: IPokemon[];
  loading: boolean;
  getPokemons: () => Promise<void>;
}

export const PokemonContext = createContext({} as IPokemonContext);