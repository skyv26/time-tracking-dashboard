
const TimeStat = ({ className, currentTimeStat, previousTimeStat} : {
    className: string;
    currentTimeStat: string;
    previousTimeStat: string;
}) => {
    const self = document.createElement('div') as HTMLDivElement;
    self.className = className;

    const heading = document.createElement('h3') as HTMLHeadingElement;
    heading.className = 'TimeStatHeading';
    heading.textContent = currentTimeStat;

    const headingSpan = document.createElement('span') as HTMLSpanElement;
    headingSpan.className = 'TimeStatHeadingSpan';
    headingSpan.textContent = previousTimeStat;

    heading.insertAdjacentElement('beforeend', headingSpan);
    self.insertAdjacentElement('beforeend', heading);
    return self;
}

export default TimeStat