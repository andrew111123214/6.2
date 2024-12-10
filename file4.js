const formElement = document.forms.main;
const formElementInput = formElement.elements.input;
const button = document.querySelector('button[name="btn"]');
const formElementTextArea = formElement.elements.textarea;

console.log(formElement.elements);

function fun(event) { 
    event.preventDefault();
    const inputValue = formElementInput.value.trim();
    formElementTextArea.value = ""; 
    if (!/^\d+$/.test(inputValue)) {
        formElementTextArea.value = "Пожалуйста, введите корректное число.";
        return;
    }
    const firstDigit = inputValue[0];
    const lastDigit = inputValue[inputValue.length - 1];
    if (inputValue.length === 1) {
        formElementTextArea.value = "Полученное число = " + inputValue;
        return;
    }
    const middlePart = inputValue.slice(1, -1);
    const newNumber = lastDigit + middlePart + firstDigit;
    formElementTextArea.value = "Полученное число = " + newNumber;
    formElementInput.value = "";
}
button.addEventListener('click', fun);
