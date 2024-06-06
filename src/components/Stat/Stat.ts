
const Stat = ({ className, bgImage }: {
    className: string,
    bgImage: string
}) => {
    const self = document.createElement('article') as HTMLElement;
    self.style.backgroundImage = `url("${bgImage}")`;
    self.style.backgroundRepeat = 'no-repeat';
    self.style.backgroundPosition = 'top right';
    self.className = className;
    return self;
}

export default Stat;
