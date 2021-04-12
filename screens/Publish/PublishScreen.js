import React from 'react';
import { View, Text, StyleSheet, TextInput, ScrollView } from 'react-native';

import HeaderBis from '../../Header/HeaderBis';

import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/core';

export default function PublishScreen() {

    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <HeaderBis />

            <ScrollView>
                <View style={styles.imgPost}>
                    <Ionicons name="camera-outline" size={65} color='#C7C7CD' />
                    <Text style={styles.textImg} >Ajouter une image*</Text>
                </View>

                <Text style={styles.annotation} >*Le mode paysage est recommandé</Text>

                <View style={styles.name} >
                    <TextInput style={styles.textName} selectionColor={'#FFCD00'} placeholder="Nom du plat"></TextInput>
                </View>

                <View style={styles.globalSelection} >

                    <View style={styles.selection} >

                        <View style={styles.itemSelectionLeft} >
                            <Text style={styles.textSelection} >Portions</Text>
                            <Text style={styles.txtPortions} >80~100g/pers</Text>
                        </View>

                        <View style={styles.itemSelectionRight} ><Text>*List Menu*</Text></View>
                    </View>

                    <View style={styles.selection} >
                        <View style={styles.itemSelectionLeft} >
                            <Text style={styles.textSelection} >Régime alimentaire</Text>
                        </View>
                        <View style={styles.itemSelectionRight} ><Text>*List Menu*</Text></View>
                    </View>

                    <View style={styles.selection} >
                        <View style={styles.itemSelectionLeft} >
                            <Text style={styles.textSelection} >Allergène(s)</Text>
                        </View>
                        <View style={styles.itemSelectionRight} ><Text>*List Menu*</Text></View>
                    </View>

                    <View style={styles.note} >
                        <TextInput style={styles.textNote} selectionColor={'#FFCD00'} placeholder="Note supplémentaire"/>
                    </View>
                    
                </View>
            </ScrollView>

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
        marginHorizontal:15,
        marginTop:15,
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
    },
    annotation: {
        fontSize:14,
        fontFamily:'OpenSans_400Regular_Italic',
        color:'#C7C7CD',

        marginLeft:35,
    },
    name: {
        marginTop:10,
        marginLeft:15,
        marginBottom:5,

        height:50,
        justifyContent:'center',

        borderStartWidth:2,
        borderBottomWidth:2,
        borderRadius:20,
        borderColor:'#FFCD00'

    },
    textName:{
        fontSize:21,
        fontFamily:'OpenSans_400Regular_Italic',
        color:'rgba(0,0,0,0.3)',
        marginLeft:15,
    },
    globalSelection:{
        width:'100%',
        alignItems:'center',
    },
    selection: {
        width:'75%',
        margin:15,

        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
    },
    itemSelectionLeft: {
        borderStartWidth: 2.5, 
        borderColor:'#FFCD00', 
        height:40, 
        justifyContent:'center',
        flexDirection:'column',
    },
    itemSelectionRight: {
        width:60,
        height:40,
        borderColor:'green',
        borderWidth:2,
    },
    textSelection: {
        fontSize:19,
        fontFamily:'OpenSans_600SemiBold',
        color:'#1B365D',

        marginLeft:12,
    },
    txtPortions: {
        fontSize:12,
        color:'#0047BB',
        fontFamily:'OpenSans_400Regular',
        marginLeft:13,
    },
    note: {
        width:'85%',
        height:100,
        borderWidth: 1.5, 
        borderColor:'#FFCD00', 
        borderRadius:20,
    },
    textNote: {
        fontSize:18,
        fontFamily:'OpenSans_400Regular_Italic',
        color:'rgba(0,0,0,0.3)',
        margin:15,
    }
});