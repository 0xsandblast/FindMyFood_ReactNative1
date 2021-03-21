import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Header from '../../Header/Header';
import ItemHomeList from './ItemHomeList';

class HomeScreen extends React.Component {
    render() {
        return (
            <View title="Menu" style={styles.container}>
                <Header/>
                
                <View style={styles.screenGlobal}>
                    <ItemHomeList />
                </View>
            </View>
        );
    }
}

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        flex:1,
    },
    screenGlobal: {
        flex:1,
        padding:10,
    }
});