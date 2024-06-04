const StatSwitch = ({
    buttonText, className=''
}: {
    buttonText: string;
    className: string;
}) => {
    const self = document.createElement('button') as HTMLButtonElement;
    self.textContent = buttonText;
    self.className = className;
    return self;
}

export default StatSwitch;