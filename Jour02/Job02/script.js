document.getElementById("button").addEventListener("click", showhide);

function showhide() {
    let b = document.body
    let NewArticle = document.createElement('article');
    NewArticle.textContent = "L'important n'est pas la chute, mais l'atterrissage."
    b.append(NewArticle)
}