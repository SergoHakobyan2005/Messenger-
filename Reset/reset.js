let resetButton = document.querySelector(".sign_button");
let resetEmail = document.querySelector(".input_block .email");

resetButton.onclick = () => {
    resetEmail.value = "";
}