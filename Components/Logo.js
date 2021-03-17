// Logo in-App, en haut à gauche

import React from 'react'
import { StyleSheet, View, Text } from 'react-native'

class Logo extends React.Component {
    render() {
        return(
            <View style={{marginLeft:10}}>
                <Text style={styles.textstyle}>
                    FindMyFood
                </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    textstyle: {
        fontSize: 21, 
        color:'white'
    }
})

export default Logo
