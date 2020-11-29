import React, { useEffect } from 'react';
import { ScrollView } from 'react-native';
import { styles } from './styles';
import { IRouteParams } from './interface';
import { useAppContext } from '../../hooks';
import { FETCHING_DATA } from '../../context/flux/types/request';
import { FETCH_SUGGESTIONS } from './api';
import { isArrayLength } from '../../utils';
import { useRoute } from '@react-navigation/native';
import Suggestions from './components/suggestions';
import DetailCard from './components/detailCard';
import { IDetailCard } from './components/detailCard/interface';
import CommentsCard from './components/commentsCard';
import { IComment } from './components/commentsCard/interface';

const fetchSuggestions = async (genre: string, dispatch: any) => {
    await dispatch({
        type: FETCHING_DATA,
        payload: { request: FETCH_SUGGESTIONS(genre), dispatch },
    });
};

const renderDetailCard = (params: IDetailCard | {}) => {
    return <DetailCard {...params} />;
};

const getSuggestions = (suggestions: Array<IRouteParams>, bookId: number) => {
    return isArrayLength(suggestions, 'greater', 0)
        ? suggestions.filter(({ id }) => id !== bookId)
        : [];
};

const renderSuggestions = (
    suggestions: Array<IRouteParams>,
    genre: string,
    bookId: number
) => {
    const arrSuggestions = getSuggestions(suggestions, bookId);
    return (
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
const Detail = () => {
    const { params = {} } = { ...useRoute() };
    const { id = 0, genre = '', comments = [] } = { ...params };
    const [state, dispatch] = useAppContext();
    const { suggestions = [] } = { ...state };
    useEffect(() => {
        fetchSuggestions(genre, dispatch);
    }, []);
    return (
        <ScrollView style={styles.container}>
            {renderDetailCard(params)}
            {renderSuggestions(suggestions, genre, id)}
            {renderComments(comments)}
        </ScrollView>
    );
};

export default Detail;
