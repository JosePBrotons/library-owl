import I18n from 'i18n-js';
import React from 'react';
import { FlatList, Image, Text, View } from 'react-native';
import { useAppContext } from '../../hooks';
import { isArrayLength } from '../../utils';
import BooksCard from '../common/card/components/booksCard';
import { styles } from './styles';

const keyExtract = (item) => {
    const { id = 0 } = { ...item };
    return `rented-book-#${id}`;
};

const EMPTY_IMG = './../../assets/img/book.png';

const Rentals = () => {
    const [state] = useAppContext();
    const { rentals = [] } = { ...state };
    return isArrayLength(rentals, 'greater', 0) ? (
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
            <Text style={styles.emptyText}>{I18n.t('rentals.empty')}</Text>
        </View>
    );
};

export default Rentals;
