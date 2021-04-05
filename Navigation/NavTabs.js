import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from '../screens/Home/HomeScreen';
import MapScreen from '../screens/Map/MapScreen';
import PublishScreen from '../screens/Publish/PublishScreen';
import NavMessage from './NavMessage';
import NavDetails from './NavDetails';

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
                
                else if (route.name === 'NavMessage') {
                iconName = focused ? 'chatbubble' : 'chatbubble-outline';
                }
                
                else if (route.name === 'NavDetails') {
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
            <Tab.Screen name="NavMessage" component={NavMessage} options={{tabBarBadge: 2}} />
            <Tab.Screen name="NavDetails" component={NavDetails} />
        </Tab.Navigator>
    );
}

export default NavTabs;