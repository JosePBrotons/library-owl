import { useRoute } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { FlatList } from 'react-native';
import { analyticsManager } from '../../core/analytics';
import events from '../../events';
import Card from '../common/card';
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
    const { comments = [] } = { ...params };
    useEffect(() => {
        trackComments();
    }, []);
    return (
        <FlatList
            style={styles.container}
            data={comments}
            keyExtractor={keyExtract}
            renderItem={renderComment}
        />
    );
};

export default Comments;
