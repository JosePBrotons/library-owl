import * as RNLocalize from 'react-native-localize';
import i18n from 'i18n-js';

const translationGetters: any = {
    en: () => require('./translations/en.json'),
    es: () => require('./translations/es.json'),
};

export const setI18nConfig = () => {
    const fallback = { languageTag: 'en' };
    const { languageTag = 'en' } =
        RNLocalize.findBestAvailableLanguage(Object.keys(translationGetters)) ??
        fallback;
    i18n.translations = { [languageTag]: translationGetters[languageTag]() };
    i18n.locale = languageTag;
};
