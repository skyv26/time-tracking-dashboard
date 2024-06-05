const ReportFrom = ({
    userName, className=''
}: {
    userName: string;
    className: string;
}) => {
    const self = document.createElement('h1');
    const spanText = 'Report for';
    const spanElement = document.createElement('span');
    spanElement.textContent = spanText;

    self.insertAdjacentElement('afterbegin', spanElement);
    self.insertAdjacentText('beforeend', userName);
    self.className = className;
    return self;
};

export default ReportFrom;