document.addEventListener('keydown', (event) => {
    const keyName = event.key;
    document.getElementById('message').textContent = `Вы нажали клавишу: ${keyName}`;
});