import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import LogIn from '../screens/Connection/LogIn';
import SignIn from '../screens/Connection/SignIn';
import { View, StyleSheet } from 'react-native';

const TopTab = createMaterialTopTabNavigator();

function NavConnection() {
  return (
    <TopTab.Navigator

      tabBarOptions={{
        labelStyle: styles.label,
        style: {
          backgroundColor:'#FFCD00',
          borderTopRightRadius: 30,
          },
        indicatorStyle: {
          borderWidth:1.5,
          borderColor: '#0047BB',
        }
      }}
    >
      <TopTab.Screen name="Connexion" component={LogIn} />
      <TopTab.Screen name="Inscription" component={SignIn} />
    </TopTab.Navigator>
  );
}

export default NavConnection;


const styles = StyleSheet.create({
  label: {
    color: '#0047BB', 
    fontSize:19,
    fontFamily:'OpenSans_600SemiBold',
    textTransform:'none',
  }
})