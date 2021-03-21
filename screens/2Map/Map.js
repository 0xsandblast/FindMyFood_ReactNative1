import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Header from "../../Header/Header";

class MapScreen extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Header />
                <View style={styles.screenGlobal}>
                    <Text>
                        Map Screen
                    </Text>
                </View>
            </View>
        );
    }
}

export default MapScreen;

const styles = StyleSheet.create({
    container: {
        flex:1,
    },
    screenGlobal: {
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    }
});