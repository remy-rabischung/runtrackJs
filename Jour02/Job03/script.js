let compteur = 0;
function AddOne() {
  compteur++;
  document.getElementById("compteur").textContent = compteur;
}

document.getElementById("button").addEventListener("click", AddOne);

