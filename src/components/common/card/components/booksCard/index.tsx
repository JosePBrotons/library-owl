import React from 'react';
import { Image, Text, View } from 'react-native';
import Card from '../..';
import { IBooksCardProps } from './interface';
import { styles } from './style';

const BooksCard = (props: IBooksCardProps) => {
    const { author = '', title = '', image_url: imgUrl = '' } = { ...props };
    return (
        <Card>
            <View style={styles.cardContainer}>
                <Image source={{ uri: imgUrl }} style={styles.image} />
                <View style={styles.infoContainer}>
                    <Text style={styles.title}>{title}</Text>
                    <Text style={styles.author}>{author}</Text>
                </View>
            </View>
        </Card>
    );
};

export default BooksCard;
