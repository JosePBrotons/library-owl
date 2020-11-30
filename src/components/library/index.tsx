import { useNavigation } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { FlatList, TouchableOpacity } from 'react-native';
import { FETCHING_DATA } from '../../context/flux/types/request';
import { useAppContext } from '../../hooks';
import { isArrayLength } from '../../utils';
import BooksCard from '../common/card/components/booksCard';
import { FETCH_LIBRARY } from './api';
import { IBook } from './interface';
import { styles } from './styles';

const fetchAvailableBooks = async (dispatch: any) => {
    await dispatch({
        type: FETCHING_DATA,
        payload: { request: FETCH_LIBRARY(), dispatch },
    });
};

const goToScreen = (navigate: any, screenName: string, data: any) => {
    return () => !!navigate && navigate(screenName, data);
};

const keyExtract = (book: IBook) => {
    const { id: bookId = 0 } = { ...book };
    return `${bookId}`;
};

const renderBookCard = (navigate: any) => {
    return ({ item }) => {
        return (
            <TouchableOpacity
                activeOpacity={0.5}
                onPress={goToScreen(navigate, 'Detail', item)}>
                <BooksCard {...item} />
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
