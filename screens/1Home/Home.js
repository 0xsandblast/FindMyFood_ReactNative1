import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import Header from '../../Header/Header';
import { ItemHomeList, ListTitle } from './ItemHomeList';

import foods from '../../assets/data/dataFMF.json';

class HomeScreen extends React.Component {

    renderHeader = () => {return <ListTitle />};

    render() {
        return (
            <View title="Menu" style={styles.container}>
                <Header/>

                <FlatList
                    ListHeaderComponent={this.renderHeader}
                    numColumns={1}
                    data={foods}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({item}) => 
                        <TouchableOpacity>
                            <ItemHomeList food={item} />
                        </TouchableOpacity>
                    }
                >
                    
                </FlatList>
            </View>
        );
    }
}

export default HomeScreen;

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