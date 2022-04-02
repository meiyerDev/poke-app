const get = (
  url: string = 'https://pokeapi.co/api/v2/pokemon-species',
): Promise<Response> => {
  return fetch(url).then(response => response.json());
};

export const PokemonService = {
  get,
};

export default PokemonService;
