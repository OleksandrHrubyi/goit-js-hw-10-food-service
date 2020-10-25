export const bodyRef = document.querySelector('body');
export const toogleRef = document.querySelector('#theme-switch-toggle');
export const LIGHT = 'light-theme';
export const DARK = 'dark-theme';

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
    else
    {
         bodyRef.classList.add(LIGHT)
        toogleRef.checked = false
    }
}
