import { useNavigation } from '@react-navigation/native';
import I18n from 'i18n-js';
import React, { useEffect } from 'react';
import { SafeAreaView, ScrollView, Text, View } from 'react-native';
import { Formik } from 'formik';
import { COLORS, emailRegExp, userDataKey } from '../../constants';
import { arrUpTo, isArrayLength, isBlank, isValueLength } from '../../utils';
import Button from './../common/button';
import CheckBox from '../common/checkbox';
import Input from './../common/input';
import { styles } from './style';
import { ILoginForm } from './interface';
import { useAppContext } from '../../hooks';
import { FETCHING_DATA } from '../../context/flux/types/request';
import { FETCH_LOGIN } from './api';
import Dropdown from './../common/dropdown';
import { analyticsManager } from '../../core/analytics';
import { IEventData } from '../../core/analytics/interface';
import events from '../../events';
import { IInputProps } from '../common/input/interface';
import { tokenizerManager } from '../../core/tokenizer';
import { useAsyncStorage } from '@react-native-async-storage/async-storage';

const initialFormValues: ILoginForm = {
    firstName: '',
    lastName: '',
    email: '',
    age: '',
    termsAndConditions: false,
};

const isDisabled = (form: ILoginForm) => {
    const {
        firstName = '',
        lastName = '',
        email = '',
        age = '',
        termsAndConditions = false,
    } = { ...form };
    return (
        !isValueLength(firstName.length, 'greatOrEq', 3) ||
        !isValueLength(lastName.length, 'greatOrEq', 3) ||
        !emailRegExp.test(email) ||
        isBlank(age) ||
        !termsAndConditions
    );
};

const onToggle = (
    fieldName: string,
    checked: boolean,
    setFieldValue: (
        field: string,
        value: any,
        shouldValidate?: boolean | undefined
    ) => void
) => {
    return () => setFieldValue(fieldName, !checked);
};

const renderInputs = (arrInputData: Array<IInputProps>) => {
    return (
        isArrayLength(arrInputData, 'greater', 0) &&
        arrInputData.map((input: IInputProps) => {
            const {
                value = '',
                placeholder = '',
                placeholderTextColor = COLORS.blue,
                onChangeText = null,
            } = { ...input };
            return (
                <Input
                    key={`input-${placeholder}`}
                    value={value}
                    placeholder={placeholder}
                    placeholderTextColor={placeholderTextColor}
                    onChangeText={onChangeText}
                />
            );
        })
    );
};

const renderLoginForm = (dispatch: any) => {
    return (
        <Formik
            initialValues={initialFormValues}
            onSubmit={async (values) => {
                const token = await tokenizerManager.encode({
                    iss: JSON.stringify(values),
                });
                await dispatch({
                    type: FETCHING_DATA,
                    payload: {
                        request: FETCH_LOGIN({ ...values, token }),
                        dispatch,
                    },
                });
            }}>
            {({ handleChange, handleSubmit, values, setFieldValue }) => {
                const {
                    firstName = '',
                    lastName = '',
                    email = '',
                    age = '',
                    termsAndConditions = false,
                } = { ...values };
                const selectedAge: string = !!age
                    ? `${age} ${I18n.t('login.years')}`
                    : I18n.t('login.age');
                const placeHolderColor = styles.inputPlaceholder.color;
                const inputs: Array<IInputProps> = [
                    {
                        value: firstName,
                        placeholder: I18n.t('login.firstName'),
                        placeholderTextColor: placeHolderColor,
                        onChangeText: handleChange('firstName'),
                    },
                    {
                        value: lastName,
                        placeholder: I18n.t('login.lastName'),
                        placeholderTextColor: placeHolderColor,
                        onChangeText: handleChange('lastName'),
                    },
                    {
                        value: email,
                        placeholder: I18n.t('login.email'),
                        placeholderTextColor: placeHolderColor,
                        onChangeText: handleChange('email'),
                    },
                ];
                return (
                    <View style={styles.formContainer}>
                        {renderInputs(inputs)}
                        <Dropdown
                            options={arrUpTo(18, 82)}
                            optionDescription={I18n.t('login.years')}
                            label={I18n.t('login.age')}
                            selectedValue={selectedAge}
                            select={setFieldValue}
                            fieldName={'age'}
                        />
                        <CheckBox
                            checked={termsAndConditions}
                            onPress={onToggle(
                                'termsAndConditions',
                                termsAndConditions,
                                setFieldValue
                            )}
                            description={I18n.t('login.termsAndConditions')}
                        />
                        <Button
                            text={I18n.t('login.signIn')}
                            disabled={isDisabled(values)}
                            onPress={handleSubmit}
                        />
                    </View>
                );
            }}
        </Formik>
    );
};

const renderHeader = () => {
    return (
        <View style={styles.greetingContainer}>
            <Text style={styles.title}>{`${I18n.t(
                'login.registerTitle'
            )},`}</Text>
            <Text style={styles.subheader}>{`${I18n.t(
                'login.registerSubheader'
            )}!`}</Text>
        </View>
    );
};

const trackLogin = async (eventData: IEventData) => {
    await analyticsManager.trackEvent(eventData);
};

const saveSession = async (token: string, setItem: any) => {
    await setItem(token);
};

const Login = () => {
    const { navigate } = { ...useNavigation() };
    const [state, dispatch] = useAppContext();
    const { setItem } = useAsyncStorage(userDataKey);
    const { user = null, loading = false } = { ...state };
    const { token = '' } = { ...user };
    useEffect(() => {
        if (!!user) {
            const screenName: string = 'Home';
            const eventData: IEventData = {
                eventName: events.login.loginSuccessful,
                properties: user,
            };
            trackLogin(eventData);
            saveSession(token, setItem);
            navigate(screenName);
        }
    }, [user]);
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView style={styles.container}>
                {renderHeader()}
                {renderLoginForm(dispatch)}
            </ScrollView>
        </SafeAreaView>
    );
};

export default Login;
