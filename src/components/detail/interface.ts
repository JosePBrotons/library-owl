export interface IDetail {
    route: IRoute;
}

export interface IRoute {
    params: IRouteParams;
}

export interface IRouteParams {
    id: number;
    title: string;
    author: string;
    genre: string;
    publisher: string;
    year: string;
    image_url: string;
}
