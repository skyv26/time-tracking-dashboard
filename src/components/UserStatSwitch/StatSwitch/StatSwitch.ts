const StatSwitch = ({
    buttonText, className=''
}: {
    buttonText: string;
    className: string;
}) => {
    const self = document.createElement('a') as HTMLAnchorElement;
    self.textContent = buttonText;
    self.className = className;
    return self;
}

export default StatSwitch;