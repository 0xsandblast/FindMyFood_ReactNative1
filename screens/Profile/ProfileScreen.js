import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

class ProfileScreen extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>
                    Profile Screen
                </Text>
            </View>
        );
    }
}

export default ProfileScreen;

const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    }
});