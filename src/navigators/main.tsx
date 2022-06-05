import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Pokedex} from 'screens';
import {light} from 'themes';
import {RootStackParamList} from 'interfaces';

const RootStack = createNativeStackNavigator<RootStackParamList>();

export const MainNavigator = () => {
  return (
    <NavigationContainer theme={light}>
      <RootStack.Navigator
        initialRouteName="Pokedex"
        screenOptions={{
          headerShown: false,
        }}>
        <RootStack.Screen name="Pokedex" component={Pokedex} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};
