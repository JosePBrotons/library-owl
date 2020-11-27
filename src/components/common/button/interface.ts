export interface IButtonProps {
    text: string;
    disabled: boolean;
    onPress: (dispatch: any, artist: string, song: string) => void;
}
