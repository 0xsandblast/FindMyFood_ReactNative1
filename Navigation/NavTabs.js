import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from '../screens/Home/HomeScreen';
import MapScreen from '../screens/Map/MapScreen';
import PublishScreen from '../screens/Publish/PublishScreen';
import MessageScreen from '../screens/Message/MessageScreen';
import ProfileScreen from '../screens/Profile/ProfileScreen';

import Ionicons from 'react-native-vector-icons/Ionicons';


const Tab = createBottomTabNavigator();

function NavTabs() {
    return (
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
                iconName = focused ? 'add-circle' : 'add-circle-outline';
                }
                
                else if (route.name === 'MessageScreen') {
                iconName = focused ? 'chatbubble' : 'chatbubble-outline';
                }
                
                else if (route.name === 'ProfileScreen') {
                iconName = focused ? 'person-circle' : 'person-circle-outline';
                }

                return <Ionicons name={iconName} size={32} color='white' />;
                
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
            <Tab.Screen name="MessageScreen" component={MessageScreen} options={{tabBarBadge: 2}} />
            <Tab.Screen name="ProfileScreen" component={ProfileScreen} />
        </Tab.Navigator>
    );
}

export default NavTabs;