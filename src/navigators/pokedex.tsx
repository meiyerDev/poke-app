import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {PokedexStackParamList} from 'interfaces';
import {ListPokemons} from 'components';
import {Pokemon} from 'screens';

const PokedexStack = createNativeStackNavigator<PokedexStackParamList>();

export const PokedexNavigator = () => {
  return (
    <PokedexStack.Navigator>
      <PokedexStack.Screen
        name="PokemonList"
        component={ListPokemons}
        options={{headerShown: false}}
      />
      <PokedexStack.Screen
        name="PokemonDetail"
        component={Pokemon}
        options={{headerShown: false}}
      />
    </PokedexStack.Navigator>
  );
};
