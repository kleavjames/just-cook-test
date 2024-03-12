import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeTab from './HomeTab';
import RecipeDetail from '../screens/RecipeDetail';
import {RootStackParamList} from '../types/navigation';

const Stack = createStackNavigator<RootStackParamList>();

function RootStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="HomeTab" component={HomeTab} />
      <Stack.Screen
        name="RecipeDetail"
        component={RecipeDetail}
        options={{presentation: 'modal'}}
      />
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
