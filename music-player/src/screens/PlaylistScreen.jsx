import React, { useState } from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { Slider, Icon } from 'react-native-elements';

const PlaylistScreen = () => {
    const route = useRoute();
    const { cancion } = route.params || {}; // Extrae los datos de la canción

    // Estado para controlar la reproducción y el progreso
    const [isPlaying, setIsPlaying] = useState(false);
    const [progress, setProgress] = useState(0); // Progreso de la canción (0 a 100)

    // Función para manejar el botón de play/pause
    const togglePlayPause = () => {
        setIsPlaying(!isPlaying);
    };

    // Función para manejar el cambio en la barra de progreso
    const handleProgressChange = (value) => {
        setProgress(value);
    };

    // Función para formatear el tiempo (segundos a mm:ss)
    const formatTime = (seconds) => {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = Math.floor(seconds % 60);
        return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
    };

    // Tiempo actual y total (simulado)
    const currentTime = (progress / 100) * 200; // Simula una canción de 200 segundos
    const totalTime = 200; // Duración total de la canción

    return (
        <View style={styles.container}>
            {/* Imagen de la canción */}
            <Image
                source={{ uri: cancion?.imagen }}
                style={styles.image}
            />

            {/* Información de la canción (nombre, artista y duración) */}
            <View style={styles.songInfo}>
                <Text style={styles.title}>{cancion?.nombre}</Text>
                <Text style={styles.artist}>{cancion?.artista}</Text>
            </View>

            {/* Barra de progreso */}
            <Slider
                style={styles.progressBar}
                minimumValue={0}
                maximumValue={100}
                value={progress}
                onValueChange={handleProgressChange}
                minimumTrackTintColor="#1DB954" // Color de la parte completada
                maximumTrackTintColor="#333" // Color de la parte no completada
                thumbTintColor="#1DB954" // Color del control deslizante
                thumbStyle={styles.thumb}
            />

            {/* Tiempo debajo del slider */}
            <View style={styles.timeContainer}>
                <Text style={styles.timeText}>{formatTime(currentTime)}</Text>
                <Text style={styles.timeText}>{cancion?.duracion}</Text>
            </View>

            {/* Controles de reproducción (centrados) */}
            <View style={styles.controlsContainer}>
                {/* Botón de anterior */}
                <Icon
                    name="skip-previous"
                    type="material"
                    size={30} // Ícono más pequeño
                    color="#fff"
                    onPress={() => console.log('Canción anterior')}
                />

                {/* Botón de play/pause */}
                <Icon
                    name={isPlaying ? "pause" : "play-arrow"}
                    type="material"
                    size={40} // Ícono más pequeño
                    color="#000"
                    onPress={togglePlayPause}
                    containerStyle={styles.playButton}
                />

                {/* Botón de siguiente */}
                <Icon
                    name="skip-next"
                    type="material"
                    size={30} // Ícono más pequeño
                    color="#fff"
                    onPress={() => console.log('Siguiente canción')}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#121212', // Fondo oscuro similar a Spotify
    },
    image: {
        width: 300,
        height: 300,
        borderRadius: 10,
        marginBottom: 20,
    },
    songInfo: {
        width: '100%',
        paddingHorizontal: 20,
        marginBottom: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#fff', // Texto blanco
        marginBottom: 5,
    },
    artist: {
        fontSize: 16,
        color: '#b3b3b3', // Texto gris claro
    },
    duration: {
        fontSize: 14,
        color: '#b3b3b3', // Texto gris claro
    },
    progressBar: {
        width: '90%',
        marginTop: 20,
    },
    thumb: {
        width: 12, // Ancho de la bolita
        height: 12, // Alto de la bolita
        borderRadius: 6, // Hace que sea circular
        backgroundColor: '#1DB954', // Color de la bolita
    },
    timeContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '90%',
        marginTop: 5,
    },
    timeText: {
        fontSize: 14,
        color: '#b3b3b3', // Texto gris claro
    },
    controlsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '90%',
        marginTop: 30,
    },
    playButton: {
        backgroundColor: '#1DB954',
        borderRadius: 50,
        padding: 10, // Padding reducido
        elevation: 5, // Sombra en Android
        shadowColor: '#1DB954', // Sombra en iOS
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 3,
    },
});

export default PlaylistScreen;