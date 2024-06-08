import WorkWithUtility from "./WorkWithUtility/WorkWithUtility";
import TimeStat from "./TimeStat/TimeStat";
import { Activity } from "../../types/interfaces";
import ThreeDots from '../../assets/icon-ellipsis.svg';

const Stat = ({ className, statData, statType }: {
    className: string,
    statData: Activity,
    statType: string;
}) => {
    const timeframes = statType === 'Daily' ? statData.timeframes.daily : statType === 'Weekly' ? statData.timeframes.weekly : statData.timeframes.monthly;
    const self = document.createElement('article') as HTMLElement;
    self.style.backgroundImage = `url("${statData.icon}")`;
    self.style.backgroundRepeat = 'no-repeat';
    self.style.backgroundPosition = 'top right';
    self.className = `${className}`;

    const ellipses =  document.createElement('img') as HTMLImageElement;
    ellipses.src = ThreeDots;
    ellipses.alt = '';

    self.insertAdjacentElement('beforeend', WorkWithUtility({
        cardText: statData.title,
        className: 'WorkWithUtility',
        secondChild: ellipses
    }));

    self.insertAdjacentElement('beforeend', TimeStat({
        className: 'TimeStat',
        currentTimeStat: `${timeframes.current}hrs`,
        previousTimeStat: `Last Week - ${timeframes.previous}hrs`
    }))
    return self;
}

export default Stat;
