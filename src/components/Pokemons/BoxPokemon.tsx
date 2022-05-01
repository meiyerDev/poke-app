import React from 'react';
import {Box, BoxTitle, BoxImage} from 'components/Box';
import {IPokemon} from 'interfaces';

type Props = {
  item: IPokemon;
};

export const BoxPokemon = ({item}: Props) => {
  return (
    <Box>
      <BoxImage uri={item.front_default} />
      <BoxTitle titleLeft={item.id.toString()} titleRight={item.name} />
    </Box>
  );
};
