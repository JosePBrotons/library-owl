import { RouteProp } from '@react-navigation/native';

export interface IRouterProps {
    initialRoute: Promise<string> | string;
}
export interface IOptions {
    title: string;
    headerTitleStyle?: IHeaderTitleStyle;
    headerShown?: boolean;
    gestureEnabled?: boolean;
}

export interface IStack {
    name: string;
    component: (props: any) => JSX.Element;
    options?: IOptions;
}

export interface IHeaderTitleStyle {
    fontFamily: string;
}

export interface ITab {
    name: string;
    component: any;
    options?: IOptions;
}

export interface ITabIconProps {
    focused: boolean;
    color: string;
    size: number;
}

export interface IScreenOptions {
    route: RouteProp<Record<string, object | undefined>, string>;
    navigation: any;
}
