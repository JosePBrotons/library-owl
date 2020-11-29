import { useRoute } from '@react-navigation/native';
import React from 'react';
import { FlatList } from 'react-native';
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

const Comments = () => {
    const { params = {} } = useRoute();
    const { comments = [] } = { ...params };
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
