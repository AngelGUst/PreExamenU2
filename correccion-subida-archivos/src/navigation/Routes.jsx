import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import PlayerScreen from '../screens/PlayerScreen';
import PlaylistScreen from '../screens/PlaylistScreen';
import { TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';

const Stack = createNativeStackNavigator();

export default function Routes() {
    const [isLiked, setIsLiked] = useState(false); 


    const handleLikePress = () => {
        setIsLiked(!isLiked); 
    };

    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerStyle: {
                        backgroundColor: '#121212',
                    },
                    headerTintColor: '#ffffff', 
                    headerTitleStyle: {
                        fontWeight: 'bold', 
                        fontSize: 18, 
                    },
                    contentStyle: {
                        backgroundColor: '#121212', 
                    },
                    headerBackTitleStyle: {
                        color: '#b3b3b3', 
                    },
                }}
            >
                <Stack.Screen 
                    name="Player" 
                    component={PlayerScreen} 
                    options={{ 
                        title: 'Reproductor',
                        headerShown: false, 
                    }} 
                />
                <Stack.Screen 
                    name="PlaylistScreen" 
                    component={PlaylistScreen} 
                    options={{ 
                        title: 'Lista de reproducción',
                        headerBackTitle: 'Atrás', 
                        headerTintColor: '#1DB954',
                        headerRight: () => (
                        
                            <TouchableOpacity onPress={handleLikePress} style={{ marginRight: 15 }}>
                                <Icon
                                    name={isLiked ? 'heart' : 'heart-outline'} 
                                    type="material-community"
                                    size={26}
                                    color={isLiked ? '#1DB954' : '#b3b3b3'} 
                                />
                            </TouchableOpacity>
                        ),
                    }} 
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}