import React, { useEffect } from 'react';
import { FlatList, Image, ScrollView, Text, View } from 'react-native';
import { styles } from './styles';
import { IRouteParams } from './interface';
import Card from '../common/card';
import I18n from 'i18n-js';
import Button from '../common/button';
import { useAppContext } from '../../hooks';
import { FETCHING_DATA } from '../../context/flux/types/request';
import { FETCH_SUGGESTIONS } from './api';
import { isArrayLength } from '../../utils';
import {
    StackActions,
    useNavigation,
    useRoute,
} from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const fetchSuggestions = async (genre: string, dispatch: any) => {
    await dispatch({
        type: FETCHING_DATA,
        payload: { request: FETCH_SUGGESTIONS(genre), dispatch },
    });
};

const renderDetailCard = (params: IRouteParams | {}) => {
    const { author = '', image_url = '', title = '', year = '', genre = '' } = {
        ...params,
    };
    return (
        <Card>
            <View style={styles.detailContainer}>
                <Image source={{ uri: image_url }} style={styles.image} />
                <View style={styles.infoContainer}>
                    <Text
                        style={styles.title}
                        ellipsizeMode={'tail'}
                        numberOfLines={2}>
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
                    <Text
                        style={styles.genre}
                        ellipsizeMode={'tail'}
                        numberOfLines={1}>
                        {genre}
                    </Text>
                </View>
            </View>
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
        </Card>
    );
};

const keyExtract = (book: IRouteParams) => {
    const { id = 0 } = { ...book };
    return `${id}`;
};

const getSuggestions = (suggestions: Array<IRouteParams>, bookId: number) => {
    return isArrayLength(suggestions, 'greater', 0)
        ? suggestions.filter(({ id }) => id !== bookId)
        : [];
};

const renderSuggestion = (navDispatch: any) => {
    return ({ item }) => {
        const { image_url = '' } = { ...item };
        const pushAction = StackActions.push('Detail', item);
        const onPush = () => navDispatch(pushAction);
        return (
            <TouchableOpacity
                style={styles.suggestionsContainer}
                onPress={onPush}>
                <Card>
                    <Image source={{ uri: image_url }} style={styles.image} />
                </Card>
            </TouchableOpacity>
        );
    };
};

const renderSuggestions = (
    suggestions: Array<IRouteParams>,
    genre: string,
    bookId: number,
    navDispatch: any
) => {
    const arrSuggestions = getSuggestions(suggestions, bookId);
    return isArrayLength(arrSuggestions, 'greater', 0) ? (
        <>
            <Text style={styles.author}>{`${I18n.t(
                'bookDetail.suggestions'
            )} ${genre}`}</Text>
            <FlatList
                data={arrSuggestions}
                horizontal={true}
                keyExtractor={keyExtract}
                showsHorizontalScrollIndicator={false}
                renderItem={renderSuggestion(navDispatch)}
            />
        </>
    ) : null;
};

const Detail = () => {
    const { params = {} } = { ...useRoute() };
    const { id = 0, genre = '' } = { ...params };
    const [state, dispatch] = useAppContext();
    const { dispatch: navDispatch } = useNavigation();
    const { suggestions = [] } = { ...state };
    useEffect(() => {
        fetchSuggestions(genre, dispatch);
    }, []);
    return (
        <ScrollView style={styles.container}>
            {renderDetailCard(params)}
            {renderSuggestions(suggestions, genre, id, navDispatch)}
        </ScrollView>
    );
};

export default Detail;
