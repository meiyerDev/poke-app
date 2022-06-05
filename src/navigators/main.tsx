import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {AppHeader} from 'components';
import {Home, Pokemon} from 'screens';
import {light} from 'themes';
import {RootStackParamList} from 'interfaces';

const RootStack = createNativeStackNavigator<RootStackParamList>();

export const MainNavigator = () => {
  return (
    <NavigationContainer theme={light}>
      <RootStack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerTitle: () => <AppHeader />,
          headerBackVisible: false,
          headerShadowVisible: false,
        }}>
        <RootStack.Screen name="Home" component={Home} />
        <RootStack.Screen name="Pokemon" component={Pokemon} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};
