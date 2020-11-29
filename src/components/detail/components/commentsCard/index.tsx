import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Image, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { isArrayLength } from '../../../../utils';
import Card from '../../../common/card';
import { IComment, ICommentsCardProps } from './interface';
import { styles } from './styles';

const renderCommentInfo = (username: string, comment: string) => {
    return (
        <View style={styles.commentContainer}>
            <Text style={styles.username}>{username}</Text>
            <Text style={styles.comment}>{comment}</Text>
        </View>
    );
};

const renderComments = (commentData: IComment, index: number) => {
    const { comment = '', username = '', img_profile = '' } = {
        ...commentData,
    };
    return (
        <View key={index} style={styles.commentCardCont}>
            <Image source={{ uri: img_profile }} style={styles.profileImg} />
            {renderCommentInfo(username, comment)}
        </View>
    );
};

const renderViewAllComments = (comments: Array<IComment>, navigate: any) => {
    return isArrayLength(comments, 'greater', 2) && (
        <TouchableOpacity style={styles.showAll} onPress={() => navigate('Comments')}>
            <Text style={styles.showAllTxt}>{'View all'}</Text>
        </TouchableOpacity>
    )
}

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
