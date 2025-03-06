import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import PlayerScreen from '../screens/PlayerScreen';
import PlaylistScreen from '../screens/PlaylistScreen';
import { TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';

const Stack = createNativeStackNavigator();

export default function Routes() {
    const [isLiked, setIsLiked] = useState(false); // Estado para manejar si la playlist está "liked"

    // Función para manejar el clic en el ícono de corazón
    const handleLikePress = () => {
        setIsLiked(!isLiked); // Cambiar el estado al hacer clic
    };

    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerStyle: {
                        backgroundColor: '#121212', // Fondo oscuro para la barra de navegación
                    },
                    headerTintColor: '#ffffff', // Color del texto y los íconos en la barra (blanco)
                    headerTitleStyle: {
                        fontWeight: 'bold', // Estilo del título en negrita
                        fontSize: 18, // Tamaño del título
                    },
                    contentStyle: {
                        backgroundColor: '#121212', // Fondo oscuro para todas las pantallas
                    },
                    headerBackTitleStyle: {
                        color: '#b3b3b3', // Color del texto del botón de retroceso (gris claro)
                    },
                }}
            >
                <Stack.Screen 
                    name="Player" 
                    component={PlayerScreen} 
                    options={{ 
                        title: 'Reproductor',
                        headerShown: false, // Ocultar la barra de navegación en esta pantalla
                    }} 
                />
                <Stack.Screen 
                    name="PlaylistScreen" 
                    component={PlaylistScreen} 
                    options={{ 
                        title: 'Lista de reproducción',
                        headerBackTitle: 'Atrás', // Texto del botón de retroceso
                        headerTintColor: '#1DB954', // Color verde para el botón de retroceso (similar a Spotify)
                        headerRight: () => (
                            // Botón de corazón en la esquina derecha
                            <TouchableOpacity onPress={handleLikePress} style={{ marginRight: 15 }}>
                                <Icon
                                    name={isLiked ? 'heart' : 'heart-outline'} // Cambiar el ícono según el estado
                                    type="material-community"
                                    size={26}
                                    color={isLiked ? '#1DB954' : '#b3b3b3'} // Cambiar el color según el estado
                                />
                            </TouchableOpacity>
                        ),
                    }} 
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}