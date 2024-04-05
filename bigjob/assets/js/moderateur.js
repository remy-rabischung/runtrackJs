document.addEventListener('DOMContentLoaded', function() {
    afficherDemandesInscription();
});

function afficherDemandesInscription() {
    var demandesList = document.getElementById('demandes-list');
    if (demandesList) {
        var demandes = [
            { nom: 'William Kies', cours: 'Bootstrap', date: '10/04/2024' },
            { nom: 'Pawel Barc', cours: 'Javascript', date: '11/04/2024' },
            { nom: 'Remy Rabischung', cours: 'Python', date: '12/04/2024' }
        ];

        demandes.forEach(function(demande) {
            var li = document.createElement('li');
            li.className = 'list-group-item d-flex justify-content-between align-items-center py-3';
            li.textContent = demande.nom + ' souhaite s\'inscrire au cours de ' + demande.cours + ' le ' + demande.date;

            var buttonsDiv = document.createElement('div');
            buttonsDiv.className = 'btn-group';

            var accepterButton = document.createElement('button');
            accepterButton.className = 'btn btn-success me-2';
            accepterButton.textContent = 'Accepter';
            accepterButton.addEventListener('click', function() {
                accepterDemande(demande);
                demandesList.removeChild(li);
            });

            var refuserButton = document.createElement('button');
            refuserButton.className = 'btn btn-danger';
            refuserButton.textContent = 'Refuser';
            refuserButton.addEventListener('click', function() {
                refuserDemande(demande);
                demandesList.removeChild(li);
            });

            buttonsDiv.appendChild(accepterButton);
            buttonsDiv.appendChild(refuserButton);
            li.appendChild(buttonsDiv);

            demandesList.appendChild(li);
        });
    } else {
        console.error("L'élément avec l'ID demandes-list n'a pas été trouvé.");
    }
}

function accepterDemande(demande) {
    console.log('Demande de ' + demande.nom + ' acceptée.');
}

function refuserDemande(demande) {
    console.log('Demande de ' + demande.nom + ' refusée.');
}

