export interface ICommentsCardProps {
    comments: Array<IComment>
}

export interface IComment {
    username: string,
    comment: string,
    imgProfile: string
}