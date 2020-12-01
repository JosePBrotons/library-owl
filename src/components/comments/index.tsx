import {
    StackActions,
    useNavigation,
    useRoute,
} from '@react-navigation/native';
import I18n from 'i18n-js';
import React, { useEffect } from 'react';
import { FlatList, Text } from 'react-native';
import { analyticsManager } from '../../core/analytics';
import events from '../../events';
import Card from '../common/card';
import Navbar from '../common/navbar';
import Comment from '../detail/components/commentsCard/components/comment';
import { IComment } from '../detail/components/commentsCard/interface';
import { styles } from './styles';

const keyExtract = (comment: IComment) => {
    const { username = '' } = { ...comment };
    return `${username}`;
};

const renderComment = ({ item }) => {
    return (
        <Card>
            <Comment {...item} />
        </Card>
    );
};

const trackComments = async () => {
    const evenData = {
        eventName: events.comments.commentsDetail,
        properties: {},
    };
    await analyticsManager.trackEvent(evenData);
};

const Comments = () => {
    const { params = {} } = useRoute();
    const { dispatch: navDispatch } = useNavigation();
    const { comments = [] } = { ...params };
    const leftBtn = {
        action: () => navDispatch(StackActions.pop()),
        icon: 'chevron-left',
    };
    useEffect(() => {
        trackComments();
    }, []);
    return (
        <>
            <Navbar leftButton={leftBtn}>
                <Text style={styles.navBarTitle}>
                    {I18n.t('global.comments').toUpperCase()}
                </Text>
            </Navbar>
            <FlatList
                style={styles.container}
                data={comments}
                showsVerticalScrollIndicator={false}
                keyExtractor={keyExtract}
                renderItem={renderComment}
            />
        </>
    );
};

export default Comments;
