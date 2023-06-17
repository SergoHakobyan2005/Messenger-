let checkbox = document.querySelector(".remember");
let rememberText = document.querySelector(".remember_text");
let button = document.querySelector('.sign_button');
let uName = document.querySelector('.input_block .name');
let uPassword = document.querySelector('.input_block .password');

checkbox.onclick = function repeat() {
    checkbox.style.background = "#665DFE";
    checkbox.innerHTML = "✔";
    checkbox.onclick = () => {
        checkbox.style.background = "white";
        checkbox.innerHTML = "";
        checkbox.onclick = () => {
            repeat();
        }
    }
}

rememberText.onclick = function repeat() {
    checkbox.style.background = "#665DFE";
    checkbox.innerHTML = "✔";
    rememberText.onclick = () => {
        checkbox.style.background = "white";
        checkbox.innerHTML = "";
        rememberText.onclick = () => {
            repeat();
        }
    }
}

let saveName = localStorage.getItem('nameKey');
let savePassword = localStorage.getItem('passwordKey');

button.onclick = () => {
    if (uName.value === saveName && uPassword.value === savePassword) {
        function time() {
            window.location.href = '../Loading2/index.html';
        }
        setTimeout(time, 500);
    } else {
        alert('Неверный логин или пароль')
    }
}