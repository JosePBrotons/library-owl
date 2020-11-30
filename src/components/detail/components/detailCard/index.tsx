import I18n from 'i18n-js';
import React from 'react';
import { Image, Text, View } from 'react-native';
import Button from '../../../common/button';
import Card from '../../../common/card';
import { styles } from './styles';
import { IDetailCard } from './interface';
import { isValueLength } from '../../../../utils';
import { useAsyncStorage } from '@react-native-async-storage/async-storage';
import { rentalsKey } from '../../../../constants';

const renderDetailContainer = (
    title: string,
    author: string,
    year: string,
    genre: string
) => {
    const titleLines = isValueLength(title.length, 'greater', 15) ? 2 : 1;
    return (
        <View style={styles.infoContainer}>
            <Text
                style={styles.title}
                ellipsizeMode={'tail'}
                numberOfLines={titleLines}>
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

const renderActions = (onRent: any, alreadyRented: boolean) => {
    return (
        <View style={styles.btnContainer}>
            <Button
                onPress={() => null}
                text={I18n.t('bookDetail.wishlist')}
                flat={true}
                disabled={false}
            />
            <Button
                onPress={() => onRent()}
                text={I18n.t(
                    alreadyRented ? 'bookDetail.rented' : 'bookDetail.rent'
                )}
                disabled={false}
            />
        </View>
    );
};

const DetailCard = (props: IDetailCard | {}) => {
    const {
        author = '',
        image_url = '',
        title = '',
        year = '',
        genre = '',
        onRent,
        alreadyRented = false,
    } = {
        ...props,
    };
    return (
        <Card>
            <View style={styles.detailContainer}>
                <Image source={{ uri: image_url }} style={styles.image} />
                {renderDetailContainer(title, author, year, genre)}
            </View>
            {renderActions(onRent, alreadyRented)}
        </Card>
    );
};

export default DetailCard;
