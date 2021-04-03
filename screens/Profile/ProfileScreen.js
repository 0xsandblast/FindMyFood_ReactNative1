import React from 'react';
import { View, TextInput, Image, StyleSheet } from 'react-native';
import HeaderBis from '../../Header/HeaderBis';

function ProfileScreen() {
    return (
        <View style={styles.global}>

            <HeaderBis />

            <View style={styles.container}>

                <View style={styles.visibleInfo} >
                    <Image style={styles.img} source={require('../../assets/Images/EMusk.jpg')} />
                    <View style={styles.textName}>
                        <TextInput style={styles.textElement} selectionColor={'#FFCD00'} >  Nom</TextInput>
                        <TextInput style={styles.textElement} selectionColor={'#FFCD00'} >  Nom d'utilisateur</TextInput>
                    </View>
                </View>

            </View>

        </View>
    );
}


export default ProfileScreen;

const styles = StyleSheet.create({
    global: {
        flex:1,
    },
    container: {
        alignItems:'center',
    },
    visibleInfo: {
        flexDirection:'row',
        width:'100%',
        padding:15,
        paddingBottom: 25,
        borderBottomWidth:2,
        borderColor:'#FFCD00',
    },
    img: {
        height:120,
        width:120,
        borderRadius: 150 / 2,
        overflow: 'hidden',
        borderWidth: 3,
        borderColor: '#FFCD00',
    },
    textName:{
        flexDirection:'column',
        justifyContent:'space-around',
        width:'60%',
        paddingLeft: 20,
    },
    textElement: {
        borderBottomWidth: 2,
        borderColor:'#FFCD00',
        fontSize:20,
        color:'rgba(0,0,0,0.3)'
    }
});