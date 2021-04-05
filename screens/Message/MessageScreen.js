import React from 'react';
import { View, Text, FlatList, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/core';

import HeaderBis from '../../Header/HeaderBis';

import foods from '../../assets/data/dataFMF.json';
import images from '../../assets/data/dataIMG';

function MessageScreen() {

    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <HeaderBis />

        {foods.map((food) =>{
            return(
                <View key={food.foodId} >
                    <TouchableOpacity onPress={() => navigation.navigate('ConvMessage', {food})} >

                        <View style={styles.item} >
                            <Image style={styles.img} source={images.platsIm[food.foodId]} />

                            <View style={styles.viewTexts}>
                                <Text style={styles.textTitle} >{food.title}</Text>
                                <Text>Dernier message de la conversation</Text>
                            </View>

                        </View>

                    </TouchableOpacity>
                </View>
            )
        })}

        </View>
    );

}

export default MessageScreen;



const styles = StyleSheet.create({
    container: {
        flex:1,
    },
    homeTitle: {
        fontFamily:'OpenSans_700Bold',
        fontSize:18,
        color:'#0047BB',
        marginTop:15,
        marginLeft:15,
    },


    item: {
        flexDirection:'row',
        alignItems:'center',

        paddingHorizontal:7,
        height:70,
        borderBottomWidth:1,
        borderColor:'grey'
    },
    img:{
        height:55,
        width:55,

        borderRadius:10,
    },
    viewTexts: {
        flexDirection:'column',
        justifyContent:'space-around',
        paddingLeft:8,

        height:'80%',
        width:'100%'
    },
    textTitle: {
        fontFamily:'OpenSans_700Bold',
        fontSize:17,
    },
});