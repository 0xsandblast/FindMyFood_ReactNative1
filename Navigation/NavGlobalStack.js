import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import NavTabs from './NavTabs';
import ConnectionScreen from '../screens/Connection/ConnectionScreen';

const Stack = createStackNavigator();

function NavGlobalStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode='false' screenOptions={{gestureEnabled: false}} >
        <Stack.Screen name="Connection" component={ConnectionScreen} />
        <Stack.Screen name="NavTabs" component={NavTabs} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default NavGlobalStack;