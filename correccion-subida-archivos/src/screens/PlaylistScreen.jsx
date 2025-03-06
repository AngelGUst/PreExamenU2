import React, { useState } from 'react';
import { View, StyleSheet, Image, Text, ScrollView } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { Slider, Icon } from 'react-native-elements';

const PlaylistScreen = () => {
    const route = useRoute();
    const { cancion } = route.params || {};

    const [isPlaying, setIsPlaying] = useState(false);
    const [progress, setProgress] = useState(0);
    const [showLyrics, setShowLyrics] = useState(false);

    const togglePlayPause = () => {
        setIsPlaying(!isPlaying);
    };

    const handleProgressChange = (value) => {
        setProgress(value);
    };

    const toggleLyrics = () => {
        setShowLyrics(!showLyrics);
    };

    return (
        <View style={styles.container}>
            <Image
                source={{ uri: cancion?.imagen }}
                style={styles.image}
            />
            <View style={styles.songInfo}>
                <Text style={styles.title}>{cancion?.nombre}</Text>
                <Text style={styles.artist}>{cancion?.artista}</Text>
            </View>
            <Slider
                style={styles.progressBar}
                minimumValue={0}
                maximumValue={100}
                value={progress}
                onValueChange={handleProgressChange}
                minimumTrackTintColor="#1DB954"
                maximumTrackTintColor="#333"
                thumbTintColor="#1DB954"
                thumbStyle={styles.thumb}
            />
            <View style={styles.timeContainer}>
                <Text style={styles.timeText}>0:00</Text>
                <Text style={styles.timeText}>{cancion?.duracion}</Text>
            </View>
            <View style={styles.controlsContainer}>
                <Icon
                    name="skip-previous"
                    type="material"
                    size={30}
                    color="#fff"
                    onPress={() => console.log('Canción anterior')}
                />
                <Icon
                    name={isPlaying ? "pause" : "play-arrow"}
                    type="material"
                    size={40}
                    color="#000"
                    onPress={togglePlayPause}
                    containerStyle={styles.playButton}
                />
                <Icon
                    name="skip-next"
                    type="material"
                    size={30}
                    color="#fff"
                    onPress={() => console.log('Siguiente canción')}
                />
            </View>
            <Icon
                name="format-align-left"
                type="material"
                size={30}
                color="#fff"
                onPress={toggleLyrics}
                containerStyle={styles.lyricsButton}
            />
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
        backgroundColor: '#121212',
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
        color: '#fff',
        marginBottom: 5,
    },
    artist: {
        fontSize: 16,
        color: '#b3b3b3',
    },
    progressBar: {
        width: '90%',
        marginTop: 10,
    },
    thumb: {
        width: 12,
        height: 12,
        borderRadius: 6,
        backgroundColor: '#1DB954',
    },
    timeContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '90%',
        marginTop: 5,
    },
    timeText: {
        fontSize: 14,
        color: '#b3b3b3',
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
        padding: 10,
        elevation: 5,
        shadowColor: '#1DB954',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 3,    
    },
    lyricsButton: {
        alignSelf: 'flex-start',
        marginLeft: 20,
        marginTop: 20,
    },
    lyricsContainer: {
        width: 300,
        height: 300,
        backgroundColor: '#333',
        borderRadius: 10,
        marginTop: 20,
        padding: 15,
    },
    lyricsText: {
        fontSize: 16,
        color: '#fff',
        lineHeight: 24,
    },
});

export default PlaylistScreen;
