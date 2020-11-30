import I18n from 'i18n-js';
import TabNavigator from './tabNavigator';
import Detail from '../components/detail';
import Login from '../components/login';
import { setI18nConfig } from '../i18n';
import { IStack } from './interface';
import Comments from '../components/comments';

setI18nConfig();

export const stack: Array<IStack> = [
    {
        name: 'Login',
        component: Login,
        options: { title: I18n.t('global.login'), headerShown: false },
    },
    {
        name: 'Home',
        component: TabNavigator,
        options: { title: I18n.t('global.library') },
    },
    {
        name: 'Detail',
        component: Detail,
        options: { title: I18n.t('global.detail') },
    },
    {
        name: 'Comments',
        component: Comments,
        options: { title: I18n.t('global.comments') },
    },
];
