const num1Input = document.getElementById('num1');
const num2Input = document.getElementById('num2');
const resultDiv = document.getElementById('result');

function isValidNumber(str) {
    return !isNaN(str) && str.trim() !== '';
}

function calculate(operation) {
    const a = parseFloat(num1Input.value);
    const b = parseFloat(num2Input.value);

    if (!isValidNumber(num1Input.value) || !isValidNumber(num2Input.value)) {
        resultDiv.textContent = 'Ошибка: введите числа!';
        return;
    }

    let result;
    switch (operation) {
        case 'sum':
            result = a + b;
            break;
        case 'diff':
            result = a - b;
            break;
        case 'prod':
            result = a * b;
            break;
        case 'div':
            if (b === 0) {
                result = 'Ошибка: деление на ноль!';
            } else {
                result = a / b;
            }
            break;
    }

    resultDiv.textContent = 'Результат: ' + result;
}

document.getElementById('btnSum').addEventListener('click', () => calculate('sum'));
document.getElementById('btnDiff').addEventListener('click', () => calculate('diff'));
document.getElementById('btnProd').addEventListener('click', () => calculate('prod'));
document.getElementById('btnDiv').addEventListener('click', () => calculate('div'));