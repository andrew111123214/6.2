const formElement = document.forms.main;
const formElementInput = formElement.elements.input;
const formElementInput1 = formElement.elements.input1;
const formElementInput2 = formElement.elements.input2;
const button = document.querySelector('button[name="btn"]');
const formElementTextArea = formElement.elements.textarea;
function findNumber(k, m, n) {
    for (let x = 0; x < 100; x++) {
        if (x % 3 === k && x % 5 === m && x % 7 === n) {
            return x;
        }
    }
    return null;
}
function fun(event) { 
    event.preventDefault();
    const k = parseInt(formElementInput.value);
    const m = parseInt(formElementInput1.value);
    const n = parseInt(formElementInput2.value);
    if (isNaN(k) || isNaN(m) || isNaN(n) || k < 0 || m < 0 || n < 0 || k >= 3 || m >= 5 || n >= 7) {
        formElementTextArea.value = "Такого числа нет, попробуйте ввести другие числа!";
        return;
    }
    const result = findNumber(k, m, n);
    
    if (result !== null) {
        formElementTextArea.value = "Задуманное число x = " + result;
    } else {
        formElementTextArea.value = "Число не найдено.";
    }
    formElementInput.value = "";
    formElementInput1.value = "";
    formElementInput2.value = "";
}

button.addEventListener('click', fun);