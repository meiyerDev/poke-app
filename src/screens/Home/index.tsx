import React from 'react';
import {AppHeader} from 'components';
import {ListPokemons} from 'components';

type Props = {};

export const Home = ({}: Props) => {
  return (
    <>
      <AppHeader />
      <ListPokemons />
    </>
  );
};
