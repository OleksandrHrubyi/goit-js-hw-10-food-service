import './styles.css';
import dataArray from './menu.json';
import foodMarkup from '../src/template/foodMarkup.hbs';
import { listRef } from './js/ref.js';

listRef.insertAdjacentHTML('beforeend', foodMarkup(dataArray));
toogleRef.addEventListener('change', changeToggleTheme);
toogleRef.addEventListener('change', saveTheme)

import { saveTheme, toogleRef, changeToggleTheme } from './js/changeThemeFunction';
saveTheme();
    

   
 









