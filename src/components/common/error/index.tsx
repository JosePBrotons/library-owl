import I18n from 'i18n-js';
import React, { Component } from 'react';
import { analyticsManager } from '../../../core/analytics';
import { IEventData } from '../../../core/analytics/interface';
import events from '../../../events';
import Modal from '../modal';

class Error extends Component {
    constructor(props: any) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError() {
        return { hasError: true };
      }

    componentDidCatch(error: any) {
        const eventData: IEventData = {
            eventName: events.error.appCrash,
            properties: { errorInfo: error },
        };
        analyticsManager.trackEvent(eventData);
    }

    goBack() {
        return () => {
            this.setState({ hasError: false });
        };
    }

    render() {
        const { children = null } = { ...this.props };
        const { hasError = false } = { ...this.state };
        return hasError ? (
            <Modal
                title={I18n.t('error.title')}
                message={I18n.t('error.message')}
                onPress={this.goBack()}
            />
        ) : (
            children
        );
    }
}

export default Error;
