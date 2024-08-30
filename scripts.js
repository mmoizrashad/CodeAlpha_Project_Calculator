// calculator.js

document.addEventListener('DOMContentLoaded', () => {
    const display = document.getElementById('display');
    const buttons = Array.from(document.querySelectorAll('.btn'));
    
    buttons.forEach(button => {
        button.addEventListener('click', (e) => {
            if (e.target.dataset.value === 'C') {
                display.value = '';
            } else if (e.target.dataset.value === '=') {
                try {
                    display.value = eval(display.value);
                } catch {
                    display.value = 'Error';
                }
            } else {
                display.value += e.target.dataset.value;
            }
        });
    });
});
