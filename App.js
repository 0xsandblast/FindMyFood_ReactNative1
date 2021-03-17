
import React from 'react'
import { View, StyleSheet, Text } from 'react-native'
import Navigator from './Navigation/navGlobal';
import Logo from './Components/Logo'

export default function App() {
  return (
    <View style={{flex:1}}>

      {/*StatusBar ??? */}

      <Navigator/>
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
  }
})