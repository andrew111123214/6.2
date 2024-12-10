const formElement = document.forms.main;
const button = document.querySelector('button[name="btn"]');
const formElementTextArea = formElement.elements.textarea;
function daysUntilEquinoxes() 
{
    const today = new Date(); 
    const year = today.getFullYear(); 
    const springEquinox = new Date(year, 2, 22); 
    const autumnEquinox = new Date(year, 8, 22); 
    if (today > springEquinox) {
        springEquinox.setFullYear(year + 1);
    }
    if (today > autumnEquinox) {
        autumnEquinox.setFullYear(year + 1);
    }
    const daysUntilSpring = Math.ceil((springEquinox - today) / (1000 * 60 * 60 * 24));
    const daysUntilAutumn = Math.ceil((autumnEquinox - today) / (1000 * 60 * 60 * 24));

    return { daysUntilSpring, daysUntilAutumn };
}
function fun(event) { 
    event.preventDefault();
    const { daysUntilSpring, daysUntilAutumn } = daysUntilEquinoxes();
    formElementTextArea.value = `До весеннего равноденствия осталось ${daysUntilSpring} дней.\n` +
                                 `До осеннего равноденствия осталось ${daysUntilAutumn} дней.`;
}

button.addEventListener('click', fun);