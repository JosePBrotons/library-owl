import { StackActions, useNavigation } from '@react-navigation/native';
import I18n from 'i18n-js';
import React from 'react';
import { FlatList, Image, Text, TouchableOpacity } from 'react-native';
import Card from '../../../common/card';
import { IRouteParams } from '../../interface';
import { styles } from '../../styles';
import { ISuggestionsProps } from './interface';

const keyExtract = (book: IRouteParams) => {
    const { id = 0 } = { ...book };
    return `${id}`;
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

const Suggestions = (props: ISuggestionsProps) => {
    const { genre = '', suggestions = [] } = { ...props };
    const { dispatch: navDispatch } = useNavigation();
    return (
        <>
            <Text style={styles.author}>{`${I18n.t(
                'bookDetail.suggestions'
            )} ${genre}`}</Text>
            <FlatList
                data={suggestions}
                horizontal={true}
                keyExtractor={keyExtract}
                showsHorizontalScrollIndicator={false}
                renderItem={renderSuggestion(navDispatch)}
            />
        </>
    );
};

export default Suggestions;
