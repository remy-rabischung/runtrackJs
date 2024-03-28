document.getElementById("filtrer").addEventListener("click", function() {
    let id = document.getElementById("id").value.trim();
    let nom = document.getElementById("nom").value.trim();
    let type = document.getElementById("type").value.trim();

    fetch("pokemon.json")
        .then(response => response.json())
        .then(data => {
            let resultats = data.filter(pokemon => {
                let idMatch = id === "" || pokemon.id.toString() === id;
                let nomMatch = nom === "" || pokemon.name.english.toLowerCase().includes(nom.toLowerCase());
                let typeMatch = type === "" || pokemon.type.includes(type);
                return idMatch && nomMatch && typeMatch;
            });

            afficherResultats(resultats);
        })
        .catch(error => {
            console.error("Erreur lors du chargement du fichier JSON:", error);
        });
});

function afficherResultats(resultats) {
    let resultatsDiv = document.getElementById("resultats");
    resultatsDiv.innerHTML = "";

    if (resultats.length === 0) {
        resultatsDiv.textContent = "Aucun résultat trouvé.";
    } else {
        let ul = document.createElement("ul");
        resultats.forEach(pokemon => {
            let li = document.createElement("li");
            li.textContent = `ID: ${pokemon.id}, Nom: ${pokemon.name.english}, Type: ${pokemon.type.join(", ")}`;
            ul.appendChild(li);
        });
        resultatsDiv.appendChild(ul);
    }
}
