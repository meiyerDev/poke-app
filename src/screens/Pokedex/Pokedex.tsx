import React from 'react';
import {AppHeader} from 'components';
import {PokedexNavigator} from 'navigators';
import {PokemonProvider} from 'contexts';

export const Pokedex = () => {
  return (
    <PokemonProvider>
      <AppHeader />
      <PokedexNavigator />
    </PokemonProvider>
  );
};
