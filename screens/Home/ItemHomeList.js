import React from 'react';
import { View, StyleSheet, ImageBackground, Text, Image } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import images from '../../assets/data/dataIMG';

class ListTitle extends React.Component {
    render() {
        return (
            <Text style={styles.homeTitle} >Les plats les plus chauds de ta région</Text>
        );
    }
}


class ItemHomeList extends React.Component {
    render() {

        const food = this.props.food;

        return (
            <View style={styles.globalItem} >
                <ImageBackground 
                    style={{ flex:1 }} 
                    source={images.platsIm[food.foodId]}
                    imageStyle={styles.imgItem}
                >
                    <View style={styles.imgInner}> 
                        <Image style={styles.profilePic} source={images.profileIm[food.id]} />

                        <View style={styles.leftText} >
                            <View style={styles.viewTimeSpace} >
                                <Ionicons name="time-outline" size={20} color='white' />
                                <Text style={styles.textTimeSpace} >Il y a {food.time.toString()}h</Text>
                            </View>

                            <View style={styles.viewTimeSpace} >
                                <Ionicons name="locate-outline" size={20} color='white' />
                                <Text style={styles.textTimeSpace} >à {food.distance.toString()}km</Text>
                            </View>
                            <Text style={styles.textTitle} numberOfLines={1} >{food.title}</Text>
                        </View>

                        <View style={styles.boxPortions} >
                            <Text style={styles.textPortions} >{food.portions.toString()} {(food.portions>1) ? 'portions' : 'portion' }</Text>
                        </View>

                    </View>
                </ImageBackground>
            </View>
        );
    }
}

export { ItemHomeList, ListTitle }

const styles = StyleSheet.create({
    homeTitle: {
        fontFamily:'OpenSans_700Bold',
        fontSize:18,
        color:'#0047BB',
        marginTop:15,
        marginLeft:15,
    },
    globalItem:{
        height:200,
        borderRadius:20,

        marginTop:15,
        marginLeft:10,
        marginRight:10
    },
    imgItem: {
        height:200,
        borderRadius:20,
    },
    imgInner: {
        height:200,
        borderRadius:20,
        flexDirection:'row',
    },
    profilePic: {
        position:'absolute',
        top:11,
        left:11,

        width: 40,
        height: 40,
        borderRadius: 150 / 2,
        overflow: 'hidden',
        borderWidth: 1,
        borderColor: '#FFCD00',
    },
    leftText: {
        flexDirection:'column',
        position:'absolute',
        bottom:11,
        left:11,
        shadowOpacity:1,
        shadowRadius:5,
        shadowOffset:{
            width:0,
            height:0
        }
    },
    textTitle: {
        fontFamily:'OpenSans_700Bold',
        fontSize:22,
        color:'white',
        width:330,
    },
    viewTimeSpace:{
        flexDirection:'row', 
        alignItems:'center',
    },
    textTimeSpace:{
        fontFamily:'OpenSans_600SemiBold',
        fontSize:12,
        color:'white',
        paddingLeft:4,
    },
    boxPortions: {
        backgroundColor:'#FFCD00',
        height:27,
        width:90,
        borderRadius:20,
        position:'absolute',
        top:15,
        right:15,

        justifyContent:'center',
        alignItems:'center',
    },
    textPortions: {
        fontFamily:'OpenSans_700Bold',
        fontSize:14,
        color:'white',
    }
})