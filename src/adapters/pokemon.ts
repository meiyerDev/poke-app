import {PokemonType} from 'constants';
import {
  PokemonDetailRespose,
  IPokemonDetail,
  IPokemon,
  PokemonResult,
} from 'interfaces';
import {makePokemonIcon} from 'utils';

export const createAddatedPokemon = ({name, url}: PokemonResult): IPokemon => {
  const urlSplited = url.split('/');
  const id = parseInt(urlSplited[urlSplited.length - 2], 10);
  return {
    id,
    name,
    url,
    front_default: makePokemonIcon(id),
  };
};

export const createAddatedPokemonDetail = (
  pokemon: PokemonDetailRespose,
): IPokemonDetail => ({
  height: pokemon.height,
  weight: pokemon.weight,
  types: pokemon.types.map(
    ({type}) =>
      PokemonType[type.name.toUpperCase() as keyof typeof PokemonType] ??
      PokemonType.UNKNOWN,
  ),
  stats: pokemon.stats.map(({base_stat, stat}) => ({
    base: base_stat,
    name: stat.name.replace(/-/, ' '),
  })),
});
