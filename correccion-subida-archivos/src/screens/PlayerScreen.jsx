import React from 'react';
import { View, StyleSheet, Image, ScrollView, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'; 
import CardListMusic from '../components/CardListMusic';

const PlayerScreen = () => {
    const navigation = useNavigation();

    const handleCardPress = (cancion) => {

        navigation.navigate('PlaylistScreen', { cancion });
    };

    return (
        <View style={styles.container}>

            <Image
                source={{ uri: 'https://upload.wikimedia.org/wikipedia/en/e/e6/The_Weeknd_-_Blinding_Lights.png' }}
                style={styles.image}
            />

            <View style={styles.header}>
            
                <View style={styles.textSection}>
                    <Text style={styles.playlistTitle}>The Weeknd Playlist</Text>
                    <View style={styles.info}>
                        <View style={styles.likes}>
                            <Icon name="heart-outline" size={20} color="#b3b3b3" />
                            <Text style={styles.likesText}>1,200</Text>
                        </View>
                        <View style={styles.duracion}>
                            <Icon name="clock-outline" size={20} color="#b3b3b3" />
                            <Text style={styles.durationText}>15 min</Text>
                        </View>
                    </View>
                </View>


                <TouchableOpacity onPress={() => console.log('Reproducir playlist')}>
                    <Icon
                        name="play-circle"
                        size={50}
                        color="#1DB954"
                    />
                </TouchableOpacity>
            </View>

            <ScrollView style={styles.scrollView}>
                <View style={styles.cardContainer}>
                    <CardListMusic
                        name="Blinding Lights"
                        descripcion="The Weeknd - After Hours"
                        imagen="https://upload.wikimedia.org/wikipedia/en/e/e6/The_Weeknd_-_Blinding_Lights.png"
                        onPress={() => handleCardPress({
                            nombre: 'Blinding Lights',
                            artista: 'The Weeknd',
                            album: 'After Hours',
                            imagen: 'https://upload.wikimedia.org/wikipedia/en/e/e6/The_Weeknd_-_Blinding_Lights.png',
                            duracion: '3:20'
                        })}
                    />

                    <CardListMusic
                        name="Save Your Tears"
                        descripcion="The Weeknd - After Hours"
                        imagen="https://upload.wikimedia.org/wikipedia/en/e/e6/The_Weeknd_-_Blinding_Lights.png"
                        onPress={() => handleCardPress({
                            nombre: 'Save Your Tears',
                            artista: 'The Weeknd',
                            album: 'After Hours',
                            imagen: 'https://upload.wikimedia.org/wikipedia/en/e/e6/The_Weeknd_-_Blinding_Lights.png',
                            duracion: '3:35'
                        })}
                    />

                    <CardListMusic
                        name="In Your Eyes"
                        descripcion="The Weeknd - After Hours"
                        imagen="https://upload.wikimedia.org/wikipedia/en/e/e6/The_Weeknd_-_Blinding_Lights.png"
                        onPress={() => handleCardPress({
                            nombre: 'In Your Eyes',
                            artista: 'The Weeknd',
                            album: 'After Hours',
                            imagen: 'https://upload.wikimedia.org/wikipedia/en/e/e6/The_Weeknd_-_Blinding_Lights.png',
                            duracion: '3:57'
                        })}
                    />

                    <CardListMusic
                        name="Heartless"
                        descripcion="The Weeknd - After Hours"
                        imagen="https://upload.wikimedia.org/wikipedia/en/e/e6/The_Weeknd_-_Blinding_Lights.png"
                        onPress={() => handleCardPress({
                            nombre: 'Heartless',
                            artista: 'The Weeknd',
                            album: 'After Hours',
                            imagen: 'https://upload.wikimedia.org/wikipedia/en/e/e6/The_Weeknd_-_Blinding_Lights.png',
                            duracion: '3:18'
                        })}
                    />

                    <CardListMusic
                        name="After Hours"
                        descripcion="The Weeknd - After Hours"
                        imagen="https://upload.wikimedia.org/wikipedia/en/e/e6/The_Weeknd_-_Blinding_Lights.png"
                        onPress={() => handleCardPress({
                            nombre: 'After Hours',
                            artista: 'The Weeknd',
                            album: 'After Hours',
                            imagen: 'https://upload.wikimedia.org/wikipedia/en/e/e6/The_Weeknd_-_Blinding_Lights.png',
                            duracion: '6:01'
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
        backgroundColor: '#121212',
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 20,
    },
    textSection: {
        flex: 1,
    },
    playlistTitle: {
        fontFamily: 'Poppins-Bold',
        fontSize: 24,
        color: '#ffffff', 
        marginBottom: 10,
    },
    info: {
        flexDirection: 'row',
        gap: 20,
    },
    likes: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 5,
    },
    likesText: {
        fontFamily: 'Poppins-Regular',
        fontSize: 14,
        color: '#b3b3b3',
    },
    duracion: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 5,
    },
    durationText: {
        fontFamily: 'Poppins-Regular',
        fontSize: 14,
        color: '#b3b3b3',
    },
    image: {
        width: '100%',
        height: 250,
        marginBottom: 20,
    },
    scrollView: {
        paddingHorizontal: 20,
    },
    cardContainer: {
        flex: 1,
    },
});

export default PlayerScreen;