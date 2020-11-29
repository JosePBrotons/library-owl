import { IRouteParams } from '../../interface';

export interface ISuggestionsProps {
    suggestions: Array<IRouteParams>;
    genre: string;
    bookId: number;
}
