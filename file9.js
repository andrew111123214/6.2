const formElement = document.forms.main;
const button = document.querySelector('button[name="btn"]');
const formElementTextArea = formElement.elements.textarea;
function hoursUntilEndOfMonth() 
{
    const now = new Date(); 
    const endOfMonth = new Date(now.getFullYear(), now.getMonth() + 1, 0, 23, 59, 59);
    const difference = endOfMonth - now;
    const hoursRemaining = Math.floor(difference / (1000 * 60 * 60));
    return hoursRemaining;
}
function fun(event) 
{
    event.preventDefault();
    formElementTextArea.value = `До конца текущего месяца осталось ${hoursUntilEndOfMonth()} часов.`;
}
console.log(`До конца текущего месяца осталось ${hoursUntilEndOfMonth()} часов.`);
button.addEventListener('click', fun);