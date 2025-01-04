export interface Timeframe {
    current: number;
    previous: number;
}

export interface Timeframes {
    daily: Timeframe;
    weekly: Timeframe;
    monthly: Timeframe;
}

export interface Activity {
    title: string;
    timeframes: Timeframes;
    icon: string;
}