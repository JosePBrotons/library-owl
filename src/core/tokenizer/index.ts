import jwt from 'react-native-pure-jwt';
import { tokenExp, tokenSecret } from '../../constants';
import { IEncode, ITokenizer } from './interface';

class Tokenizer implements ITokenizer {
    private static instance: Tokenizer;
    private constructor() {}
    static getInstance(): Tokenizer {
        if (!Tokenizer.instance) {
            Tokenizer.instance = new Tokenizer();
        }
        return Tokenizer.instance;
    }
    encode(data: IEncode) {
        const { iss = '', exp = tokenExp, additional = '' } = { ...data };
        try {
            return jwt.sign(
                {
                    iss,
                    exp,
                    additional,
                },
                tokenSecret,
                {
                    alg: 'HS256',
                }
            );
        } catch (err) {
            console.error(err);
        }
    }
    decode(token: String) {
        try {
            return jwt.decode(token, tokenSecret, {
                skipValidation: false,
            });
        } catch (err) {
            console.log(err);
        }
    }
}

export const tokenizerManager = Tokenizer.getInstance();
