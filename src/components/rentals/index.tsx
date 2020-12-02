import I18n from 'i18n-js';
import React from 'react';
import { FlatList, Image, Text, View } from 'react-native';
import { useNetInfo } from '@react-native-community/netinfo';
import { useAppContext } from '../../hooks';
import { isArrayLength } from '../../utils';
import ActivityBar from '../common/activityBar';
import BooksCard from '../common/card/components/booksCard';
import Navbar from '../common/navbar';
import { styles } from './styles';

const EMPTY_IMG = './../../assets/img/book.png';

const keyExtract = (item) => {
    const { id = 0 } = { ...item };
    return `rented-book-#${id}`;
};

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

const Rentals = () => {
    const [state] = useAppContext();
    const { isConnected = false } = useNetInfo();
    const { rentals = [] } = { ...state };
    return (
        <>
            <Navbar>
                <Text style={styles.navBarTitle}>
                    {I18n.t('global.rentals').toUpperCase()}
                </Text>
            </Navbar>
            {isArrayLength(rentals, 'greater', 0) ? (
                <FlatList
                    data={rentals}
                    showsVerticalScrollIndicator={false}
                    keyExtractor={keyExtract}
                    style={styles.container}
                    renderItem={({ item }) => {
                        return <BooksCard {...item} />;
                    }}
                />
            ) : (
                <View style={styles.emptyContainer}>
                    <Image source={require(EMPTY_IMG)} style={styles.img} />
                    <Text style={styles.emptyText}>
                        {I18n.t('rentals.empty')}
                    </Text>
                </View>
            )}
            {renderActivityBar(isConnected)}
        </>
    );
};

export default Rentals;
