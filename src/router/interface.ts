export interface IOptions {
    title: string;
    headerTitleStyle?: IHeaderTitleStyle;
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