import {PokemonSprite} from 'constants';

export const makePokemonIcon = (id: number) =>
  `${PokemonSprite.DREAMWORLD}${id}.svg`;
