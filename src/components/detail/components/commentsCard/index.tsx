import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { isArrayLength } from '../../../../utils';
import Card from '../../../common/card';
import Comment from './components/comment';
import { IComment, ICommentsCardProps } from './interface';
import { styles } from './styles';

const renderComments = (commentData: IComment, index: number) => {
    return <Comment key={index} {...commentData} />;
};

const renderViewAllComments = (comments: Array<IComment>, navigate: any) => {
    return (
        isArrayLength(comments, 'greater', 2) && (
            <TouchableOpacity
                style={styles.showAll}
                onPress={() => navigate('Comments', { comments })}>
                <Text style={styles.showAllTxt}>{'View all'}</Text>
            </TouchableOpacity>
        )
    );
};

const getComments = (comments: Array<IComment>) => {
    return isArrayLength(comments, 'greater', 2)
        ? comments.filter((comment, index) => index <= 1)
        : comments;
};

const CommentsCard = (props: ICommentsCardProps) => {
    const { comments = [] } = { ...props };
    const { navigate } = useNavigation();
    return (
        <Card>
            {getComments(comments).map(renderComments)}
            {renderViewAllComments(comments, navigate)}
        </Card>
    );
};

export default CommentsCard;
