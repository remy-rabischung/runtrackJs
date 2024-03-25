function jourTravaille(date) {
    let jour = date.getDate();
    let mois = date.getMonth() + 1;
    let annee = date.getFullYear();

    let joursFeries = [
        "01/01/2024", "01/04/2024", "01/05/2024", "08/05/2024", "30/05/2024", "10/06/2024", "14/07/2024", "15/08/2024", "01/11/2024", "11/11/2024", "25/12/2024"];

    let dateString = ("0" + jour).slice(-2) + "/" + ("0" + mois).slice(-2) + "/" + annee;
    if (joursFeries.includes(dateString)) {
        console.log("Le " + dateString + " est un jour férié");
    }
    else if (date.getDay() === 0 || date.getDay() === 6) {
        console.log("Non, le " + dateString + " est un week-end");
    }
    else {
        console.log("Oui, le " + dateString + " est un jour travaillé");
    }
}

var dateTest = new Date(2024, 0, 1);
jourTravaille(dateTest);