import React from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import ItemMessage from './ItemMessage';
import foods from '../../assets/data/dataFMF.json';

import HeaderBis from '../../Header/HeaderBis';

function MessageTitle() {
    return(
        <Text style={styles.homeTitle} >Les plats les plus chauds de ta région</Text>
    );
}

function MessageScreen() {
    return (
        <View style={styles.container}>
            <HeaderBis />

            <FlatList
                //ListHeaderComponent={MessageTitle}
                data={foods}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({item}) => 
                    <TouchableOpacity>
                        <ItemMessage food={item} />
                    </TouchableOpacity>
                }
            />

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
    }
});