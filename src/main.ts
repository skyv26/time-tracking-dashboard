import './style.css';
import UserStatSwitch from './components/UserStatSwitch/UserStatSwitch';
import Stat from './components/Stat/Stat';

const main = document.createElement('main') as HTMLElement;
const section = document.createElement('section') as HTMLElement;
section.className = 'SectionContainer';
section.insertAdjacentElement('beforeend', UserStatSwitch() as HTMLElement);

const StatContainer = document.createElement('div') as HTMLDivElement;

StatContainer.insertAdjacentElement('beforeend', Stat({
    bgImage: '',
    className: 'Stat'
}) as HTMLElement);

section.insertAdjacentElement('beforeend', StatContainer);

main.insertAdjacentElement('beforeend', section);

document.querySelector('#app')?.insertAdjacentElement('afterbegin', main);