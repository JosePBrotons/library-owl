import React, { useEffect, useState } from 'react';
import { ActivityIndicator, ScrollView, Text } from 'react-native';
import { styles } from './styles';
import { IRouteParams } from './interface';
import { useAppContext } from '../../hooks';
import { FETCHING_DATA } from '../../context/flux/types/request';
import { FETCH_SUGGESTIONS } from './api';
import { isArrayLength } from '../../utils';
import { useNavigation, useRoute } from '@react-navigation/native';
import Suggestions from './components/suggestions';
import DetailCard from './components/detailCard';
import { IDetailCard } from './components/detailCard/interface';
import CommentsCard from './components/commentsCard';
import { IComment } from './components/commentsCard/interface';
import { useAsyncStorage } from '@react-native-async-storage/async-storage';
import { rentalsKey } from '../../constants';
import { SET_RENTAL } from '../../context/flux/types/behavior';
import Modal from '../common/modal';
import I18n from 'i18n-js';
import { analyticsManager } from '../../core/analytics';
import events from '../../events';
import Navbar from '../common/navbar';

const fetchSuggestions = async (genre: string, dispatch: any) => {
    await dispatch({
        type: FETCHING_DATA,
        payload: { request: FETCH_SUGGESTIONS(genre), dispatch },
    });
};

const onRent = (
    rentals: Array<IDetailCard>,
    bookInfo: IDetailCard | {},
    dispatch: any,
    setItem: any,
    setRented: React.Dispatch<React.SetStateAction<boolean>>,
    setJustRented: React.Dispatch<React.SetStateAction<boolean>>,
    alreadyRented: boolean
) => async () => {
    if (!alreadyRented) {
        const payload = [...rentals, bookInfo];
        await setItem(JSON.stringify(payload));
        await dispatch({ type: SET_RENTAL, payload });
        await analyticsManager.trackEvent({
            eventName: events.bookDetail.rentedBook,
            properties: { ...bookInfo },
        });
        setRented(true);
        return;
    }
    setJustRented(true);
};

const renderDetailCard = (
    params: IDetailCard | {},
    rentals: Array<any>,
    dispatch: any,
    setItem: any,
    setRented: React.Dispatch<React.SetStateAction<boolean>>,
    setJustRented: React.Dispatch<React.SetStateAction<boolean>>,
    alreadyRented: boolean
) => {
    return (
        <DetailCard
            onRent={onRent(
                rentals,
                params,
                dispatch,
                setItem,
                setRented,
                setJustRented,
                alreadyRented
            )}
            alreadyRented={alreadyRented}
            {...params}
        />
    );
};

const getSuggestions = (suggestions: Array<IRouteParams>, bookId: number) => {
    return isArrayLength(suggestions, 'greater', 0)
        ? suggestions.filter(({ id }) => id !== bookId)
        : [];
};

const renderModal = (title: string, message: string, onPress: any) => {
    return <Modal title={title} message={message} onPress={onPress} />;
};

const renderSuggestions = (
    suggestions: Array<IRouteParams>,
    genre: string,
    bookId: number,
    loading: boolean
) => {
    const arrSuggestions = getSuggestions(suggestions, bookId);
    return loading ? (
        <ActivityIndicator
            style={styles.loading}
            color={styles.loading.color}
            size={'large'}
        />
    ) : (
        isArrayLength(arrSuggestions, 'greater', 0) && (
            <Suggestions
                suggestions={suggestions}
                genre={genre}
                bookId={bookId}
            />
        )
    );
};

const renderComments = (comments: Array<IComment>) => {
    return (
        isArrayLength(comments, 'greater', 0) && (
            <CommentsCard comments={comments} />
        )
    );
};

const trackBookDetail = async (params: any) => {
    const eventData = {
        eventName: events.bookDetail.bookDetail,
        properties: params,
    };
    await analyticsManager.trackEvent(eventData);
};
const Detail = () => {
    const { params = {} } = { ...useRoute() };
    const { navigate } = useNavigation();
    const [rented, setRented] = useState(false);
    const [justRented, setJustRented] = useState(false);
    const { id = 0, genre = '', comments = [] } = { ...params };
    const [state, dispatch] = useAppContext();
    const { suggestions = [], loading = false, rentals = [] } = { ...state };
    const { setItem } = useAsyncStorage(rentalsKey);
    const alreadyRented = Boolean(rentals.find((rentals) => rentals.id === id));
    const leftBtn = {
        action: () => navigate('Library'),
        icon: 'chevron-left',
    };
    useEffect(() => {
        fetchSuggestions(genre, dispatch);
        trackBookDetail(params);
    }, []);
    return (
        <>
            {justRented &&
                renderModal(
                    I18n.t('bookDetail.rentedAlready'),
                    I18n.t('bookDetail.rentedAlreadyMsg'),
                    () => setJustRented(false)
                )}
            {rented &&
                renderModal(
                    I18n.t('bookDetail.bookRented'),
                    I18n.t('bookDetail.rentedSuccessful'),
                    () => setRented(false)
                )}
            <Navbar leftButton={leftBtn}>
                <Text style={styles.navBarTitle}>
                    {I18n.t('global.detail').toUpperCase()}
                </Text>
            </Navbar>
            <ScrollView
                showsVerticalScrollIndicator={false}
                style={styles.container}>
                {renderDetailCard(
                    params,
                    rentals,
                    dispatch,
                    setItem,
                    setRented,
                    setJustRented,
                    alreadyRented
                )}
                {renderSuggestions(suggestions, genre, id, loading)}
                {renderComments(comments)}
            </ScrollView>
        </>
    );
};

export default Detail;
