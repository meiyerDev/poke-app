import {PokemonResponse, IPokemonState} from 'interfaces';
import {makePokemonIcon} from 'utils';

export const makePokemonsFromResponse = ({
  count,
  next,
  results,
}: PokemonResponse): IPokemonState => ({
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
