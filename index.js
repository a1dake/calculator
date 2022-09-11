let display = document.getElementById('display');
let buttons = Array.from(document.getElementsByClassName('button'));
let history = document.getElementById('history');

buttons.map(button => {
    button.addEventListener('click', (e) => {
         switch(e.target.innerText) {
            case 'AC':
                display.innerText = '';
                history.innerText = history.innerText + '\n';
                break;
                case 'DEL':
                    if(display.innerText) {
                        display.innerText = display.innerText.slice(0, -1);
                        history.innerText = history.innerText.slice(0, -1);
                    }
                break;
                case '=':
                    try {
                        display.innerText = eval(display.innerText);
                        history.innerText = history.innerText + '=' +
                        display.innerText + '\n';
                        if (display.innerText) {
                            display.innerText = '';
                        }
                    } catch {
                        history.innerText = history.innerText + '\n';
                        display.innerText = 'Неверное выражение';
                    }
                    break;
            default:
                if (display.innerText == 'Неверное выражение') {
                    display.innerText = '';
                }
                 display.innerText += e.target.innerText;
                 history.innerText += e.target.innerText;
         }
    });
});