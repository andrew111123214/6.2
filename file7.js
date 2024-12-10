const formElement = document.forms.main;
const button = document.querySelector('button[name="btn"]');
const formElementTextArea = formElement.elements.textarea;
function daysSinceNewYear() {
    const today = new Date(); 
    const newYear = new Date(today.getFullYear(), 0, 1);

    const differenceInTime = today - newYear;
    const differenceInDays = Math.floor(differenceInTime / (1000 * 60 * 60 * 24));
    return differenceInDays;
}
function fun(event) { 
    event.preventDefault();
    const result = daysSinceNewYear();
    formElementTextArea.value = "С Нового года прошло " + result + " дней/дня.";
}
button.addEventListener('click', fun);