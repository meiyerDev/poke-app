import React from 'react';
import {AppHeader} from 'components';
import {PokedexNavigator} from 'navigators';

export const Pokedex = () => {
  return (
    <>
      <AppHeader />
      <PokedexNavigator />
    </>
  );
};
