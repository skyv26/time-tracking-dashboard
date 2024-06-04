import UserAvatar from "./UserAvatar/UserAvatar";
import ReportFrom from "./ReportFrom/ReportFrom";
import StatSwitch from "./StatSwitch/StatSwitch";
import '../../style.css';


// UserInfo Group
const UserInfoGroup = document.createElement('div') as HTMLDivElement;
UserInfoGroup.className = 'UserInfoGroup';

UserInfoGroup.insertAdjacentElement('afterbegin', UserAvatar({
    src: '',
    className: 'UserAvatar',
    alt: ''
}));

UserInfoGroup.insertAdjacentElement('beforeend', ReportFrom({
    userName: 'Aakash Verma',
    className: ''
}))

// Button Container
const ButtonContainer = document.createElement('div') as HTMLDivElement;

ButtonContainer.insertAdjacentElement('afterbegin', StatSwitch({
    buttonText: 'Daily',
    className: 'StatSwitch'
}));

ButtonContainer.insertAdjacentElement('beforeend', StatSwitch({
    buttonText: 'Weekly',
    className: 'StatSwitch'
}));

ButtonContainer.insertAdjacentElement('beforeend', StatSwitch({
    buttonText: 'Monthly',
    className: 'StatSwitch'
}));


const UserStatSwitch = () => {
    const StatControlContainer = document.createElement('article') as HTMLElement;
    StatControlContainer.insertAdjacentElement('afterbegin', UserInfoGroup);
    StatControlContainer.insertAdjacentElement('beforeend', ButtonContainer);    
    return StatControlContainer;
};

export default UserStatSwitch;