import {IPokemon} from './pokemon';

export type IPokemonState = {
  meta: {count: number; nextPage: string};
  results: IPokemon[];
};
