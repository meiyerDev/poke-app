import React from 'react';
import {StyleSheet, TextInput} from 'react-native';

export const InputSearch = () => {
  return (
    <TextInput
      style={styles.inputSearch}
      placeholder="Buscar Pokémon"
      placeholderTextColor="#8D8D8D"
    />
  );
};

const styles = StyleSheet.create({
  inputSearch: {
    marginTop: 16,
    backgroundColor: '#F3F3F3',
    borderRadius: 32,
    width: '90%',
    textAlign: 'center',
    height: 40,
    fontSize: 16,
  },
});

export default InputSearch;
