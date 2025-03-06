import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';

export default function CardListMusic(props) {
    const { name, descripcion, imagen, onPress } = props;
    const [isLiked, setIsLiked] = useState(false);

    const handleLikePress = () => {
        setIsLiked(!isLiked);
    };

    return (
        <TouchableOpacity onPress={onPress} activeOpacity={0.8}>
            <View style={styles.container}>
                <View style={styles.card}>
                    <View style={styles.content}>
                        <Image
                            source={{ uri: imagen }}
                            style={styles.image}
                        />

                        <View style={styles.textContainer}>
                            <Text style={styles.title} numberOfLines={1}>{name}</Text>
                            <Text style={styles.artist} numberOfLines={1}>{descripcion}</Text>
                        </View>

                        <View style={styles.iconsContainer}>
                            <TouchableOpacity onPress={handleLikePress}>
                                <Icon
                                    name={isLiked ? 'heart' : 'heart-outline'}
                                    type="material-community"
                                    size={26}
                                    color={isLiked ? '#1DB954' : '#b3b3b3'}
                                    containerStyle={styles.icon}
                                />
                            </TouchableOpacity>
                            <Icon
                                name="dots-three-vertical"
                                type="entypo"
                                size={20}
                                color="#b3b3b3"
                                containerStyle={styles.icon}
                            />
                        </View>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        marginBottom: 8,
    },
    card: {
        width: '100%',
        padding: 10,
        borderRadius: 8,
        backgroundColor: '#1e1e1e',
    },
    content: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 15,
    },
    image: {
        width: 50,
        height: 50,
        borderRadius: 5,
    },
    textContainer: {
        flex: 1,
        marginRight: 10,
    },
    title: {
        fontWeight: '600',
        fontSize: 16,
        color: '#ffffff',
    },
    artist: {
        fontSize: 14,
        color: '#b3b3b3',
        marginTop: 4,
    },
    iconsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
    },
    icon: {
        padding: 5,
    },
});
