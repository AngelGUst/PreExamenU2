import React from 'react';
import { View, StyleSheet, Image, ScrollView, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'; // Importa los iconos
import CardListMusic from '../components/CardListMusic';

const PlayerScreen = () => {
    const navigation = useNavigation();

    const handleCardPress = (cancion) => {
        // Navegar a PlaylistScreen
        navigation.navigate('PlaylistScreen', { cancion });
    };

    return (
        <View style={styles.container}>
            {/* Imagen */}
            <Image
                source={{ uri: 'https://placehold.co/400x250.png' }}
                style={styles.image}
            />

            {/* Texto con iconos y botón de play */}
            <View style={styles.header}>
                {/* Sección de texto con iconos (izquierda) */}
                <View style={styles.textSection}>
                    <Text style={styles.playlistTitle}>NSQK PLAYLIST</Text>
                    <View style={styles.info}>
                        <View style={styles.likes}>
                            <Icon name="heart-outline" size={20} color="gray" />
                            <Text style={styles.likesText}>1,200</Text>
                        </View>
                        <View style={styles.duracion}>
                            <Icon name="clock-outline" size={20} color="gray" />
                            <Text style={styles.durationText}>15 min</Text>
                        </View>
                    </View>
                </View>

                {/* Botón de play (derecha) */}
                <Icon
                    name="play-circle"
                    size={50}
                    color="#1DB954"
                    onPress={() => console.log('Reproducir playlist')}
                />
            </View>

            {/* CardListMusic */}
            <ScrollView>
                <View style={styles.cardContainer}>
                    <CardListMusic
                        name="Canción 1"
                        descripcion="Artista 1"
                        imagen="https://placehold.co/300x300.png"
                        onPress={() => handleCardPress({
                            nombre: 'Canción 1',
                            artista: 'Artista 1',
                            imagen: 'https://placehold.co/100x100.png',
                            duracion: '2:30'
                        })}
                    />

                    {/* Repite para las demás cards */}
                    <CardListMusic
                        name="Canción 2"
                        descripcion="Artista 2"
                        imagen="https://placehold.co/300x300.png"
                        onPress={() => handleCardPress({
                            nombre: 'Canción 2',
                            artista: 'Artista 2',
                            imagen: 'https://placehold.co/100x100.png',
                            duracion: '3:45'
                        })}
                    />

                    <CardListMusic
                        name="Canción 2"
                        descripcion="Artista 2"
                        imagen="https://placehold.co/300x300.png"
                        onPress={() => handleCardPress({
                            nombre: 'Canción 2',
                            artista: 'Artista 2',
                            imagen: 'https://placehold.co/100x100.png',
                            duracion: '3:45'
                        })}
                    />

                    <CardListMusic
                        name="Canción 2"
                        descripcion="Artista 2"
                        imagen="https://placehold.co/300x300.png"
                        onPress={() => handleCardPress({
                            nombre: 'Canción 2',
                            artista: 'Artista 2',
                            imagen: 'https://placehold.co/100x100.png',
                            duracion: '3:45'
                        })}
                    />


                    <CardListMusic
                        name="Canción 2"
                        descripcion="Artista 2"
                        imagen="https://placehold.co/300x300.png"
                        onPress={() => handleCardPress({
                            nombre: 'Canción 2',
                            artista: 'Artista 2',
                            imagen: 'https://placehold.co/100x100.png',
                            duracion: '3:45'
                        })}
                    />


                    <CardListMusic
                        name="Canción 2"
                        descripcion="Artista 2"
                        imagen="https://placehold.co/300x300.png"
                        onPress={() => handleCardPress({
                            nombre: 'Canción 2',
                            artista: 'Artista 2',
                            imagen: 'https://placehold.co/100x100.png',
                            duracion: '3:45'
                        })}
                    />


                </View>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#f5f5f5', // Color de fondo opcional
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between', // Alinea el texto a la izquierda y el ícono a la derecha
        alignItems: 'center', // Centra verticalmente
        marginBottom: 20,
    },
    textSection: {
        flex: 1, // Ocupa el espacio disponible
    },
    playlistTitle: {
        fontFamily: 'Poppins-Bold',
        fontSize: 24,
        marginBottom: 10,
    },
    info: {
        flexDirection: 'row',
        gap: 20, // Espacio entre los elementos
    },
    likes: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 5, // Espacio entre el icono y el texto
    },
    likesText: {
        fontFamily: 'Poppins-Regular',
        fontSize: 14,
        color: '#666',
    },
    duracion: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 5, // Espacio entre el icono y el texto
    },
    durationText: {
        fontFamily: 'Poppins-Regular',
        fontSize: 14,
        color: '#666',
    },
    image: {
        width: 400,
        height: 250,
        alignSelf: 'center', // Centra la imagen horizontalmente
        marginTop: -15, // Separación desde la parte superior
        marginBottom: 20, // Espacio entre imagen y card
        borderRadius: 10, // Opcional para bordes redondeados
    },
    cardContainer: {
        flex: 1,
        marginTop: 10,
        marginBottom: 10,
    },
    cardCard: {
        margin: 2,
    }
});

export default PlayerScreen;