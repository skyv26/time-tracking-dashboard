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
    self.style.backgroundSize = '4.25rem';
    self.className = `${className}`;

    const ellipses =  document.createElement('img') as HTMLImageElement;
    ellipses.src = ThreeDots;
    ellipses.alt = '';
    ellipses.className = 'ThreeDots';

    const StatInnerContainer = document.createElement('div') as HTMLDivElement;
    StatInnerContainer.className = 'StatInnerContainer';

    StatInnerContainer.insertAdjacentElement('beforeend', WorkWithUtility({
        cardText: statData.title,
        className: 'WorkWithUtility',
        secondChild: ellipses
    }));

    StatInnerContainer.insertAdjacentElement('beforeend', TimeStat({
        className: 'TimeStat',
        currentTimeStat: `${timeframes.current}hrs`,
        previousTimeStat: `Last Week - ${timeframes.previous}hrs`
    }))

    self.insertAdjacentElement('beforeend', StatInnerContainer);
    return self;
}

export default Stat;
