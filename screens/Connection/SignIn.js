import React from 'react';
import { View, TextInput, Text, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/core';

function SignIn() {

    const navigation = useNavigation();

    return(
    
    <View style={styles.global} >
            <View style={styles.boxes} >
                <View style={styles.inpout} >
                    <Ionicons name="at-outline" size={30} color='rgba(0, 0, 0, 0.5)' style={{padding:10}}/>
                    <TextInput
                        style={styles.text}
                        placeholder="E-mail"
                        />
                </View>

                <View style={styles.inpout} >
                    <Ionicons name="lock-closed-outline" size={30} color='rgba(0, 0, 0, 0.5)' style={{padding:10}} />
                    <TextInput
                        style={styles.text}
                        placeholder="Mot de passe"
                        secureTextEntry={true}
                        />
                </View>
            </View>

        <TouchableOpacity 
            style={styles.button}
            onPress={() => navigation.navigate('NavTabs', { screen: 'HomeScreen' })}
            >

            <Text style= {styles.textButton}>
                Confirmer l'inscription
            </Text>
        </TouchableOpacity>

    </View>

    );
}

export default SignIn;

function ListFill() {
    return(
        <View>
            <View style={styles.inpout} >
                <Ionicons name="at-outline" size={30} color='rgba(0, 0, 0, 0.5)' style={{padding:10}}/>
                <TextInput
                    style={styles.text}
                    placeholder="E-mail"
                    />
            </View>

            <View style={styles.inpout} >
                <Ionicons name="person-outline" size={30} color='rgba(0, 0, 0, 0.5)' style={{padding:10}} />
                <TextInput
                    style={styles.text}
                    placeholder="Nom d'utilisateur"
                    secureTextEntry={true}
                    />
            </View>

            <View style={styles.inpout} >
                <Ionicons name="location-outline" size={30} color='rgba(0, 0, 0, 0.5)' style={{padding:10}} />
                <TextInput
                    style={styles.text}
                    placeholder="Adresse postale"
                    secureTextEntry={true}
                    />
            </View>
            
            <View style={styles.inpout} >
                <Ionicons name="lock-closed-outline" size={30} color='rgba(0, 0, 0, 0.5)' style={{padding:10}} />
                <TextInput
                    style={styles.text}
                    placeholder="Mot de passe"
                    secureTextEntry={true}
                    />
            </View>

            <View style={styles.inpout} >
                <Ionicons name="lock-closed-outline" size={30} color='rgba(0, 0, 0, 0.5)' style={{padding:10}} />
                <TextInput
                    style={styles.text}
                    placeholder="Confirmation"
                    secureTextEntry={true}
                    />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    global: {
        flex:1,
        flexDirection:'column',
        alignItems:'center',
        backgroundColor:'#FFCD00'
    },
    boxes: {
        padding:25,
    },
    inpout: {
        flexDirection:'row',
        alignContent:'center',

        backgroundColor:'rgba(0, 0, 0, 0.10)',
        borderRadius:5,
        borderWidth:1,
        borderColor:'rgba(0, 0, 0, 0.5)',
        height: 53,
        width: 270,
        margin: 10,
    },
    text: {
        flex:1,
        fontFamily:'OpenSans_400Regular',
        fontSize:17,
    },
    button: {
        backgroundColor:'#0047BB',
        height: 55,
        width: 270,
        borderRadius: 50,
        alignItems:'center',
        justifyContent:'center',

    },
    textButton: {
        fontFamily: 'OpenSans_700Bold',
        fontSize: 20,
        color: 'white',
    }
})