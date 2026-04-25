const form = document.getElementById('registrationForm');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirmPassword');

form.addEventListener('submit', function (e) {
    e.preventDefault();

    clearErrors();

    let isValid = true;

    if (username.value.trim().length < 3) {
        showError('usernameError', 'Username must be at least 3 characters', username);
        isValid = false;
    } else {
        setSuccess(username);
    }

    if (!email.checkValidity()) {
        showError('emailError', 'Please enter a valid email address', email);
        isValid = false;
    } else {
        setSuccess(email);
    }

    if (password.value.length < 8) {
        showError('passwordError', 'Password must be at least 8 characters', password);
        isValid = false;
    } else {
        setSuccess(password);
    }

    if (confirmPassword.value !== password.value || confirmPassword.value === "") {
        showError('confirmError', 'Passwords do not match', confirmPassword);
        isValid = false;
    } else {
        setSuccess(confirmPassword);
    }

    if (isValid) {
        alert("Registration Successful!");
    }
});

function showError(errorId, message, inputElement) {
    const errorDisplay = document.getElementById(errorId);
    errorDisplay.innerText = message;
    inputElement.classList.add('invalid');
}

function setSuccess(inputElement) {
    inputElement.classList.remove('invalid');
    inputElement.classList.add('valid');
}

function clearErrors() {
    const errorSpans = document.querySelectorAll('.error');
    errorSpans.forEach(span => span.innerText = "");

    const inputs = document.querySelectorAll('input');
    inputs.forEach(input => {
        input.classList.remove('invalid');
        input.classList.remove('valid');
    });
}