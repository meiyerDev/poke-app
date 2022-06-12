import React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import {IPokemonDetail} from 'interfaces';

type Props = {
  stats: IPokemonDetail['stats'];
};

export const ListPokemonStat = ({stats}: Props) => {
  return (
    <FlatList
      numColumns={2}
      data={stats}
      keyExtractor={item => 'type-' + item.name}
      renderItem={({item}) => (
        <View style={styles.containerStat}>
          <Text style={[styles.text, styles.titleStat]}>
            {item.name.toUpperCase()}
          </Text>
          <Text style={[styles.text, styles.valueStat]}>{item.base}</Text>
        </View>
      )}
      columnWrapperStyle={styles.container}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
  },
  containerStat: {
    paddingVertical: 8,
  },
  text: {
    flex: 1,
    fontSize: 16,
    textAlign: 'center',
    minWidth: '40%',
  },
  titleStat: {
    fontWeight: 'bold',
  },
  valueStat: {},
});
