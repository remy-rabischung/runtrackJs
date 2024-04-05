document.addEventListener('DOMContentLoaded', function() {
    afficherUtilisateurs();
});

function afficherUtilisateurs() {
    var usersList = document.getElementById('users-list');

    if (usersList) {
        var utilisateurs = [
            { nom: 'Remy Rabischung', role: 'Étudiant' },
            { nom: 'William Kies', role: 'Modérateur' },
            { nom: 'Cyril Zimmermann', role: 'Administrateur' },
            { nom: 'Pawel Barc', role: 'Étudiant' },
            { nom: 'Aurelie Preaud', role: 'Modérateur' },
            { nom: 'Christian-Michael Etienne', role: 'Étudiant' }
        ];

        utilisateurs.forEach(function(utilisateur) {
            var li = document.createElement('li');
            li.className = 'list-group-item d-flex justify-content-between align-items-center py-3';
            li.textContent = utilisateur.nom + ' - ' + utilisateur.role;

            var buttonsDiv = document.createElement('div');
            buttonsDiv.className = 'btn-group';

            var supprimerButton = document.createElement('button');
            supprimerButton.className = 'btn btn-danger me-2';
            supprimerButton.textContent = 'Supprimer';
            supprimerButton.addEventListener('click', function() {
                supprimerUtilisateur(utilisateur);
                usersList.removeChild(li);
            });

            var promouvoirButton = document.createElement('button');
            promouvoirButton.className = 'btn btn-success me-2';
            promouvoirButton.textContent = 'Promouvoir';
            promouvoirButton.addEventListener('click', function() {
                promouvoirUtilisateur(utilisateur);
                li.textContent = utilisateur.nom + ' - ' + utilisateur.role;
            });

            var degraderButton = document.createElement('button');
            degraderButton.className = 'btn btn-warning';
            degraderButton.textContent = 'Rétrograder';
            degraderButton.addEventListener('click', function() {
                degraderUtilisateur(utilisateur);
                li.textContent = utilisateur.nom + ' - ' + utilisateur.role;
            });

            buttonsDiv.appendChild(supprimerButton);
            buttonsDiv.appendChild(promouvoirButton);
            buttonsDiv.appendChild(degraderButton);
            li.appendChild(buttonsDiv);

            usersList.appendChild(li);
        });
    } else {
        console.error("L'élément avec l'ID users-list n'a pas été trouvé.");
    }
}

function supprimerUtilisateur(utilisateur) {
    console.log('Utilisateur ' + utilisateur.nom + ' supprimé.');
}

function promouvoirUtilisateur(utilisateur) {
    console.log('Utilisateur ' + utilisateur.nom + ' promu.');
}

function degraderUtilisateur(utilisateur) {
    console.log('Utilisateur ' + utilisateur.nom + ' dégradé.');
}
