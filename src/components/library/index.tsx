import { useNavigation } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { FlatList, Image, Text, TouchableOpacity, View } from 'react-native';
import { FETCHING_DATA } from '../../context/flux/types/request';
import { useAppContext } from '../../hooks';
import { isArrayLength } from '../../utils';
import Card from '../common/card';
import { FETCH_LIBRARY } from './api';
import { IBook } from './interface';
import { styles } from './styles';

const fetchAvailableBooks = async (dispatch: any) => {
    await dispatch({
        type: FETCHING_DATA,
        payload: { request: FETCH_LIBRARY(), dispatch },
    });
};

const keyExtract = (book: IBook) => {
    const { id: bookId = 0 } = { ...book };
    return `${bookId}`;
};

const goToScreen = (navigate: any, screenName: string, data: any) => {
    return () => !!navigate && navigate(screenName, data);
};

const renderBookCard = (navigate: any) => {
    return ({ item }) => {
        const { author = '', title = '', image_url: imgUrl = '' } = { ...item };
        return (
            <TouchableOpacity
                activeOpacity={0.5}
                onPress={goToScreen(navigate, 'Detail', item)}>
                <Card>
                    <View style={styles.cardContainer}>
                        <Image source={{ uri: imgUrl }} style={styles.image} />
                        <View style={styles.infoContainer}>
                            <Text style={styles.title}>{title}</Text>
                            <Text style={styles.author}>{author}</Text>
                        </View>
                    </View>
                </Card>
            </TouchableOpacity>
        );
    };
};

const Library = () => {
    const { navigate } = { ...useNavigation() };
    const [state, dispatch] = useAppContext();
    const { loading, library = [] } = { ...state };
    useEffect(() => {
        fetchAvailableBooks(dispatch);
    }, []);
    const availableBooks = isArrayLength(library, 'greater', 0) ? library : [];
    return (
        <FlatList
            data={availableBooks}
            showsVerticalScrollIndicator={false}
            keyExtractor={keyExtract}
            style={styles.container}
            renderItem={renderBookCard(navigate)}
        />
    );
};

export default Library;
