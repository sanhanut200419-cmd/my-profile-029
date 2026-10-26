const greetButton = document.getElementById('greetButton');
const greetMessage = document.getElementById('greetMessage');

greetButton.addEventListener('click', () => {
    greetMessage.textContent = 'ยินดีต้อนรับ แน็ค!';
    greetMessage.hidden = false;
});