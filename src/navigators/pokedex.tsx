import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {PokedexStackParamList} from 'interfaces';
import {PokemonDetail, PokemonList} from 'screens';

const PokedexStack = createNativeStackNavigator<PokedexStackParamList>();

export const PokedexNavigator = () => {
  return (
    <PokedexStack.Navigator>
      <PokedexStack.Screen
        name="PokemonList"
        component={PokemonList}
        options={{headerShown: false}}
      />
      <PokedexStack.Screen
        name="PokemonDetail"
        component={PokemonDetail}
        options={{headerShown: false}}
      />
    </PokedexStack.Navigator>
  );
};
