const formElement = document.forms.main;
const formElementInput = formElement.elements.input;
const button = document.querySelector('button[name="btn"]');
const formElementTextArea = formElement.elements.textarea;
numbers = [];
function funOfSecondHalf(n)
{
    const strNum = n.toString();
    const length = strNum.length;
    const halfLength = Math.floor(length / 2);
    for (let i = halfLength; i < length; i++) {
        numbers.push(strNum[i]);
    }
    return numbers;
}
function sumOfSecondHalf(n)
{
    const strNum = n.toString();
    const length = strNum.length;
    const halfLength = Math.floor(length / 2);
    let sum = 0;
    for (let i = halfLength; i < length; i++) {
        sum += parseInt(strNum[i]);
    }
    return sum;
}
function fun(event) { 
    event.preventDefault();
    const n = parseInt(formElementInput.value);
    if (isNaN(n) || n <= 9) {
        formElementTextArea.value = "Пожалуйста, введите натуральное число больше 9.";
        return;
    }
    const result = sumOfSecondHalf(n);
    const z = funOfSecondHalf(n);
    formElementTextArea.value ="Введенное число = "+n+"\n"+
     "Полученные цифры:"+z+"\n"+
     "Сумма цифр во второй половине числа = " + result;
    formElementInput.value = "";
}
button.addEventListener('click', fun);