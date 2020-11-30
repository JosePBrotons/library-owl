import * as RNLocalize from 'react-native-localize';
import i18n from 'i18n-js';

const translationGetters: any = {
    en: () => require('./translations/en.json'),
    es: () => require('./translations/es.json'),
};

export const setI18nConfig = (lang: string = '') => {
    const fallback = { languageTag: 'en' };
    if (!!lang) {
        i18n.translations = { [lang]: translationGetters[lang]() };
        i18n.locale = lang;
        return;
    }
    const { languageTag = 'en' } =
        RNLocalize.findBestAvailableLanguage(Object.keys(translationGetters)) ??
        fallback;
    i18n.translations = { [languageTag]: translationGetters[languageTag]() };
    i18n.locale = languageTag;
};
