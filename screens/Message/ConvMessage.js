import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, KeyboardAvoidingView } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
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

            <KeyboardAvoidingView style={styles.innerView} behavior={Platform.OS === "ios" ? "padding" : ""} >

                <View style={styles.conv} >
                    <Text>*Conversation*</Text>
                </View>
                
                <View style={styles.textBox} >
                    <TextInput style={styles.msgInput} placeholder="Message..." />
                </View>
                
            </KeyboardAvoidingView>

            
            
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
    },

    innerView:{
        flex:1,
        alignItems:'center',
        justifyContent:'flex-end',
    },
    conv:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',

        width:'95%',
        margin:10,
    },
    textBox: {
        width: '90%',
        height: 45,
        justifyContent:'center',
        paddingLeft:35,
        
        borderWidth:1.5,
        borderColor:'#FFCD00',
        borderBottomLeftRadius: 35,
        borderTopRightRadius:35,

        marginBottom: 10,
    },
    msgInput: {
        fontSize:20,
        fontFamily:'OpenSans_400Regular_Italic',
    },
})
