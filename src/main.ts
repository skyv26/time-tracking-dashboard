import './style.css';
import UserStatSwitch from './components/UserStatSwitch/UserStatSwitch';

const main = document.createElement('main') as HTMLElement;
main.insertAdjacentElement('afterbegin', UserStatSwitch() as HTMLElement);

document.querySelector('#app')?.insertAdjacentElement('afterbegin', main);