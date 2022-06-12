import React from 'react';
import {PokemonType} from 'constants';
import {Badge} from 'components/Badge';
import {makePokemonTypeColor} from 'utils';
import {StyleSheet, Text} from 'react-native';

type Props = {
  type: PokemonType;
};

export const PokemonTypeBadge = ({type}: Props) => {
  return (
    <Badge bgColor={makePokemonTypeColor(type)}>
      <Text style={styles.title}>{type}</Text>
    </Badge>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#fff',
  },
});
