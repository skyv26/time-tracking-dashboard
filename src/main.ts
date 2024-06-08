import './style.css';
import UserStatSwitch from './components/UserStatSwitch/UserStatSwitch';
import Stat from './components/Stat/Stat';
import { Activity } from './types/interfaces';

let data: null | Activity[] = null;
let statType = 'Daily';

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
    document.querySelector('#app')!.textContent = null;
    const main = document.createElement('main') as HTMLElement;
    const section = document.createElement('section') as HTMLElement;
    section.className = 'SectionContainer';

    // Render UserStatSwitch
    section.insertAdjacentElement('beforeend', UserStatSwitch() as HTMLElement);

    const StatContainer = document.createElement('div') as HTMLDivElement;

    // Safely use the data variable here
    data!.forEach((element) => {
        StatContainer.insertAdjacentElement('beforeend', Stat({
            className: 'Stat',
            statData: element,
            statType,
        }) as HTMLElement);
    });

    section.insertAdjacentElement('beforeend', StatContainer);
    main.insertAdjacentElement('beforeend', section);

    document.querySelector('#app')?.insertAdjacentElement('afterbegin', main);

    // Add event listener after DOM is fully updated
    const ButtonContainer = document.querySelector('.ButtonContainer');
    if (ButtonContainer) {
        ButtonContainer.addEventListener('click', (e: any) => {
            const target = e.target as HTMLElement;
            if (target && target.textContent) {
                statType = target.textContent;
                initializeUI();
            }
        });
    } else {
        console.error('ButtonContainer not found in the DOM.');
    }
}
