function sommeNombresPremiers(a, b) {
    function estNombrePremier(nb) {
        if (nb <= 1) {
            return false;
        }
        for (let diviseur = 2; diviseur <= Math.sqrt(nb); diviseur++) {
            if (nb % diviseur === 0) {
                return false;
            }
        }
        return true;
    }

    if (estNombrePremier(a) && estNombrePremier(b)) {
        return a + b;
    } else {
        return false;
    }
}

const nb1 = 2;
const nb2 = 17;
const somme = sommeNombresPremiers(nb1, nb2);

if (somme !== false) {
    console.log(`La somme de ${nb1} et ${nb2} est ${somme}.`);
} else {
    console.log("Au moins l'un des nombres n'est pas premier.");
}