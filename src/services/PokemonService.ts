import {BASE_POKEMON_API_URL} from '@env';
import {makePokemonsFromResponse} from 'adapters';
import {IPokemonState} from 'interfaces';

const get = (url?: string): Promise<IPokemonState> => {
  return fetch(url ?? BASE_POKEMON_API_URL)
    .then(response => response.json())
    .then(makePokemonsFromResponse);
};

export const PokemonService = {
  get,
};

export default PokemonService;
