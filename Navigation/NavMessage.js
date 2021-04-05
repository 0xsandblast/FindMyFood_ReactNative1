import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import MessageScreen from '../screens/Message/MessageScreen';
import ConvMessage from '../screens/Message/ConvMessage';

const Stack = createStackNavigator();

export default function NavMessage() {
  return (
    <Stack.Navigator headerMode='none' >
        <Stack.Screen name="MessageScreen" component={MessageScreen} options={{ headerShown:false }} />
        <Stack.Screen name="ConvMessage" component={ConvMessage} />
    </Stack.Navigator>
  );
}
