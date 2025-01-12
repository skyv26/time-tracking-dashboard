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

export interface UserData {
    data: Activity[];
}

export interface RootData {
    jeremy: UserData;
    aakash: UserData;
}
