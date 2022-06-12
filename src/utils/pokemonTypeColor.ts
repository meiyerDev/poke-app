import {PokemonType, PokemonTypeColor} from 'constants';

export const makePokemonTypeColor = (type: PokemonType) => {
  return PokemonTypeColor[type];
};
