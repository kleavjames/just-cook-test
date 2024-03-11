import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import Recipes from '../screens/Recipes';
import About from '../screens/About';
import ContactUs from '../screens/ContactUs';

const Tab = createBottomTabNavigator();

export default function HomeTab() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Recipes" component={Recipes} />
      <Tab.Screen name="About" component={About} />
      <Tab.Screen name="ContactUs" component={ContactUs} />
    </Tab.Navigator>
  );
}
