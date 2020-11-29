import I18n from 'i18n-js';
import React from 'react';
import { Image, Text, View } from 'react-native';
import Button from '../../../common/button';
import Card from '../../../common/card';
import { styles } from '../../styles';
import { IDetailCard } from './interface';

const renderDetailContainer = (
    title: string,
    author: string,
    year: string,
    genre: string
) => {
    return (
        <View style={styles.infoContainer}>
            <Text style={styles.title} ellipsizeMode={'tail'} numberOfLines={2}>
                {title}
            </Text>
            <Text style={styles.available}>
                {I18n.t('bookDetail.available')}
            </Text>
            <Text
                style={styles.author}
                ellipsizeMode={'tail'}
                numberOfLines={2}>
                {author}
            </Text>
            <Text
                style={styles.author}
                ellipsizeMode={'tail'}
                numberOfLines={1}>
                {year}
            </Text>
            <Text style={styles.genre} ellipsizeMode={'tail'} numberOfLines={1}>
                {genre}
            </Text>
        </View>
    );
};

const renderActions = () => {
    return (
        <View style={styles.btnContainer}>
            <Button
                onPress={() => null}
                text={I18n.t('bookDetail.wishlist')}
                flat={true}
                disabled={false}
            />
            <Button
                onPress={() => null}
                text={I18n.t('bookDetail.rent')}
                disabled={false}
            />
        </View>
    );
};

const DetailCard = (props: IDetailCard | {}) => {
    const { author = '', image_url = '', title = '', year = '', genre = '' } = {
        ...props,
    };
    return (
        <Card>
            <View style={styles.detailContainer}>
                <Image source={{ uri: image_url }} style={styles.image} />
                {renderDetailContainer(title, author, year, genre)}
            </View>
            {renderActions()}
        </Card>
    );
};

export default DetailCard;
