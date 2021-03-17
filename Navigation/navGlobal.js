import React from 'react';
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from '../screens/1Home';
import MapScreen from '../screens/2Map';
import PublishScreen from '../screens/3Publish';
import MessageScreen from '../screens/4Message';
import ProfileScreen from '../screens/5Profile';

import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

class Navigator extends React.Component {
    render() {
        return (
            <NavigationContainer>
                <Tab.Navigator
                    screenOptions={({ route }) => ({
                        tabBarIcon: ({ focused }) => {
                            let iconName;
                
                            if (route.name === 'HomeScreen') {
                            iconName = focused
                                ? 'home'
                                : 'home-outline';
                            } 
                            
                            else if (route.name === 'MapScreen') {
                            iconName = focused ? 'map' : 'map-outline';
                            }
                            
                            else if (route.name === 'PublishScreen') {
                            iconName = focused ? 'camera' : 'camera-outline';
                            }
                            
                            else if (route.name === 'MessageScreen') {
                            iconName = focused ? 'chatbubble' : 'chatbubble-outline';
                            }
                            
                            else if (route.name === 'ProfileScreen') {
                            iconName = focused ? 'person-circle' : 'person-circle-outline';
                            }
                
                            return <Ionicons name={iconName} size={31} color='white' />;
                        },
                        
                        })}
                        tabBarOptions={{
                            showLabel:false,
                            activeBackgroundColor:'#FFCD00',
                            inactiveBackgroundColor:'#FFCD00',
                        }}

                >
                    <Tab.Screen name="HomeScreen" component={HomeScreen}/>
                    <Tab.Screen name="MapScreen" component={MapScreen} />
                    <Tab.Screen name="PublishScreen" component={PublishScreen} />
                    <Tab.Screen name="MessageScreen" component={MessageScreen} />
                    <Tab.Screen name="ProfileScreen" component={ProfileScreen} />
                </Tab.Navigator>
            </NavigationContainer>
        );
    }
}

export default Navigator;