import React, { useState } from 'react';
import { View, StyleSheet, Image, Text, ScrollView } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { Slider, Icon } from 'react-native-elements';

const PlaylistScreen = () => {
    const route = useRoute();
    const { cancion } = route.params || {}; // Extrae los datos de la canción

    // Estado para controlar la reproducción y el progreso
    const [isPlaying, setIsPlaying] = useState(false);
    const [progress, setProgress] = useState(0); // Progreso de la canción (0 a 100)
    const [showLyrics, setShowLyrics] = useState(false); // Estado para mostrar/ocultar la letra

    // Función para manejar el botón de play/pause
    const togglePlayPause = () => {
        setIsPlaying(!isPlaying);
    };

    // Función para manejar el cambio en la barra de progreso
    const handleProgressChange = (value) => {
        setProgress(value);
    };

    // Función para mostrar/ocultar la letra de la canción
    const toggleLyrics = () => {
        setShowLyrics(!showLyrics);
    };

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
                <Text style={styles.timeText}>0:00</Text>
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

            {/* Botón para ver la letra de la canción (alineado a la izquierda) */}
            <Icon
                name="format-align-left"
                type="material"
                size={30}
                color="#fff"
                onPress={toggleLyrics}
                containerStyle={styles.lyricsButton}
            />

            {/* Recuadro para la letra de la canción */}
            {showLyrics && (
                <View style={styles.lyricsContainer}>
                    <ScrollView>
                        <Text style={styles.lyricsText}>
                            {cancion?.letra || "Letra no disponible."}
                        </Text>
                    </ScrollView>
                </View>
            )}
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
        marginTop: 10, // Ajusté el margen superior para subir el slider
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
    lyricsButton: {
        alignSelf: 'flex-start', // Alinea el botón a la izquierda
        marginLeft: 20, // Margen izquierdo para separarlo del borde
        marginTop: 20, // Espacio entre los controles y el botón de letra
    },
    lyricsContainer: {
        width: 300, // Ancho del recuadro
        height: 300, // Alto del recuadro
        backgroundColor: '#333', // Fondo oscuro para el recuadro
        borderRadius: 10,
        marginTop: 20,
        padding: 15,
    },
    lyricsText: {
        fontSize: 16,
        color: '#fff', // Texto blanco
        lineHeight: 24, // Espaciado entre líneas
    },
});

export default PlaylistScreen;