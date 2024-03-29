document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.querySelector('.form_cnx');
    const emailInput = document.getElementById('mail');
    const passwordInput = document.getElementById('mdp');
    const errorMessages = document.querySelectorAll('.error-message');

    const validators = {
        'mail': validateEmail,
        'mdp': validatePassword
    };

    [emailInput, passwordInput].forEach(input => {
        input.addEventListener('input', function () {
            const validator = validators[input.id];
            if (validator) {
                clearError(input);
                if (!validator(input.value)) {
                    showError(input, getErrorMessage(input.id));
                }
            }
        });
    });

    function validateEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    function validatePassword(password) {
        const passwordRegex = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]+$/;
        return passwordRegex.test(password) && password.length >= 8;
    }

    function showError(input, message) {
        const errorMessage = document.getElementById(input.id + '-error');
        errorMessage.textContent = message;
        input.classList.add('error');
    }

    function clearError(input) {
        const errorMessage = document.getElementById(input.id + '-error');
        errorMessage.textContent = '';
        input.classList.remove('error');
    }

    function getErrorMessage(id) {
        switch (id) {
            case 'mail':
                return 'Adresse e-mail invalide.';
            case 'mdp':
                return 'Le mot de passe doit contenir au moins 8 caractères, un chiffre et un caractère spécial.';
            default:
                return '';
        }
    }

    loginForm.addEventListener('submit', function (event) {
        event.preventDefault();
        const invalidInputs = [...errorMessages].filter(errorMessage => errorMessage.textContent !== '');
        if (invalidInputs.length === 0) {
            loginForm.submit();
        }
    });
});




