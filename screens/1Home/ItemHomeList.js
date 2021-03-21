import React from 'react';
import { View, StyleSheet, ImageBackground } from 'react-native';

class ItemHomeList extends React.Component {
    render() {
        return (
            <View style={styles.globalItem} >
                <ImageBackground 
                    style={{ flex:1 }} 
                    source={require('../../assets/Images/pasta.png')}
                    imageStyle={styles.img}
                >
                    <View style={styles.imgInner}> 
                    
                    </View>
                </ImageBackground>
            </View>
        );
    }
}

export default ItemHomeList;

const styles = StyleSheet.create({
    globalItem: {
        height:200,
        borderRadius:20,
    },
    img: {
        borderRadius:20,
    },
    imgInner: {
        flex:1,
        borderRadius:20,
        backgroundColor:'black',
        opacity:0.5,
    }
})