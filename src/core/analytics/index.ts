import { IAnalytics, IEventData } from './interface';
import analytics from '@react-native-firebase/analytics';

class Analytics implements IAnalytics {
    private static instance: Analytics;
    private constructor() {}
    static getInstance(): Analytics {
        if (!Analytics.instance) {
            Analytics.instance = new Analytics();
        }
        return Analytics.instance;
    }
    trackEvent(eventData: IEventData): Promise<void> {
        const { eventName = '', properties = {} } = { ...eventData };
        return analytics().logEvent(eventName, properties);
    }
}

export const analyticsManager = Analytics.getInstance();
