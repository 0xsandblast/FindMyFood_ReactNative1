import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

import HeaderBis from '../../Header/HeaderBis';

import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/core';

export default function PublishScreen() {

    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <HeaderBis />

            <Button title="Annuler" onPress={() => navigation.navigate("HomeScreen")} color='#0047BB' />

            <View style={styles.imgPost}>
                <Ionicons name="camera-outline" size={65} color='#C7C7CD' />
                <Text style={styles.textImg} >Ajouter une image*</Text>
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor:'white'
    },  
    imgPost: {
        height:210,
        margin:15,
        marginTop:0,
        borderColor:'#0047BB',
        borderWidth:2,
        borderRadius:20,

        backgroundColor:'white',

        alignItems:'center',
        justifyContent:'center',
    },
    textImg: {
        fontSize:20,
        fontFamily:'OpenSans_400Regular_Italic',
        color:'#C7C7CD'
    }
});