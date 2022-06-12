import {PokemonType} from 'constants';

export type IPokemon = {
  id: number;
  name: string;
  url: string;
  front_default: string;
  details?: null | IPokemonDetail;
};

export type IPokemonDetail = {
  height: number;
  weight: number;
  types: PokemonType[];
  stats: IPokemonStat[];
};

export type IPokemonStat = {
  base: number;
  name: string;
};
