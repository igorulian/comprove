
const light = {
    primary: '#0b465e',
    secondary: '#f78139',
    background: '#eee',
    surface: '#fff',
    text: '#000'
}

const dark = {
    primary: '#106587',
    secondary: '#f78139',
    background: '#121212',
    surface: '#1d1d1d',
    text: '#fff'
}

const colors = (theme:string|null) => {

    if(!theme) theme = 'light'
    if(theme === 'light') return light
    if(theme === 'dark') return dark
}