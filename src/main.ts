import './style.css';
import UserStatSwitch from './components/UserStatSwitch/UserStatSwitch';
import Stat from './components/Stat/Stat';
import RetryIcon from './assets/retry.svg';
import AakashAvatar from './assets/aakash-dashboard-avatar.png';
import JeremyAvatar from './assets/image-jeremy.png';
import MoonIcon from './assets/moon.svg';
import SunIcon from './assets/light.svg';

import { Activity } from './types/interfaces';

let data: null | Activity[] = null;
let statType = 'Weekly';
let isAakashProfile = false; // Global state to track the profile

document.addEventListener('DOMContentLoaded', async () => {
    try {
        // Fetch and assign data
        const response = await fetch('data.json');
        if (!response.ok) {
            throw new Error(`Failed to fetch data: ${response.statusText}`);
        }
        data = (await response.json()) as Activity[];

        // Proceed only if data is successfully fetched
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
    document.querySelector('#app')!.textContent = null; // Clear the app container
    
    let isDarkMode = false;
    
    const main = document.createElement('main') as HTMLElement;
    const section = document.createElement('section') as HTMLElement;
    const toggleButton = document.createElement('button') as HTMLButtonElement;
    const ChangeDetailIcon = document.createElement('img') as HTMLImageElement;
    const ModeIcon = document.createElement('img') as HTMLImageElement;
    ChangeDetailIcon.src = RetryIcon;
    ChangeDetailIcon.className = 'ChangeDetailIcon';
    ModeIcon.src = SunIcon;
    ModeIcon.className = 'LightModeIcon';
    // Handle profile toggle
    ChangeDetailIcon.addEventListener('click', () => {
        isAakashProfile = !isAakashProfile; // Toggle the profile state
        initializeUI(); // Reinitialize the UI to reflect changes
    });

    toggleButton.className = 'theme-toggle';
    toggleButton.textContent = '';
    toggleButton.insertAdjacentElement('afterbegin', ModeIcon);
    const htmlElement = document.documentElement as HTMLElement;

    toggleButton.addEventListener('click', () => {
        isDarkMode = !isDarkMode;
        htmlElement.classList.toggle('dark');
        ModeIcon.src = isDarkMode ? MoonIcon : SunIcon;
    });

    const utilityWrapper = document.createElement('div') as HTMLDivElement;
    utilityWrapper.className = 'UtilityWrapper';

    utilityWrapper.insertAdjacentElement('beforeend', toggleButton);
    utilityWrapper.insertAdjacentElement('beforeend', ChangeDetailIcon);

    section.className = 'SectionContainer';

    // Render UserStatSwitch with dynamic data
    section.insertAdjacentElement(
        'beforeend',
        UserStatSwitch({
            userName: isAakashProfile ? 'Aakash Verma' : 'Jeremy Robson',
            src: isAakashProfile ? AakashAvatar : JeremyAvatar,
        }) as HTMLElement
    );

    const StatContainer = document.createElement('div') as HTMLDivElement;

    StatContainer.className = 'StatContainer';
    // Safely use the data variable here
    data!.forEach((element) => {
        StatContainer.insertAdjacentElement(
            'beforeend',
            Stat({
                className: `Stat ${element.title.split(' ').join('-')}`,
                statData: element,
                statType,
            }) as HTMLElement
        );
    });

    section.insertAdjacentElement('beforeend', StatContainer);
    main.insertAdjacentElement('beforeend', section);

    document.querySelector('#app')?.insertAdjacentElement('afterbegin', main);
    document.querySelector('.UserInfoGroup')?.insertAdjacentElement('afterbegin', utilityWrapper);

    // Add event listener after DOM is fully updated
    const ButtonContainer = document.querySelector('.ButtonContainer');
    if (ButtonContainer) {
        ButtonContainer.addEventListener('click', (e: any) => {
            const target = e.target as HTMLElement;
            if (target.nodeName === 'DIV') return;
            if (target && target.textContent) {
                for (const btn of ButtonContainer.children) {
                    btn.classList.remove('active');
                }
                statType = target.textContent;
                target.classList.add('active');
                initializeUI();
            }
        });
    } else {
        console.error('ButtonContainer not found in the DOM.');
    }
}
