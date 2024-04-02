// JUMBOTRON
const bladeRunnerQuotes = [
    "Toutes ces choses disparaîtront comme des larmes dans la pluie.",
    "Je pense, donc je suis.",
    "Les réplicants sont comme toutes les autres machines : ils peuvent constituer un bienfait ou un danger. Quand ils sont un bienfait, ce n'est pas mon problème.",
    "Les réplicants n'étaient pas censés avoir des sentiments... mais les blade runners non plus.",
    "J'ai vu des choses que vous, les gens, ne croiriez pas."
  ];
  
  function getRandomQuote() {
    const randomIndex = Math.floor(Math.random() * bladeRunnerQuotes.length);
    return bladeRunnerQuotes[randomIndex];
  }
  
  document.getElementById('rebootButton').addEventListener('click', function() {
    const randomQuote = getRandomQuote();
    document.getElementById('jumbotron').textContent = randomQuote;
  });

// PAGINATION
document.getElementById('page1').addEventListener('click', function() {
    updateJumbotronContent("Bienvenue dans la Matrice", "La Matrice est une simulation informatique sophistiquée qui simule la réalité et trompe les êtres humains en leur faisant croire qu'ils vivent dans le monde réel, alors qu'en fait ils sont retenus captifs dans des cuves de liquide nourricier, utilisés comme source d'énergie pour les machines qui dominent le monde réel. La Matrice est contrôlée par une intelligence artificielle appelée la 'Machine-Mère', qui utilise des programmes pour maintenir l'illusion de la réalité et manipuler les esprits des humains connectés à la Matrice.");
  });
  
  document.getElementById('page2').addEventListener('click', function() {
    updateJumbotronContent("Bienvenue dans la DeLorean", "La DeLorean est une voiture de sport, modifié par le Dr Emmett Brown, un inventeur excentrique, elle est devenue une machine à voyager dans le temps. La voiture est modifiée avec un dispositif appelé 'le convecteur temporel' qui lui permet de voyager dans le temps lorsqu'elle atteint une vitesse de 88 miles par heure (environ 141 km/h).");
  });
  
  document.getElementById('page3').addEventListener('click', function() {
    updateJumbotronContent("Bienvenue dans l'Inception", "Dans un futur proche, les États-Unis ont développé ce qui est appelé le « rêve partagé », une méthode permettant d'influencer l'inconscient d'une victime pendant qu'elle rêve, donc à partir de son subconscient. Des « extracteurs » s'immiscent alors dans ce rêve, qu'ils ont préalablement modelé et qu'ils peuvent contrôler, afin d'y voler des informations sensibles, stockées dans le subconscient de la cible.");
  });
  function updateJumbotronContent(title, content) {
    document.getElementById('jumbotronContent').innerHTML = `
      <h1>${title}</h1>
      <p>${content}</p>
    `;
  }
  
// LISTE
const listItems = document.querySelectorAll('.list-group-item');

listItems.forEach(item => {
  item.addEventListener('click', function() {
    listItems.forEach(otherItem => {
      otherItem.classList.remove('active');
    });
    item.classList.add('active');
  });
});

// BOUTON BAR PROGRESS
document.addEventListener('DOMContentLoaded', function() {
    const progressBar = document.getElementById('progressBar');
    const increaseButton = document.getElementById('increaseButton');
    const decreaseButton = document.getElementById('decreaseButton');
    
    increaseButton.addEventListener('click', function() {
      let newValue = parseInt(progressBar.getAttribute('aria-valuenow')) + 10;
      if (newValue > 100) {
        newValue = 100;
      }
      progressBar.style.width = newValue + '%';
      progressBar.setAttribute('aria-valuenow', newValue);
    });
    
    decreaseButton.addEventListener('click', function() {
      let newValue = parseInt(progressBar.getAttribute('aria-valuenow')) - 10;
      if (newValue < 0) {
        newValue = 0;
      }
      progressBar.style.width = newValue + '%';
      progressBar.setAttribute('aria-valuenow', newValue);
    });
  });

// DGC MODAL
let sequence = '';

document.addEventListener('keydown', function(event) {
  if (event.key === 'd') {
    sequence += 'd';
  } else if (event.key === 'g' && sequence === 'd') {
    sequence += 'g';
  } else if (event.key === 'c' && sequence === 'dg') {
    sequence += 'c';
    showModal();
  } else {
    sequence = '';
  }
});

function showModal() {
  const loginValue = document.getElementById('autoSizingInputGroup').value;
  const passwordValue = document.getElementById('exampleInputPassword1').value;
  const emailValue = document.getElementById('exampleInputEmail1').value;
  const recapModalBody = document.getElementById('recapModalBody');
  recapModalBody.innerHTML = `
    <p>Login : ${loginValue}</p>
    <p>Password : ${passwordValue}</p>
    <p>Email : ${emailValue}</p>
  `;
  const recapModal = new bootstrap.Modal(document.getElementById('recapModal'));
  recapModal.show();
}

  
  
  
  

  

  

  