import React from 'react'
import { StyleSheet, View, Text } from 'react-native'

class Logo extends React.Component {
    render() {
        return(
            <View style={{marginLeft:10}}>
                <Text style={{fontSize: 21, color:'white'}}>
                    FindMyFood
                </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    exemple1: {
        marginTop: 20,
        backgroundColor: "blue"
    }
})

export default Logo