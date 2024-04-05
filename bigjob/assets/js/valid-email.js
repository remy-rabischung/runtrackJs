document.addEventListener("DOMContentLoaded", function() {
    let passwordField = document.getElementById('password');
    let confirmPasswordField = document.getElementById('confirm-password');

    confirmPasswordField.addEventListener('blur', function() {
        let password = passwordField.value;
        let confirmPassword = confirmPasswordField.value;

        if (password !== confirmPassword) {
            document.getElementById('erreur-email').textContent = 'Les mots de passe ne correspondent pas';
        } else {
            document.getElementById('erreur-email').textContent = '';
        }
    });
    passwordField.addEventListener('blur', function() {
        let password = passwordField.value;
        let regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        if (!regex.test(password)) {
            document.getElementById('erreur-email').textContent = 'Le mot de passe doit contenir au moins une majuscule, une minuscule, un chiffre, un caractère spécial et avoir une longueur d\'au moins 8 caractères';
        } else {
            document.getElementById('erreur-email').textContent = '';
        }
    });

    function verifierEmail(email) {
        let regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!regex.test(email)) {
            return "L'adresse e-mail n'est pas valide.";
        }
        let domaine = email.split('@')[1];
        if (domaine !== 'laplateforme.io') {
            return "L'adresse e-mail doit appartenir au domaine 'laplateforme.io'.";
        }
        return null;
    }

    function verifierEtAfficherErreur() {
        let emailInput = document.getElementById("email-verif");
        let email = emailInput.value;
        let erreur = verifierEmail(email);
        let erreurElement = document.getElementById("erreur-email");
        if (erreur) {
            erreurElement.innerText = erreur;
        } else {
            erreurElement.innerText = "";
        }
    }

    document.getElementById("email-verif").addEventListener("blur", verifierEtAfficherErreur);
});
