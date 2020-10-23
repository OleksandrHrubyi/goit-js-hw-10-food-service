import './styles.css';

import dataArray from './menu.json'
import foodMarkup from '../src/template/foodMarkup.hbs'

const result = foodMarkup(dataArray)
const listRef = document.querySelector('.js-menu')
listRef.insertAdjacentHTML('beforeend', result)




const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const toogleRef = document.querySelector('#theme-switch-toggle')
toogleRef.addEventListener('change', changeTheme)

function changeTheme() {
    const bodyRef = document.querySelector('body')
    bodyRef.classList.toggle('dark-theme')
}
