import { Platform } from 'react-native';
import { IHttpManager } from './interface';
import { CHeaders } from './model/headers';

class Http_Manager implements IHttpManager {
    private static instance: Http_Manager;
    private constructor() {}
    static getInstance(): Http_Manager {
        if (!Http_Manager.instance) {
            Http_Manager.instance = new Http_Manager();
        }
        return Http_Manager.instance;
    }
    async requestHandler({ payload }: any) {
        const { request = {} } = { ...payload };
        const { url: payload_url = '', method = '', body = null } = {
            ...request,
        };
        const headers: any = new CHeaders({
            os: Platform.OS,
        }).item;
        const url = `${payload_url}`;
        return new Promise(async (resolve, reject) => {
            try {
                const response: any = await fetch(url, {
                    method,
                    body,
                    headers,
                });
                const data: any = await response.json();
                resolve(data);
            } catch (err) {
                reject(err);
            }
        });
    }
}

export const httpManager = Http_Manager.getInstance();
