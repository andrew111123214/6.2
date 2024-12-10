const formElement = document.forms.main;
const formElementInput = formElement.elements.input;
const button = document.querySelector('button[name="btn"]');
const formElementTextArea = formElement.elements.textarea;
console.log(formElement.elements);
let numbers = [];
function fun(event) 
{ 
    event.preventDefault();
    const count = parseInt(formElementInput.value);
    formElementTextArea.value=" ";
    let minElement = Infinity;
    numbers = [];
    let a = 1;
    let counter = 0;
    for (let i = 0; i < count; i++) 
        {
        const randomNumber = Math.floor(Math.random() * 30) -10;
        console.log("Случайное число:", randomNumber);
        numbers.push(randomNumber);
        a *= Math.abs(randomNumber);
        if (randomNumber < minElement) 
            {
            minElement = randomNumber;
        }
        if(randomNumber<0 && randomNumber%2!=0)
        {
            counter++;
        }
    }
    console.log("Минимальный элемент:", minElement);
    formElementTextArea.value =("Случайные числа: " + numbers.join(', ')
     +"\n"+"Минимальный элемент = " + minElement+"\n"+"произведение модулей элементов последовательности = "
     + a + "\n"+"количество нечётных отрицательных элементов = "+ counter);
formElementInput.value = "";
}
button.addEventListener('click', fun);
