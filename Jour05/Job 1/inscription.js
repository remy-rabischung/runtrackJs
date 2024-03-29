document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.querySelector('.form_cnx');
    const prenomInput = document.getElementById('prenom');
    const nomInput = document.getElementById('nom');
    const emailInput = document.getElementById('mail');
    const addInput = document.getElementById('add');
    const codeInput = document.getElementById('code');
    const passwordInput = document.getElementById('mdp');
    const confirmPasswordInput = document.getElementById('mdp_confirm');
    const checkboxInput = document.getElementById('submitBtn');
    const errorMessages = document.querySelectorAll('.error-message');

    const validators = {
        'mail': validateEmail,
        'mdp': validatePassword,
        'code': validateCode,
        'add': validateAddress,
        'prenom': validateFirstName,
        'nom': validateLastName,
        'mdp_confirm': validatePasswordConfirmation,
        'submitBtn': validateCheckbox
    };

    [prenomInput, nomInput, emailInput, addInput, codeInput, passwordInput, confirmPasswordInput, checkboxInput].forEach(input => {
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

    function validateCode(code) {
        return code.length >= 5;
    }

    function validateAddress(address) {
        return address.length >= 8;
    }

    function validateFirstName(firstName) {
        return firstName.length >= 3;
    }

    function validateLastName(lastName) {
        return lastName.length >= 3;
    }

    function validatePasswordConfirmation(passwordConfirmation) {
        return passwordConfirmation === passwordInput.value;
    }

    function validateCheckbox(checked) {
        return checked;
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
            case 'code':
                return 'Le code postal doit contenir au moins 5 caractères.';
            case 'add':
                return 'Adresse incorrecte.';
            case 'prenom':
                return 'Le prénom doit contenir au moins 3 caractères.';
            case 'nom':
                return 'Le nom doit contenir au moins 3 caractères.';
            case 'mdp_confirm':
                return 'Les mots de passe ne correspondent pas.';
            case 'submitBtn':
                return 'Vous devez accepter les conditions.';
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
