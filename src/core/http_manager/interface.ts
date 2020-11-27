export interface IHttpManager {
    requestHandler: ({ payload }: any) => Promise<any>;
}
