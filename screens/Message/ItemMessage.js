import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

function ItemMessage() {
    return(

        <View style={styles.item} >
            <Image style={styles.img} source={require('../../assets/Images/carbo.png')} />

            <View style={styles.viewTexts}>
                <Text style={styles.textTitle} >Nom du plat</Text>
                <Text>Dernier message de la conversation</Text>
            </View>

        </View>

    );
}

export default ItemMessage;

const styles = StyleSheet.create({
    item: {
        flex:1,
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
})