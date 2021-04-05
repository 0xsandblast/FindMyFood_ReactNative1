import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import NavTabs from './NavTabs';
import ConnectionScreen from '../screens/Connection/ConnectionScreen';
import PersoInfo from '../screens/Profile/PersoInfo';
import ConvMessage from '../screens/Message/ConvMessage';

const Stack = createStackNavigator();

function NavGlobalStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode='false' screenOptions={{gestureEnabled: false}} >
        <Stack.Screen name="Connection" component={ConnectionScreen} />
        <Stack.Screen name="NavTabs" component={NavTabs} />
        <Stack.Screen name="PersoInfo" component={PersoInfo} />
        <Stack.Screen name="ConvMessage" component={ConvMessage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default NavGlobalStack;