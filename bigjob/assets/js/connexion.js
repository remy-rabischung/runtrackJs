document.getElementById('btn-login').addEventListener('click', function(event) {
    event.preventDefault(); 

    let email = document.getElementById('email-verif').value;
    let password = document.getElementById('pass-verif').value;

    fetch('assets/json/fichier.json')
    .then(response => response.json())
    .then(data => {
        let utilisateur = data.find(function(user) {
            return user.email === email && user.motdepasse === password;
        });

        if (utilisateur) {
            alert('Connexion réussie en tant que ' + utilisateur.role);
            switch (utilisateur.role) {
                case 'etudiant':
                    window.location.href = 'assets/pages/etudiant.html';
                    break;
                case 'moderateur':
                    window.location.href = 'assets/pages/moderateur.html';
                    break;
                case 'administrateur':
                    window.location.href = 'assets/pages/admin.html';
                    break;
                default:
                    window.location.href = 'index.html';
            }
        } else {
            document.getElementById('erreur-message').textContent = 'Email ou mot de passe incorrect';
        }
    })
    .catch(error => {
        console.error('Une erreur s\'est produite lors du chargement du fichier JSON :', error);
    });
});
