import React from 'react';
import { Image, Text, View } from 'react-native';
import { ICommentProps } from './interface';
import { styles } from './styles';
const Comment = (props: ICommentProps) => {
    const { comment = '', username = '', img_profile = '' } = {
        ...props,
    };
    const renderCommentInfo = (username: string, comment: string) => {
        return (
            <View style={styles.commentContainer}>
                <Text style={styles.username}>{username}</Text>
                <Text style={styles.comment}>{comment}</Text>
            </View>
        );
    };
    return (
        <View style={styles.commentCardCont}>
            <Image source={{ uri: img_profile }} style={styles.profileImg} />
            {renderCommentInfo(username, comment)}
        </View>
    );
};

export default Comment;