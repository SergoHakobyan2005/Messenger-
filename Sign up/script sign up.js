const userName = document.querySelector('.input_block .name');
const userEmail = document.querySelector('.input_block .email');
const userPassword = document.querySelector('.input_block .password');
const userBtn = document.querySelector('.sign_button');

userBtn.onclick = () => {
    if (userName.value == "" && userPassword.value == "" && userEmail.value == "") {
        alert('Заполните строку');
    } else {
        localStorage.setItem('nameKey', userName.value);
        localStorage.setItem('passwordKey', userPassword.value);
        function time() {
            window.location.href = 'Loading1/index.html';
        }
        setTimeout(time, 500);
    }
}