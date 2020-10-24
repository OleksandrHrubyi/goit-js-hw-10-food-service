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
const bodyRef = document.querySelector('body');
toogleRef.addEventListener('change', changeToggleTheme)


function changeToggleTheme(event) {
    
    if (event.target.checked)
   
    { 
        bodyRef.classList.add(Theme.DARK)
        bodyRef.classList.remove(Theme.LIGHT)
        localStorage.setItem('theme', 'dark');
        
        
        
    }
    
    else {
         bodyRef.classList.add(Theme.LIGHT)
         bodyRef.classList.remove(Theme.DARK)
        localStorage.setItem('theme', 'light');
    }
    
}


if (localStorage.getItem('theme') === 'dark') {
       bodyRef.classList.add(Theme.DARK)
        toogleRef.checked = true
    }
   
    

    
    

   
 





// 



