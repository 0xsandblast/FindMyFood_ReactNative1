import React from 'react';
import MapView from 'react-native-maps';
import { View, StyleSheet, Dimensions } from 'react-native';
import Header from "../../Header/Header";

class MapScreen extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Header />

                <MapView 
                    style={styles.map}
                    initialRegion={{
                        latitude: 48.845527435782266,
                        longitude: 2.3280244984702856,
                        latitudeDelta: 0.08,
                        longitudeDelta: 0.08,
                      }}
                />
            </View>
        );
    }
}

export default MapScreen;

const styles = StyleSheet.create({
    container: {
        flex:1,
    },
    map: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    },
});