document.getElementById("button").addEventListener("click", showhide);

function showhide() {
    let article = document.getElementById("article");
    if (article) {
        article.parentNode.removeChild(article);
    } else {
        let newArticle = document.createElement("article");
        newArticle.setAttribute("id", "article");
        newArticle.textContent = "L'important n'est pas la chute, mais l'atterrissage.";
        document.body.appendChild(newArticle);
    }
}
