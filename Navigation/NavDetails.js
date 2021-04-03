import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';


import ProfileScreen from '../screens/Profile/ProfileScreen';
import PersoInfo from '../screens/Profile/PersoInfo';

const Stack = createStackNavigator();

export default function NavDetails() {
  return (
    <Stack.Navigator headerMode='none' >
        <Stack.Screen name="ProfileScreen" component={ProfileScreen} options={{ headerShown:false }} />
        <Stack.Screen name="PersoInfo" component={PersoInfo} />

    </Stack.Navigator>
  );
}

