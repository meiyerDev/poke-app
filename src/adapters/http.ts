import {PokemonListResponse, PokemonListResponseAddated} from 'interfaces';
import {createAddatedPokemon} from './pokemon';

export const makePokemonsFromResponse = ({
  count,
  next,
  results,
}: PokemonListResponse): PokemonListResponseAddated => ({
  meta: {count, nextPage: next},
  results: results.map(createAddatedPokemon),
});
