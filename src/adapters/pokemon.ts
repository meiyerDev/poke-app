import {
  PokemonListResponse,
  IPokemonState,
  PokemonDetailRespose,
} from 'interfaces';
import {makePokemonIcon} from 'utils';

export const makePokemonsFromResponse = ({
  count,
  next,
  results,
}: PokemonListResponse): IPokemonState => ({
  meta: {count, nextPage: next},
  results: results.map(({name, url}) => {
    const urlSplited = url.split('/');
    const id = parseInt(urlSplited[urlSplited.length - 2], 10);
    return {
      id,
      name,
      url,
      front_default: makePokemonIcon(id),
    };
  }),
});

export const createAddatedPokemon = (pokemon: PokemonDetailRespose) => pokemon;
