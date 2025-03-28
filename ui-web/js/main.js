const mode = document.getElementById('modo')
const buttonChange = document.getElementById('ChangeMode')

const changeDarkColor = () => {
    
    mode.classList.remove('light-mode')
    mode.classList.add('dark-mode')
    

}

const changeLightMode = () => {
    mode.classList.remove('dark-mode ')
    mode.classList.add('light-mode')
}

if(mode.className === 'light-mode'){
    buttonChange.addEventListener('click', () => {
        console.log('cambio a dark mode')
        changeDarkColor()
    })
}

if(mode.className === 'dark-mode'){
    buttonChange.addEventListener('click', () => {
        console.log('Cambiar a mode light')

    })
}

