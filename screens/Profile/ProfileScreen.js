import React from 'react';
import { View, TextInput, Image, StyleSheet, Text, TouchableOpacity } from 'react-native';
import HeaderBis from '../../Header/HeaderBis';
import details from '../../assets/data/dataDetails.json';

import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/core';



function ProfileScreen() {

    const navigation = useNavigation();

    return (
        <View style={styles.global}>

            <HeaderBis />

            <View style={styles.container}>

                <View style={styles.visibleInfo} >
                    <Image style={styles.img} source={require('../../assets/Images/EMusk.jpg')} />
                    <View style={styles.textName}>
                        <TextInput style={styles.textUp} selectionColor={'#FFCD00'} >  Nom</TextInput>
                        <TextInput style={styles.textUp} selectionColor={'#FFCD00'} >  Nom d'utilisateur</TextInput>
                    </View>
                </View>

                {details.map((detail) =>{
                    return(
                        <View key={detail.key} >
                            <TouchableOpacity onPress={() => navigation.navigate('PersoInfo', {detail})} >
                                <View style={styles.details}  >
                                    
                                        <View style={styles.detailsLeft}>
                                            <Ionicons name={detail.icon} size={28} />
                                            
                                            <Text style={styles.textDetails} >{detail.title}</Text>
                                        </View>
                                        <Ionicons name="chevron-forward-outline" size={28} style={{ paddingRight:7 }} />
                                </View>
                            </TouchableOpacity>
                        </View>
                )})}

                <View style={styles.shareList}>
                    <View style={styles.textBorder}>
                        <Text style={styles.shareListTitle} >Plats que vous avez partagé</Text>
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
    textUp: {
        borderBottomWidth: 2,
        borderColor:'#FFCD00',
        fontSize:20,
        color:'rgba(0,0,0,0.3)'
    },
    details: {
        alignItems:'center',
        justifyContent:'space-between',
        flexDirection:'row',
        paddingLeft:15,
        height: 55,
        borderBottomWidth: 2,
        borderColor:'#FFCD00',
    },
    detailsLeft: {
        flexDirection:'row',
        alignItems:'center',
    },
    textDetails: {
        fontSize:20,
        paddingLeft:7,
        color:'#1B365D',
    },
    shareList: {
        justifyContent:'center',
        alignItems:'center',
        height: 50,
    },
    textBorder:{
        borderBottomWidth: 2,
        borderColor:'#FFCD00',
        padding:10,
    },
    shareListTitle: {
        fontSize:18,
        fontFamily:'OpenSans_600SemiBold',
        color:'#0047BB',
    }
});