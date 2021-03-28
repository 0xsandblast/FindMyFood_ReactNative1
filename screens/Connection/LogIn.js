import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

function LogIn() {
    return(

    <View style={styles.global} >
        <Text>Log In</Text>
    </View>

    );
}

export default LogIn;

const styles = StyleSheet.create({
    global: {
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor:'#FFCD00'
    }
})