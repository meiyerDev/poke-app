import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {AppHeader} from 'components';
import {Home} from 'screens';
import {light} from 'themes';

const Stack = createNativeStackNavigator();

export const MainNavigator = () => {
  return (
    <NavigationContainer theme={light}>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerTitle: () => <AppHeader />,
          headerBackVisible: false,
          headerShadowVisible: false,
        }}>
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
