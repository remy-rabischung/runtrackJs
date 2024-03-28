$("#button").click(function() {
    let p = $("#exp");
    if (p.length) {
        p.remove();
    } else {
        fetch('expression.txt')
            .then(response => response.text())
            .then(text => {
                $("<p>").attr("id", "exp").text(text).appendTo("body");
            })
            .catch(error => {
                console.error('Erreur lors du chargement du fichier :', error);
            });
    }
});