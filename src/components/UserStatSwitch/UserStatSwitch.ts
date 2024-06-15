import UserAvatar from "./UserAvatar/UserAvatar";
import ReportFrom from "./ReportFrom/ReportFrom";
import StatSwitch from "./StatSwitch/StatSwitch";

import '../../style.css';


// UserInfo Group
const UserInfoGroup = ({
    userName,
    src
}: {
    userName: string;
    src: string;
}) => {
    const self = document.createElement('div') as HTMLDivElement;
    self.className = 'UserInfoGroup';

    self.insertAdjacentElement('afterbegin', UserAvatar({
        src,
        className: 'UserAvatar',
        alt: ''
    }));

    self.insertAdjacentElement('beforeend', ReportFrom({
        userName,
        className: 'ReportFor'
    }));
    return self;
};


// Button Container
const ButtonContainer = document.createElement('div') as HTMLDivElement;
ButtonContainer.className = 'ButtonContainer';

ButtonContainer.insertAdjacentElement('afterbegin', StatSwitch({
    buttonText: 'Daily',
    className: 'StatSwitch'
}));

ButtonContainer.insertAdjacentElement('beforeend', StatSwitch({
    buttonText: 'Weekly',
    className: 'StatSwitch active'
}));

ButtonContainer.insertAdjacentElement('beforeend', StatSwitch({
    buttonText: 'Monthly',
    className: 'StatSwitch'
}));


const UserStatSwitch = ({
    userName,
    src
}: {
    userName: string;
    src: string;
}) => {
    const StatControlContainer = document.createElement('article') as HTMLElement;
    StatControlContainer.className = 'StatControlContainer';
    StatControlContainer.insertAdjacentElement('afterbegin', UserInfoGroup({
        userName,
        src
    }));
    StatControlContainer.insertAdjacentElement('beforeend', ButtonContainer);
    return StatControlContainer;
};

export default UserStatSwitch;