const password = document.getElementById("password");
const togglePassword = document.getElementById("togglePassword");
const checkBtn = document.getElementById("checkBtn");
const strengthFill = document.getElementById("strengthFill");
const strengthText = document.getElementById("strengthText");
const generateBtn = document.getElementById("generateBtn");
const generatedPassword = document.getElementById("generatedPassword");
const copyBtn = document.getElementById("copyBtn");


togglePassword.addEventListener("click", function () {
    if (password.type === "password") {
        password.type = "text";
        togglePassword.innerHTML = "🙈";
    } else {
        password.type = "password";
        togglePassword.innerHTML = "👁";
    }
});


checkBtn.addEventListener("click", function () {

    let pass = password.value;
    let score = 0;

    if (pass.length >= 8) score++;
    if (/[A-Z]/.test(pass)) score++;
    if (/[a-z]/.test(pass)) score++;
    if (/[0-9]/.test(pass)) score++;
    if (/[!@#$%^&*(),.?":{}|<>]/.test(pass)) score++;

    if (score == 0) {
        strengthFill.style.width = "0%";
        strengthFill.style.background = "red";
        strengthText.innerHTML = "Enter Password";
    }
    else if (score == 1) {
        strengthFill.style.width = "20%";
        strengthFill.style.background = "red";
        strengthText.innerHTML = "Very Weak Password";
    }
    else if (score == 2) {
        strengthFill.style.width = "40%";
        strengthFill.style.background = "orange";
        strengthText.innerHTML = "Weak Password";
    }
    else if (score == 3) {
        strengthFill.style.width = "60%";
        strengthFill.style.background = "gold";
        strengthText.innerHTML = "Medium Password";
    }
    else if (score == 4) {
        strengthFill.style.width = "80%";
        strengthFill.style.background = "limegreen";
        strengthText.innerHTML = "Strong Password";
    }
    else {
        strengthFill.style.width = "100%";
        strengthFill.style.background = "green";
        strengthText.innerHTML = "Very Strong Password";
    }

});


generateBtn.addEventListener("click", function () {

    const chars =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";

    let newPassword = "";

    for (let i = 0; i < 12; i++) {
        newPassword += chars.charAt(
            Math.floor(Math.random() * chars.length)
        );
    }

    generatedPassword.value = newPassword;

});

copyBtn.addEventListener("click", function () {

    generatedPassword.select();
    generatedPassword.setSelectionRange(0, 99999);

    navigator.clipboard.writeText(generatedPassword.value);

    alert("Password Copied Successfully!");

});