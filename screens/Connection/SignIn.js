import React from 'react';
import { View, StyleSheet, Button } from 'react-native';

import { useNavigation } from '@react-navigation/core';

function SignIn() {

    const navigation = useNavigation();

    return(

    <View style={styles.global} >

        <Button title="Sign In" onPress={()=> navigation.navigate('NavTabs', { screen: 'HomeScreen' }) } />

    </View>

    );
}

export default SignIn;

const styles = StyleSheet.create({
    global: {
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor:'#FFCD00'
    }
})