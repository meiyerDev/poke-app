import {useContext} from 'react';
import {PokemonContext} from 'contexts/pokemon';

export const usePokemon = () => {
  const context = useContext(PokemonContext);

  return context;
};
