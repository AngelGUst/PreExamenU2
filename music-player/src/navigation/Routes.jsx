import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import PlayerScreen from '../screens/PlayerScreen';
import PlaylistScreen from '../screens/PlaylistScreen';

const Stack = createNativeStackNavigator();

export default function Routes() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen 
                    name="Player" 
                    component={PlayerScreen} 
                    options={{ title: 'Reproductor' }} 
                />
                <Stack.Screen 
                    name="PlaylistScreen" 
                    component={PlaylistScreen} 
                    options={{ title: 'Lista de reproducción' }} 
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}