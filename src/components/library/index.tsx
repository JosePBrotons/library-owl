import { useNavigation } from '@react-navigation/native';
import I18n from 'i18n-js';
import React, { useEffect, useState } from 'react';
import { FlatList, Text, TouchableOpacity, View } from 'react-native';
import { useNetInfo } from '@react-native-community/netinfo';
import { COLORS } from '../../constants';
import { FETCHING_DATA } from '../../context/flux/types/request';
import { httpManager } from '../../core/http_manager';
import { useAppContext } from '../../hooks';
import { isArrayLength, isBlank, isSafeDataType } from '../../utils';
import ActivityBar from '../common/activityBar';
import BooksCard from '../common/card/components/booksCard';
import Input from '../common/input';
import LoadingHOC from '../common/loading';
import Navbar from '../common/navbar';
import { FETCH_LIBRARY, SEARCH_BOOK } from './api';
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

const renderBookCard = (navigate: any, isConnected: boolean) => {
    return ({ item }) => {
        return (
            <TouchableOpacity
                activeOpacity={0.5}
                disabled={!isConnected}
                onPress={goToScreen(navigate, 'Detail', item)}>
                <BooksCard {...item} />
            </TouchableOpacity>
        );
    };
};

const onSearch = (
    bookTitle: string,
    setResults: React.Dispatch<React.SetStateAction<never[]>>
) => {
    return async () => {
        if (!isBlank(bookTitle)) {
            const results = await httpManager.requestHandler({
                payload: { request: SEARCH_BOOK(bookTitle) },
            });
            setResults(results);
            return;
        }
        setResults(null);
    };
};

const getNavRightButton = (
    showSearch: boolean,
    setShowSearch: React.Dispatch<React.SetStateAction<boolean>>,
    setBookTitle: React.Dispatch<React.SetStateAction<string>>,
    setResults: React.Dispatch<React.SetStateAction<null>>
) => {
    const iconByOption = showSearch ? 'close' : 'search';
    const actionByContext = {
        search: () => setShowSearch(true),
        close: () => {
            setShowSearch(false);
            setBookTitle('');
            setResults(null);
        },
    };
    return {
        icon: iconByOption,
        action: actionByContext[iconByOption],
    };
};

const renderNavbarChildren = (
    showSearch: boolean,
    bookTitle: string,
    setBookTitle: React.Dispatch<React.SetStateAction<string>>,
    setResults: React.Dispatch<React.SetStateAction<null>>
) => {
    return showSearch ? (
        <Input
            placeholder={I18n.t('global.search')}
            value={bookTitle}
            onChangeText={(text: string) => setBookTitle(text)}
            placeholderTextColor={COLORS.blue}
            customStyle={styles.searchInput}
            onSubmitEditing={onSearch(bookTitle, setResults)}
        />
    ) : (
        <Text style={styles.navBarTitle}>
            {I18n.t('global.library').toUpperCase()}
        </Text>
    );
};

const renderLeftNavButton = (showSearch: boolean) => {
    return showSearch ? undefined : { icon: 'bell', action: () => null };
};

const FullScreenLoadingHOC = LoadingHOC(View);

const renderActivityBar = (isConnected: boolean) => {
    return (
        !isConnected && (
            <ActivityBar
                icon={'wifi-off'}
                text={I18n.t('global.noConnection')}
            />
        )
    );
};

const Library = () => {
    const navigation = useNavigation();
    const { navigate } = { ...navigation };
    const { isConnected = false } = useNetInfo();
    const [state, dispatch] = useAppContext();
    const [showSearch, setShowSearch] = useState(false);
    const [results, setResults] = useState(null);
    const [bookTitle, setBookTitle] = useState('');
    const { library = [], loading = false } = { ...state };
    useEffect(() => {
        fetchAvailableBooks(dispatch);
    }, []);
    const availableBooks = isArrayLength(library, 'greater', 0) ? library : [];
    return (
        <>
            <FullScreenLoadingHOC
                loading={loading}
                style={styles.loadingContainer}>
                <Navbar
                    leftButton={renderLeftNavButton(showSearch)}
                    rightButton={getNavRightButton(
                        showSearch,
                        setShowSearch,
                        setBookTitle,
                        setResults
                    )}>
                    {renderNavbarChildren(
                        showSearch,
                        bookTitle,
                        setBookTitle,
                        setResults
                    )}
                </Navbar>
                <FlatList
                    data={isSafeDataType(results) ? results : availableBooks}
                    showsVerticalScrollIndicator={false}
                    keyExtractor={keyExtract}
                    style={styles.container}
                    renderItem={renderBookCard(navigate, isConnected)}
                />
            </FullScreenLoadingHOC>
            {renderActivityBar(isConnected)}
        </>
    );
};

export default Library;
