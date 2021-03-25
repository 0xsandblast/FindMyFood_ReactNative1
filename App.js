import React from 'react';
import { View, StyleSheet } from 'react-native';
import TabsNavigator from './Navigation/navGlobal';

import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';
import { Yellowtail_400Regular } from '@expo-google-fonts/yellowtail';
import {  OpenSans_600SemiBold, OpenSans_700Bold } from '@expo-google-fonts/open-sans';
export default function App() {

  let [fontsLoaded] = useFonts({
    Yellowtail_400Regular,
    OpenSans_600SemiBold,
    OpenSans_700Bold,
  });

  if(!fontsLoaded) {
    return(
      <AppLoading/>
    );
  }

  return (
    <View style={{flex:1}}>

      <TabsNavigator/>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent:'center',
    alignItems:'center',
  },
  barre: {
    flex: 1,
    backgroundColor: '#FFCD00',
    marginTop: 20,
    justifyContent: 'center'
  },
  text: {
    fontSize:40,
    fontFamily:'Yellowtail_400Regular',
  }
})