function jsonValueKey(jsonString, key) {
    try {
        const jsonObject = JSON.parse(jsonString);
        if (jsonObject.hasOwnProperty(key)) {
            return jsonObject[key];
        } else {
            return null;
        }
    } catch (error) {
        console.error("Erreur lors de l'analyse de la chaîne JSON:", error);
        return null;
    }
}
const jsonString = `{
    "name": "La Plateforme",
    "adress": "8 rue d'hozier",
    "city": "Marseille",
    "nb_staff": 11,
    "creation": 2019
}`;
const key = "city";

const value = jsonValueKey(jsonString, key);

console.log("La valeur associée à la clé", key, "est:", value);
