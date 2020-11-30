import I18n from 'i18n-js';
import React from 'react';
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';
import { ILoadingProps } from './interface';
import { styles } from './styles';

const renderLoadingIndicator = (loading: boolean) => {
    return (
        loading && (
            <View style={[StyleSheet.absoluteFill, styles.container]}>
                <View style={styles.loadingModal}>
                    <ActivityIndicator
                        size="large"
                        color={styles.spinner.color}
                    />
                    <Text style={styles.loadingText}>
                        {I18n.t('global.loading')}
                    </Text>
                </View>
            </View>
        )
    );
};

const LoadingHOC = (Cmp: any) => {
    return ({ loading, children, ...props }: ILoadingProps) => (
        <View style={styles.loadingCont}>
            <Cmp {...props}>{children}</Cmp>
            {renderLoadingIndicator(loading)}
        </View>
    );
};

export default LoadingHOC;
