import {useContext} from 'react';
import {PokemonContext} from 'contexts';

export const usePokemon = () => {
  const context = useContext(PokemonContext);

  return context;
};
