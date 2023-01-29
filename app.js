const buttons = document.querySelectorAll('.button');
const display = document.getElementById('screen');


buttons.forEach(button => {
    button.addEventListener('click', () => {

        if (button.value === '='){

            display.value = eval(display.value);

        } else if (button.value === 'AC') {

               display.value = '';

        } else if(button.value === 'DEL') {

            display.value = display.value.slice(0,-1);

        }
        else {

            display.value += button.value;

        }
    })
    
});