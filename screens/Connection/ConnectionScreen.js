import React from 'react';
import { View, Text, StyleSheet, Image, KeyboardAvoidingView } from 'react-native';

import NavConnection from '../../Navigation/NavConnection';

function ConnectionScreen() {
    return(


        <KeyboardAvoidingView 
            style={{ flex:1 }}
            behavior={Platform.OS === "ios" ? "padding" : null}
             >

            <View style={styles.bg0} >
                <View style={styles.upper} >
                    <Text style={styles.txt} >Hello ! Bienvenue sur</Text>
                    <Image source={require('../../assets/Images/LogoFMF.png')} style={styles.img} />
                </View>
            </View>

            <View style={styles.lower} >
                <NavConnection />
            </View>
        </KeyboardAvoidingView>

    );
}

export default ConnectionScreen;

const styles = StyleSheet.create({
    upper: {
        flex: 1,
        alignItems: 'center',
        justifyContent:'center',
        backgroundColor:'white',
        borderBottomLeftRadius:50,
    },
    bg0: {
        flex:1,
        justifyContent:'flex-end',
        backgroundColor:'#FFCD00'
    },
    txt:{
        marginBottom: 18,

        fontFamily:'OpenSans_600SemiBold',
        fontSize: 20,
        color:'#0047BB',
    },
    img: {
        height:155,
        width: 250,

        marginTop: 20,
    },
    lower: {
        flex:1,
        backgroundColor:'white',
    }
})