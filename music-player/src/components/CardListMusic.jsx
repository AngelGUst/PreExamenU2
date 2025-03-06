import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { Card, Icon } from 'react-native-elements';

export default function CardListMusic(props) {
    const { name, descripcion, imagen, onPress } = props;

    return (
        <TouchableOpacity onPress={onPress} activeOpacity={0.8}>
            <View style={styles.container}>
                <Card containerStyle={styles.card}>
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
                            <Icon
                                name="heart-outline"
                                type="material-community"
                                size={26}
                                containerStyle={styles.icon}
                            />
                            <Icon
                                name="dots-three-vertical"
                                type="entypo"
                                size={20}
                                containerStyle={styles.icon}
                            />
                        </View>
                    </View>
                </Card>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',  
        marginBottom: 3,
    },
    card: {
        width: '100%',
        marginHorizontal: 0,
        marginVertical: 0,
        padding: 15,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
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
        color: '#000',
    },
    artist: {
        fontSize: 14,
        color: '#666',
        marginTop: 4,
    },
    iconsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10, 
    },
    icon: {
        padding: 5
    }
});