export interface ITokenizer {
    encode: (data: IEncode) => Promise<any>;
    decode: (token: String) => Promise<any>;
}

export interface IEncode {
    iss: string;
    exp?: number;
    additional?: string;
}

export interface IDecode {
    token: string;
}
