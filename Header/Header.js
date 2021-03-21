import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';

class Header extends React.Component {
    render() {
        return (
            <View style={styles.headerGlobal} >

                <View style={styles.statusBar} />

                <View style={styles.headerInner} >
                    {/*Logo*/}
                    <View>
                        <Text style={styles.textLogo} >FindMyFood </Text>
                    </View>

                    {/*Coins*/}

                    <View style={styles.headerRight} >
                        <View style={styles.options} >
                            <Ionicons name="options-outline" size={35} color='white' />
                        </View>

                        <View style={styles.coins}>
                            <Image style={styles.img} source={require("../assets/Images/coins.png")} />
                            <Text style={styles.textCoin} >
                                30
                            </Text>
                        </View>
                    </View>
                </View>

            </View>
        );
    }
}

export default Header;

const styles = StyleSheet.create({
    headerGlobal: {
        height:70,
        backgroundColor:'#FFCD00',
    },

    headerInner: {
        flex:1,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',

        paddingLeft:5,
        paddingRight:9,
    },

    statusBar: {
        height:20,
        backgroundColor:'#C99700',
        /*C99700*/
    },

    textLogo: {
        fontFamily:'Yellowtail_400Regular',
        fontSize:34,
        color:'white',
    },

    headerRight: {
        flexDirection:'row', 
        alignItems:'center'
    },

    options: {
        paddingRight:5,
    },

    coins: {
        backgroundColor:'white',
        height:32,
        width:80,
        borderRadius:30,

        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-around',
    },
    textCoin: {
        fontSize:20,
    },
    img: {
        height:26,
        width:27,
    }
})