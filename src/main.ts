import './style.css';
import UserStatSwitch from './components/UserStatSwitch/UserStatSwitch';
import Stat from './components/Stat/Stat';
import RetryIcon from '../public/assets/retry.svg';
import AakashAvatar from '../public/assets/aakash-dashboard-avatar.png';
import JeremyAvatar from '../public/assets/image-jeremy.png';
import MoonIcon from '../public/assets/moon.svg';
import SunIcon from '../public/assets/light.svg';
import Footer from './components/Footer/Footer';

import {  Activity, RootData } from './types/interfaces';

let data: RootData | null = null;
let statType = 'Weekly';
let isAakashProfile = false;

document.addEventListener('DOMContentLoaded', async () => {
    try {
        const response = await fetch('data.json');
        if (!response.ok) {
            throw new Error(`Failed to fetch data: ${response.statusText}`);
        }
        data = (await response.json()) as RootData;

        if (data) {
            initializeUI();
        } else {
            console.error('No data available');
        }
    } catch (error) {
        console.error('Error fetching data:', error);
    }
});

function initializeUI() {
    const app = document.querySelector('#app');
    if (!app) {
        console.error('#app container not found');
        return;
    }
    app.textContent = ''; // Clear the app container

    const main = document.createElement('main');
    const section = document.createElement('div');
    const toggleButton = createToggleButton();
    const changeProfileButton = createChangeProfileButton();

    section.className = 'SectionContainer';

    // Render UserStatSwitch with dynamic data
    section.insertAdjacentElement(
        'beforeend',
        UserStatSwitch({
            userName: isAakashProfile ? 'Aakash Verma' : 'Jeremy Robson',
            src: isAakashProfile ? AakashAvatar : JeremyAvatar,
        }) as HTMLElement
    );

    const statContainer = document.createElement('div');
    statContainer.className = 'StatContainer';

    // Safely fetch and render data based on profile
    const currentUserData = isAakashProfile ? data?.aakash.data : data?.jeremy.data;
    currentUserData?.forEach((element: Activity) => {
        statContainer.insertAdjacentElement(
            'beforeend',
            Stat({
                className: `Stat ${element.title.split(' ').join('-')}`,
                statData: element,
                statType,
            }) as HTMLElement
        );
    });

    section.insertAdjacentElement('beforeend', statContainer);
    main.insertAdjacentElement('beforeend', section);
    main.insertAdjacentHTML('beforeend', Footer());

    app.insertAdjacentElement('afterbegin', main);

    // Insert utility buttons
    const utilityWrapper = document.createElement('div');
    utilityWrapper.className = 'UtilityWrapper';
    utilityWrapper.append(toggleButton, changeProfileButton);

    document.querySelector('.UserInfoGroup')?.insertAdjacentElement('afterbegin', utilityWrapper);

    setupButtonContainerListeners();
}

function createToggleButton(): HTMLButtonElement {
    const toggleButton = document.createElement('button');
    const modeIcon = document.createElement('img');
    let isDarkMode = false;

    modeIcon.src = SunIcon;
    modeIcon.className = 'LightModeIcon';
    toggleButton.className = 'theme-toggle';
    toggleButton.append(modeIcon);

    toggleButton.addEventListener('click', () => {
        isDarkMode = !isDarkMode;
        document.documentElement.classList.toggle('dark');
        modeIcon.src = isDarkMode ? MoonIcon : SunIcon;
    });

    return toggleButton;
}

function createChangeProfileButton(): HTMLImageElement {
    const changeProfileButton = document.createElement('img');
    changeProfileButton.src = RetryIcon;
    changeProfileButton.className = 'ChangeDetailIcon';

    changeProfileButton.addEventListener('click', () => {
        isAakashProfile = !isAakashProfile; // Toggle profile
        initializeUI(); // Reinitialize UI
    });

    return changeProfileButton;
}

function setupButtonContainerListeners() {
    const buttonContainer = document.querySelector('.ButtonContainer');
    if (!buttonContainer) {
        console.error('ButtonContainer not found in the DOM.');
        return;
    }

    buttonContainer.addEventListener('click', (e: Event) => {
        const target = e.target as HTMLElement;
        if (target.nodeName === 'DIV') return;

        const selectedText = target.textContent;
        if (selectedText) {
            Array.from(buttonContainer.children).forEach((btn) =>
                btn.classList.remove('active')
            );
            statType = selectedText;
            target.classList.add('active');
            initializeUI();
        }
    });
}
