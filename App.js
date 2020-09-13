import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import ShoppingForm from './src/components/shoppingForm';
import ShoppingList from './src/components/shoppingList';

const Stack = createStackNavigator();

const App = () => (
  <NavigationContainer>
    <Stack.Navigator
      initialRouteName="Shopping Form"
      screenOptions={{gestureEnabled: false}}>
      <Stack.Screen name="Shopping Form" component={ShoppingForm} />
      <Stack.Screen name="Shopping List" component={ShoppingList} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default App;