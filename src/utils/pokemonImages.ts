import {PokemonSprite} from 'constants';

export const makePokemonIcon = (id: number) => {
  return `${PokemonSprite.DREAMWORLD}${id}.svg`;
};
