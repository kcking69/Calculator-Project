const inputDisplay = document.getElementById('input-display');
const buttons = document.getElementsByClassName('button')
const clear = document.getElementById('all-clear')
const clearOne = document.getElementById('delete')
const evaluate = document.getElementById('evaluate')

clear.addEventListener('click', () => {
    inputDisplay.value = ''
})

clearOne.addEventListener('click', () => {
    inputDisplay.value = inputDisplay.value.toString().slice(0,-1)
})

evaluate.addEventListener('click', () => {
    inputDisplay.value = eval(inputDisplay.value)
})


for (let i = 0; i < buttons.length; i++) {
    const button = buttons[i];
    button.addEventListener('click', () => {
        inputDisplay.value += button.value
    })
}














