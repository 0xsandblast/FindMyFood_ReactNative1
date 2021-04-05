import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/core';


export default function ConvMessage({ route }) {
    
    const navigation = useNavigation();
    const { food } = route.params;

    return(
        <View style={styles.container} >

            <View style={styles.headerGlobal} >
                <View style={styles.statusBar} />
                <View style={styles.headerInner} >
                    <TouchableOpacity onPress={() => navigation.navigate('NavMessage', { screen: 'MessageScreen' })} style={styles.backButton} >
                        <Ionicons name="chevron-back-outline" size={28} color='white' />
                    </TouchableOpacity>
                    <Text style={styles.textTitle} >{food.title}</Text>
                </View>
            </View>

            <Text>Lorem Ipsum</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
         flex:1,
    },
        headerGlobal: {
        height:70,
        backgroundColor:'#FFCD00',
    },

    headerInner: {
        flex:1,
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',

        paddingLeft:5,
        paddingRight:9,
    },

    statusBar: {
        height:20,
        backgroundColor:'#C99700',
    },
    textTitle:{
        color:'white',
        fontSize:20,
        fontFamily:'OpenSans_700Bold',
    },
    backButton: {
        position:'absolute',
        left:7,
    }
})
