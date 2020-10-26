import { bodyRef, toogleRef } from './ref';
import { LIGHT, DARK } from './tamplate';

export const changeToggleTheme = function (event) {
    
    if (event.target.checked) {
        bodyRef.classList.add(DARK)
        bodyRef.classList.remove(LIGHT)
        localStorage.setItem('theme', 'dark');
    }

    else {
        bodyRef.classList.add(LIGHT)
         bodyRef.classList.remove(DARK)
         localStorage.setItem('theme', 'light');
    }

    
    
};

export const saveTheme = function () {
    if (localStorage.getItem('theme') === 'dark') {
       
        bodyRef.classList.add(DARK)
        toogleRef.checked = true
    }
    else {
        bodyRef.classList.add(LIGHT)
        toogleRef.checked = false
    }
};
