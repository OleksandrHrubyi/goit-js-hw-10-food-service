import './styles.css';
import dataArray from './menu.json';
import foodMarkup from '../src/template/foodMarkup.hbs';
import { listRef, toogleRef } from './js/ref.js';

listRef.insertAdjacentHTML('beforeend', foodMarkup(dataArray));
toogleRef.addEventListener('change', changeToggleTheme);
toogleRef.addEventListener('change', saveTheme)

import { saveTheme, changeToggleTheme } from './js/changeThemeFunction';
saveTheme();
    

   
 









