export interface IAnalytics {
    trackEvent: (eventData: IEventData) => Promise<void>
}

export interface IEventData {
    eventName: string,
    properties: any
}