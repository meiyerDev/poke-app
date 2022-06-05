import React from 'react';
import {ListPokemons} from 'components';
import {LayoutApp} from '../../components/Layouts/LayoutApp';

type Props = {};

export const Home = ({}: Props) => {
  return (
    <LayoutApp>
      <ListPokemons />
    </LayoutApp>
  );
};
