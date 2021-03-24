import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import Header from '../../Header/Header';
import ItemHomeList from './ItemHomeList';

import foods from '../../assets/data/dataFMF.json';

class HomeScreen extends React.Component {
    render() {
        return (
            <View title="Menu" style={styles.container}>
                <Header/>
                
                <FlatList
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
    }
});