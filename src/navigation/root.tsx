import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeTab from './HomeTab';

const Stack = createStackNavigator();

function RootStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="HomeTab" component={HomeTab} />
    </Stack.Navigator>
  );
}

export default function Root() {
  return (
    <NavigationContainer>
      <RootStack />
    </NavigationContainer>
  );
}
