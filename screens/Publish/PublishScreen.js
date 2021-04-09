import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

import HeaderBis from '../../Header/HeaderBis';

import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/core';

export default function PublishScreen() {

    const navigation = useNavigation();

    return (
        <View style={{ flex:1, backgroundColor:'white' }}>
            <HeaderBis />

            <Button title="Annuler" onPress={() => navigation.navigate("HomeScreen")} />

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
        justifyContent:'center',
        alignItems:'center',
    },
    imgPost: {
        height:210,
        margin:15,
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