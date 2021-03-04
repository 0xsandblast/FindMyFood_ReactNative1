
import React from 'react'
import { View } from 'react-native'
import Logo from './Components/Compo'

export default class App extends React.Component {
  render() {
    return (
        <View id="main" style={{flex: 1}}>
            <View id="head" style={{flex: 1, backgroundColor: '#FFCD00', marginTop: 20, justifyContent: 'center'}}>
                <Logo/>
            </View>

            <View id="body" style={{flex: 8}}>
            </View>

            <View id="bottom" style={{flex:1, backgroundColor: '#FFCD00'}}>
            </View>
        </View>
    )
  }
}