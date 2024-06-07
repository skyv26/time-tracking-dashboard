import WorkWithUtility from "./WorkWithUtility/WorkWithUtility";
import TimeStat from "./TimeStat/TimeStat";

const Stat = ({ className, bgImage }: {
    className: string,
    bgImage: string
}) => {
    const self = document.createElement('article') as HTMLElement;
    self.style.backgroundImage = `url("${bgImage}")`;
    self.style.backgroundRepeat = 'no-repeat';
    self.style.backgroundPosition = 'top right';
    self.className = `${className}`;

    self.insertAdjacentElement('beforeend', WorkWithUtility({
        cardText: 'Aakash',
        className: 'WorkWithUtility',
        secondChild: document.createElement('div') as HTMLDivElement
    }));

    self.insertAdjacentElement('beforeend', TimeStat({
        className: 'TimeStat',
        currentTimeStat: '32hrs',
        previousTimeStat: 'Last Week'
    }))
    return self;
}

export default Stat;
